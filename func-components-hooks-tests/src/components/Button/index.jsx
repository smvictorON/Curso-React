import './styles.css';
import proptypes from 'prop-types';

export const Button = ({ text, handleClick, disabled }) => {
  return (
    <button className="button" onClick={handleClick} disabled={disabled}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: proptypes.string.isRequired,
  handleClick: proptypes.func.isRequired,
  disabled: proptypes.bool,
};
