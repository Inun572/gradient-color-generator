import PropTypes from 'prop-types';

const Pallete = ({ value, onChange, name }) => {
  return (
    <input
      type="color"
      name={name}
      value={value}
      className="w-[100px] h-[100px] p-0"
      onChange={onChange}
    />
  );
};

export default Pallete;

Pallete.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};
