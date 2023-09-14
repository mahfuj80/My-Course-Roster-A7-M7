import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import Course from '../Course/Course';

const Courses = (props) => {
  const [allCourses, setAllCourses] = useState([]);
  useEffect(() => {
    fetch('courses.json')
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);
  return (
    <div className="grid grid-cols-3">
      {allCourses.map((course, idx) => (
        <Course key={idx} course={course}></Course>
      ))}
    </div>
  );
};

Courses.propTypes = {};

export default Courses;
