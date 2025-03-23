import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar"


const AdminDashboard = () => {
  return (
    <>
      <div className="w-full min-h-screen relative flex">
          <Sidebar />
          <Outlet />
      </div>
    </>
  )
}

export default AdminDashboard;