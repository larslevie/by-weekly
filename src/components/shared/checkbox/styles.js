const size = '14';

const root = {
  cursor: 'pointer',
  display: 'block',
  height: `${size}px`,
  marginRight: '12px',
  position: 'relative',
  width: `${size}px`,
};

const input = {
  cursor: 'pointer',
  opacity: 0,
  position: 'absolute',
};

const customCheckbox = {
  backgroundColor: 'background',
  border: '1px solid #dedede',
  borderRadius: '5px',
  fontSize: '14px',
  height: `${size}px`,
  position: 'absolute',
  textAlign: 'center',
  top: '4px',
  width: `${size}px`,
  'li:hover &': {
    borderColor: 'primary',
  },
  '.status-completed &': {
    backgroundColor: 'blue',
    borderColor: 'blueAccent',
    color: 'white',
  },
  '.status-deferred &': {
    backgroundColor: 'teal',
    borderColor: 'tealAccent',
    color: 'white',
  },
  '.status-canceled &': {
    backgroundColor: 'red',
    borderColor: 'redAccent',
    color: 'white',
  },
};

const icon = {
  opacity: 0,
  verticalAlign: '2px',
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
