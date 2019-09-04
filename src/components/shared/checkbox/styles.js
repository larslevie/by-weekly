const size = '16';

const root = {
  cursor: 'pointer',
  display: 'block',
  height: `${size}px`,
  marginRight: 1,
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
  '.status-deferred &': {
    backgroundColor: 'teal',
    borderColor: 'tealAccent',
  },
  '.status-canceled &': {
    backgroundColor: 'red',
    borderColor: 'redAccent',
  },
};

const icon = {
  opacity: 0,
  verticalAlign: '1px',
  'input:checked ~ span > &, .status-deferred * &, .status-canceled * &': {
    opacity: 1,
  },
};

export default {
  customCheckbox,
  icon,
  input,
  root,
};
