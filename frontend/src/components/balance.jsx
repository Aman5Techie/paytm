import PropTypes from "prop-types";

const Balance = ({ balance }) => {
  return (
    <div className="flex pt-4 pb-5 ">
      <div className="font-bold text-lg">Your Balance</div>
      <div className="font-semibold ml-4 text-lg">Rs {balance}</div>
    </div>
  );
};

Balance.propTypes = {
  balance: PropTypes.number,
};

export default Balance;
