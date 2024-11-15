import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";

const ManageProjects = () => {
  const { state } = useLocation();

  const assignedProjects_id = state.employeeDetail.projectList.map(
    (item) => item.id
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
  return (
    <div>
      {projects?.map((item) => (
        <div>
          <span>{`id-${item.id}- Project Name: ${item.name}`}</span>{" "}
          {assignedProjects_id.includes(item.id) ? (
            <button>Remove</button>
          ) : (
            <button>Add</button>
          )}
      
        </div>
      ))}
    </div>
  );
};

export default ManageProjects;
