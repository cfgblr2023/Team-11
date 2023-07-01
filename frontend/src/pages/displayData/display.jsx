import React, { useEffect, useState } from 'react';



const Display = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/courses',{mode:'cors'})
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Courses:</h1>
      <ul>
        {courses.map(course => (
          <li key={course.name}>
            <a href={course.link}>{course.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
//Display.use(cors({ origin: true }));
export default Display;
