import PropTypes from 'prop-types';

const Cart = ({
  remainingCreditHour,
  selectedCoursesName,
  usedCreditHour,
  totalPrice,
}) => {
  console.log(selectedCoursesName);
  return (
    <>
      <div className="space-y-3">
        <h1 className="text-[#2F80ED] font-semibold text-lg">
          Credit Hour Remaining {remainingCreditHour} hr
        </h1>
        <hr />
        <h1 className="font-semibold text-lg">Course Name</h1>
        <ol className="list-decimal px-4 text-sm space-y-2 text-[#1C1B1B99] font-normal">
          {selectedCoursesName.map((name, idx) => (
            <li key={idx}>{name}</li>
          ))}
        </ol>
        <hr />
        <h3 className="text-base font-medium text-[#1C1B1BCC]">
          Total Credit Hour : {usedCreditHour}
        </h3>
        <hr />
        <h3 className="text-base text-[#1C1B1BCC] font-semibold">
          Total Price : {totalPrice} USD
        </h3>
      </div>
    </>
  );
};

Cart.propTypes = {
  remainingCreditHour: PropTypes.number.isRequired,
  selectedCoursesName: PropTypes.array.isRequired,
  usedCreditHour: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default Cart;
