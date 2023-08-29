import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <div>Header</div>
      <div style={{ background: "red" }}>
        <Outlet />
      </div>
      <div>Footer</div>
    </div>
  );
};
