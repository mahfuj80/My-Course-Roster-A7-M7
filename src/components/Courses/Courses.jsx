import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import Course from '../Course/Course';

const Courses = ({ handleSelectedCourses }) => {
  const [allCourses, setAllCourses] = useState([]);
  useEffect(() => {
    fetch('courses.json')
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);
  return (
    <div className="grid gap-5 md:gap-6 grid-cols-1 md:grid-cols-2 bg-[#f3f3f3;] lg:grid-cols-3">
      {allCourses.map((course, idx) => (
        <Course
          key={idx}
          course={course}
          handleSelectedCourses={handleSelectedCourses}
        ></Course>
      ))}
    </div>
  );
};

Courses.propTypes = {
  handleSelectedCourses: PropTypes.func.isRequired,
};

export default Courses;
