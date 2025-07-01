import { NavLink } from "react-router-dom";

export default function ItemBar({to, label}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `p-3 text-nowrap  ${isActive ? "bg-zinc-900 text-blue-400" : "max-md:hidden"}`
      }
    >
      {label}
    </NavLink>
  );
}
