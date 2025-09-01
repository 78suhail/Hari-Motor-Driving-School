import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar/AdminSidebar";


const AdminLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar fixed */}
      <div className="fixed left-0 top-0 h-full">
        <AdminSidebar />
      </div>

      {/* Content area */}
      <div className="flex-1 ml-64 p-6 ">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
