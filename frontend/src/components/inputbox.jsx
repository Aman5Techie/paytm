
import PropTypes from 'prop-types';


const Inputbox = ({lable,placeholder,onchange}) => {
    return (
        <div>
            <div className='text-sm font-medium text-left py-2'>{lable}</div>
            <input onChange = {(e)=>{onchange(e.target.value)}}placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200"/>
        </div>
    );
};


Inputbox.propTypes = {
    lable : PropTypes.string,
    placeholder : PropTypes.string,
    onchange : PropTypes.func
};


export default Inputbox;
