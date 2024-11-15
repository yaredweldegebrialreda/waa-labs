import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Employee from "./Employee";

const Employees = () => {
  const [check, setCheck] = useState(false);

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/employees"
      );
      console.log(response);
      setEmployees(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {employees?.map((employee) => (
        <div key={employee.id}>
          <Employee empData={employee} />
        </div>
      ))}

      <Outlet />
    </div>
  );
};

export default Employees;
