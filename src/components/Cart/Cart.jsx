import React from 'react';
import PropTypes from 'prop-types';

const Cart = (props) => {
  return (
    <div className="space-y-3">
      <h1 className="text-[#2F80ED] font-semibold text-lg">
        Credit Hour Remaining 7 hr
      </h1>
      <hr />
      <h1 className="font-semibold text-lg">Course Name</h1>
      <ol className="list-decimal px-4 text-sm space-y-2 text-[#1C1B1B99] font-normal">
        <li>Introduction to c Programming </li>
        <li>Introduction to c Programming </li>
        <li>Introduction to c Programming </li>
      </ol>
      <hr />
      <h3 className="text-base font-medium text-[#1C1B1BCC]">
        Total Credit Hour : 13
      </h3>
      <hr />
      <h3 className="text-base text-[#1C1B1BCC] font-semibold">
        Total Price : 48000 USD
      </h3>
    </div>
  );
};

Cart.propTypes = {};

export default Cart;
