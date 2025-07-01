import { Routes, Route } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import FormPage from "./pages/FormPage";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import { TaskContextProvider } from "./context/TaskContextProvider";
export default function App() {
  return (
    <TaskContextProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/new" element={<FormPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </TaskContextProvider>
  );
}
