const size = '16';

const root = {
  cursor: 'pointer',
  display: 'block',
  height: `${size}px`,
  position: 'relative',
  width: `${size}px`,
};

const input = {
  position: 'absolute',
  cursor: 'pointer',
};

const customCheckbox = {
  backgroundColor: 'background',
  border: '1px solid #000',
  borderRadius: '5px',
  fontSize: '14px',
  height: `${size}px`,
  position: 'absolute',
  textAlign: 'center',
  top: '3px',
  width: `${size}px`,
};

const icon = {
  opacity: 0,
  verticalAlign: '1px',
  'input:checked ~ span > &': {
    opacity: 1,
  },
};

export default {
  customCheckbox,
  icon,
  input,
  root,
};
