/** @jsx jsx */

import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles';

const Checkbox = ({ checked, handleChange, itemId }) => (
  <label sx={styles.root} htmlFor={`${itemId}-isComplete`}>
    <input
      checked={checked}
      id={`${itemId}-isComplete`}
      name="isComplete"
      onChange={event => handleChange(event)}
      sx={styles.input}
      type="checkbox"
    />
    <span sx={styles.customCheckbox}>
      <FontAwesomeIcon icon={faCheck} size="xs" sx={styles.icon} />
    </span>
  </label>
);

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func,
  itemId: PropTypes.number.isRequired,
};

Checkbox.defaultProps = {
  handleChange: () => {},
};

export default Checkbox;
