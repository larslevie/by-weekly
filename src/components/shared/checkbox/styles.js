const size = '18';

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
  border: ' 1px solid #000',
  borderRadius: '5px',
  height: `${size}px`,
  opacity: '1',
  position: 'absolute',
  top: '2px',
  transform: 'rotate(0deg) scale(1)',
  width: `${size}px`,
  '&::after': {
    border: 'solid #000',
    borderRadius: '5px',
    borderWidth: '0 3px 3px 0',
    content: '""',
    height: '0px',
    left: `${size / 2}px`,
    opacity: '1',
    position: 'absolute',
    top: `${size / 2}px`,
    transform: 'rotate(0deg) scale(0)',
    transition: 'all 0.2s ease-out',
    width: '0px',
  },
  'input:checked ~ &::after': {
    backgroundColor: 'transparent',
    border: 'solid #000',
    borderRadius: '0',
    borderWidth: '0 2px 2px 0',
    height: `${size / 2}px`,
    left: `${size / 3}px`,
    opacity: '1',
    top: `${size / 8}px`,
    transform: 'rotate(45deg) scale(1)',
    width: `${size / 4}px`,
  },
};

export default {
  root,
  input,
  customCheckbox,
};
