
import PropTypes from 'prop-types';


const Heading = ({title}) => {
    return (
        <div className='font-bold text-4xl pt-6'>
            {title}
        </div>
    );
};


Heading.propTypes = {
    title : PropTypes.string
};


export default Heading;
