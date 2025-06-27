import { getTasksRequest } from "../api/tasks.api";

import { useEffect, useState } from "react";

import TaskCard from "../component/TaskCard";

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function getTasks() {
      const result = await getTasksRequest();
      setTasks(result.data);
    }
    getTasks();
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Task List</h1>

      <section className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(350px,1fr))]">
        {tasks.map((task, index) => (
          <TaskCard index={index} task={task} />
        ))}
      </section>
    </main>
  );
}
