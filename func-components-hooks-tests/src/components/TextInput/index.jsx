import './styles.css';
import proptypes from 'prop-types';

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      type="search"
      value={searchValue}
      onChange={(e) => handleChange(e)}
      className="text-input"
      placeholder="Type your search"
    />
  );
};

TextInput.propTypes = {
  searchValue: proptypes.string.isRequired,
  handleChange: proptypes.func.isRequired,
};
