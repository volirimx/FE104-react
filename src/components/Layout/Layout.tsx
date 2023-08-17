import { NavLink, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <div>
        <NavLink
          to="/пример1"
          //   className={({ isActive }) => {
          //     isActive ? "active-link" : "";
          //   }}
        >
          пример1
        </NavLink>{" "}
        <NavLink to="/пример2">пример2</NavLink>
      </div>

      <footer>123</footer>
      <Outlet />
    </>
  );
}
