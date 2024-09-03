// src/components/StudentForm.js
import React, { useState } from "react";

const StudentForm = ({ addStudent }) => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(student);
    setStudent({ name: "", email: "", course: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Course:</label>
        <input
          type="text"
          name="course"
          value={student.course}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default StudentForm;
