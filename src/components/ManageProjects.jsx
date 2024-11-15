import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ManageProjects = () => {
  const { state } = useLocation();
  const [assignedProjects_id, setAssignedProjects_id] = useState(
    state.employeeDetail?.projectList?.map((item) => item.id) || []
  );
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);
  const fetchProjects = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/v1/projects");
      setProjects(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // remove project from an employee
  const handleRemoveProjectFromEmployee = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:8080/api/v1/employees/${state.employeeDetail.id}/projects/${id}`
      );
      setAssignedProjects_id((assignedProjects_id) =>
        assignedProjects_id.filter((pid) => pid != id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  // Add project to an employee
  const handleAddProjectToEmployee = async (id) => {
    try {
      const res = await axios.put(
        `http://localhost:8080/api/v1/employees/${state.employeeDetail.id}/projects/${id}`
      );
      const updatedAssignedProjects_id = [...assignedProjects_id, id];
      setAssignedProjects_id(updatedAssignedProjects_id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {projects?.map((item) => (
        <div key={item.id}>
          <span>{`id-${item.id}- Project Name: ${item.name}`}</span>{" "}
          {assignedProjects_id?.includes(item.id) ? (
            <button onClick={() => handleRemoveProjectFromEmployee(item.id)}>
              Remove
            </button>
          ) : (
            <button onClick={() => handleAddProjectToEmployee(item.id)}>
              Add
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ManageProjects;
