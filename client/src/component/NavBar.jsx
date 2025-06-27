import ItemBar from "./ItemBar";

export default function NavBar() {
  return (
    <header className="bg-zinc-800 text-zinc-50">
      <nav className="flex justify-between max-md:justify-center items-center px-4 max-w-[1200px] m-auto">
        <a href="/" className="max-md:hidden">
          <span className="font-bold">CURD /</span>{" "}
          <span className="text-blue-400">MYSQL</span>
        </a>

        <ul>
          <li className="flex gap-4">
            <ItemBar to ='/' label ='Task Page'/>
            <ItemBar to ='/new' label ='Form Page'/>
          </li>
        </ul>
      </nav>
    </header>
  );
}
