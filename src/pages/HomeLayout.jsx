import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <div>HomeLayout</div>
      <nav>navbar</nav>
      <Outlet />
    </>
  );
};
export default HomeLayout;
