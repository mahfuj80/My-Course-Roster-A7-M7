import PropTypes from 'prop-types';
import { LuDollarSign } from 'react-icons/lu';
import { BsBook } from 'react-icons/bs';

const Course = ({ course, handleSelectedCourses }) => {
  const { id, course_name, image, details, price, credit } = course;
  // console.log(course);
  return (
    <div>
      <div className="card bg-base-100 ">
        <figure className="p-2">
          <img src={image} alt="Course_Banner" className="rounded-xl" />
        </figure>
        <div className="px-4 text-left pb-5 space-y-2">
          <h2 className="text-lg font-bold text-left">{course_name}</h2>
          <p className="text-[#1c1b1b99] text-sm">{details}</p>
          <div className="card-actions space-y-3">
            <div className="flex justify-between w-full">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-xl">
                  <LuDollarSign />
                </span>
                <span className="text-[#1C1B1B99]">Price: {price}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-xl">
                  <BsBook />
                </span>
                <span className="text-[#1C1B1B99]">Credit : {credit}hr</span>
              </div>
            </div>
            <button
              onClick={() =>
                handleSelectedCourses(id, course_name, credit, price)
              }
              className="w-full bg-[#2F80ED] rounded-lg text-white h-10"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleSelectedCourses: PropTypes.func.isRequired,
};

export default Course;
