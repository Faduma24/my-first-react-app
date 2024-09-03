import React, { useState } from "react";
import "./App.css";

function App() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
  });

  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, student]);
    setStudent({ name: "", email: "", course: "" });
  };

  return (
    <div className="App">
      <h1>My name is Faduma and this is my first React app</h1>

      <h2>Register a new student</h2>
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

      <h2>Registered Students</h2>
      <ul>
        {students.map((s, index) => (
          <li key={index}>
            {s.name} ({s.email}) - {s.course}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
