import { Outlet } from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar";

const PagesLayout = () => {
  return <div className="w-full md:flex">
    <LeftSidebar />
    <section className="flex flex-1 h-full">
    <Outlet />
    </section>
  </div>;
};

export default PagesLayout;
