import { Link, Navigate, Outlet, Route, Routes } from "react-router-dom";
import AddEmployee from "./AddEmployee";
import EmployeeDetails from "./EmployeeDetails";
import Employees from "./Employees";
import ManageProjects from "./ManageProjects";

const Dashboard = () => {
  return (
    <div>
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Link to={`/`}>Employee</Link>
        <Link to={`/add-employee`}>Add Emoployee</Link>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Navigate to={"/employees"} />} />
          <Route path="/employees" element={<Employees />}></Route>
          <Route path="/employees/:id" element={<EmployeeDetails />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/manage-projects" element={<ManageProjects />} />
        </Routes>
      </main>
      <Outlet />
    </div>
  );
};

export default Dashboard;
