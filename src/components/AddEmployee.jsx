import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddEmployee = () => {
  const navigate = useNavigate();
  const [formData, seFormData] = useState({
    name: "",
    salary: 0.0,
    projectList: [],
  });

  const handleInputChange = (e) => {
    seFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddEmployee = async (e) => {
    const { salary, projectList, name } = formData;
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post(
        "http://localhost:8080/api/v1/employees",
        { salary: salary, projectList: projectList, name: name },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleAddEmployee}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="salary">salary:</label>
        <input
          type="number"
          id="salary"
          name="salary"
          required
          onChange={handleInputChange}
        />
        <br />
        <input type="submit" value="Add Employee" />
      </form>
    </div>
  );
};

export default AddEmployee;
