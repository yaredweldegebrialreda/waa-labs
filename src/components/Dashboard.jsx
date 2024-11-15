import { Link, Navigate, Outlet, Route, Routes } from "react-router-dom";
import AddEmployee from "./AddEmployee";
import EmployeeDetails from "./EmployeeDetails";
import Employees from "./Employees";
import ManageProjects from "./ManageProjects";
import Header from "./Header";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to={"/employees"} />} />
          <Route path="/employees" element={<Employees />}>
            <Route path=":id" element={<EmployeeDetails />} />
          </Route>

          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/manage-projects" element={<ManageProjects />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;
