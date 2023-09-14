import PropTypes from 'prop-types';

const Course = ({ course }) => {
  const { id, course_name, image } = course;
  console.log(course);
  console.log(course_name, id);
  return (
    <div>
      <div className="card bg-base-100 ">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
};

export default Course;
