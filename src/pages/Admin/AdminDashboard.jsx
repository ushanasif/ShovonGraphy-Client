import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar"


const AdminDashboard = () => {
  return (
    <>
      <div className="w-full h-screen flex">
          <Sidebar />
          <Outlet />
      </div>
    </>
  )
}

export default AdminDashboard;