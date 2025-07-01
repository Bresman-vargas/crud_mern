import { Frown } from "lucide-react";
import { useEffect} from "react";

import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TasksContext";
export default function TasksPage() {
  const {tasks, getTasks} = useTasks()
  useEffect(() => {
    getTasks()
  }, [getTasks]);

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Task List</h1>

      <section className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(350px,1fr))]">
        {tasks.length === 0 ? (
          <h1 className="flex justify-center text-zinc-600 font-bold gap-2 bg-blue-50 py-4 rounded-md">
            <Frown /> No tasks yet
          </h1>
        ) : (
          tasks.map((task, index) => <TaskCard key={index} task={task} />)
        )}
      </section>
    </main>
  );
}
