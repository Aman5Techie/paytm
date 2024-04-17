import PropTypes from 'prop-types';

const Appbar = ({user}) => {
  return (
    <div className="  shadow h-14 flex justify-between">
      <div className=" font-bold text-2xl flex flex-col justify-center h-full ml-4">Paytm App</div>

      <div className="flex">
        <div className=" font-bold text-2xl flex flex-col justify-center h-full mr-4">Hello, {user.firstName} </div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">{user.firstName[0]}</div>
        </div>
      </div>
    </div>
  );
};

Appbar.propTypes = {
  user : PropTypes.object
};

export default Appbar;
