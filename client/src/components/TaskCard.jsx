import {Trash2, Pencil} from 'lucide-react'
import { useTasks } from "../context/TasksContext";

export default function TaskCard({index, task}) {
  const {deleteTask} =  useTasks()
  return (
    <article
      key={index}
      className="bg-white rounded-md p-6 border border-gray-200 grid  grid-cols-3"
    >
      <h2 className="text-xl font-bold text-gray-900 mb-2 col-span-2">
        {task.title}
      </h2>
      <div className="flex gap-2 items-start justify-end text-zinc-500">
        <button
          onClick={() => deleteTask(task.id)}
          className="size-8 flex justify-center items-center bg-zinc-100 border-1 border-zinc-200 rounded cursor-pointer text-zinc-500 hover:border-zinc-300 hover:border-2"
        >
          <Trash2 size="25" strokeWidth="2" />
        </button>
        <button className="size-8 flex justify-center items-center bg-zinc-100 border-1 border-zinc-200 rounded cursor-pointer text-zinc-500 hover:border-zinc-300 hover:border-2">
          <Pencil />
        </button>
      </div>
      <p className="text-gray-700 mb-4 col-span-3 break-all">{task.description}</p>
      <div className="flex justify-between items-center text-sm text-gray-600 col-span-2">
        <span
          className={`font-medium rounded-full px-2 border select-none ${
            task.completed
              ? "text-green-700 bg-green-200 border-green-400"
              : "text-red-700 bg-red-200 border-red-400"
          }`}
        >
          {task.completed ? "Completed" : "Pending"}
        </span>
      </div>
      <time className="ml-auto">
        {new Date(task.create_at).toLocaleDateString()}
      </time>
    </article>
  );
}
