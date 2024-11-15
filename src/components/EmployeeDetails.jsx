import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employeeDetail, setEmployeeDetail] = useState(null);

  useEffect(() => {
    fetchEmployeeInfo();
  }, []);

  const fetchEmployeeInfo = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/employees/${id}`
      );

      setEmployeeDetail(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deletehandle = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:8080/api/v1/employees/${id}`
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Employee Info</h1>
      <p>
        {" "}
        Name :{employeeDetail?.name ? employeeDetail.name : "hfhjgejhfgesjh"}
      </p>
      <p>Id :{employeeDetail?.id}</p>
      {employeeDetail?.projectList.length == 0
        ? "No projects"
        : employeeDetail?.projectList?.map((project) => (
            <div key={project?.id}>
              <p>{`id-${project.id} - Project Name:${project.name}`}</p>
            </div>
          ))}

      <Link to={`/manage-projects`}>Manage Projects</Link>
      <button onClick={deletehandle}>Delete</button>
      <Link to={".."}>Back</Link>
    </div>
  );
};

export default EmployeeDetails;
