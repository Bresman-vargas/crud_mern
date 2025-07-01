import { TaskContext } from "./TasksContext";
import { useState } from "react";
import {
  getTasksRequest,
  delateTaskRequest,
  createTaskRequest,
} from "../api/tasks.api";

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  async function getTasks() {
    const result = await getTasksRequest();
    setTasks(result.data);
  }
  const deleteTask = async (id) => {
    try {
      await delateTaskRequest(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (values, actions) => {
    try {
      await createTaskRequest(values);
      actions.resetForm();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <TaskContext.Provider value={{ tasks, getTasks, deleteTask, createTask }}>
      {children}
    </TaskContext.Provider>
  );
};
