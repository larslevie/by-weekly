/** @jsx jsx */

import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import styles from './styles';

const Checkbox = ({ checked, handleChange }) => (
  <label sx={styles.root} htmlFor="male">
    <input
      checked={checked}
      id="male"
      name="gender"
      onChange={event => handleChange(event)}
      sx={styles.input}
      type="checkbox"
    />
    <span sx={styles.customCheckbox} />
  </label>
);

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func,
};

Checkbox.defaultProps = {
  handleChange: () => {},
};

export default Checkbox;
