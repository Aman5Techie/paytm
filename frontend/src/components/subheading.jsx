
import PropTypes from 'prop-types';


const Subheading = ({des}) => {
    return (
        <div className='text-slate-500 text-md pt-1 px-4 pb-4'>
            {des}
            
        </div>
    );
};


Subheading.propTypes = {
    des : PropTypes.string
};


export default Subheading;
