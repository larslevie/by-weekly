/** @jsx jsx */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import styles from './styles';

const Checkbox = ({
  checked, handleChange, itemKey, name, icon, ...rest
}) => (
  <label sx={styles.root} htmlFor={itemKey}>
    <input
      checked={checked}
      id={itemKey}
      name={name}
      onChange={event => handleChange(event)}
      sx={styles.input}
      type="checkbox"
      {...rest}
    />
    <span sx={styles.customCheckbox}>
      <FontAwesomeIcon icon={icon} size="xs" sx={styles.icon} />
    </span>
  </label>
);

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func,
  itemKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.objectOf(PropTypes.any).isRequired,
};

Checkbox.defaultProps = {
  handleChange: () => {},
};

export default Checkbox;
