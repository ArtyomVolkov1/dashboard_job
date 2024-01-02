import { Outlet } from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";

const PagesLayout = () => {
  return (
    <div className="w-full">
      <LeftSidebar />
      <section className="h-full">
        <Outlet />
      </section>
    </div>
  );
};

export default PagesLayout;
