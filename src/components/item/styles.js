export const root = {
  borderColor: 'transparent',
  borderRadius: '5px',
  borderStyle: 'solid',
  borderWidth: '1px',
  display: 'flex',
  marginBottom: '4px',
  paddingBottom: '2px',
  paddingLeft: '7px',
  paddingRight: '7px',
  paddingTop: '4px',
  position: 'relative',
  '&:hover': {
    background: '#F8F6FE',
    borderColor: 'primary',
  },
};

export const itemWrapper = {
  flex: 1,
  display: 'flex',
};

export const itemLabel = {
  background: 'transparent',
  border: 'none',
  flex: 1,
  fontSize: '0.875rem',
  paddingBottom: '4px',
  '&:focus': {
    borderBottomColor: 'blue',
    outline: 'none',
  },
};

export const checkbox = {
  fontSize: 1,
  marginLeft: 0,
};

export const menuDisclosure = {
  backgroundColor: 'background',
  border: 'none',
  fontSize: 1,
  margin: 0,
  marginLeft: 2,
  outline: 'none',
  padding: 0,
  '&:active': {
    color: 'black',
  },
  '&:hover': {
    cursor: 'pointer',
  },
};

export const menu = {
  backgroundColor: 'background',
  borderColor: 'darkGray',
  borderRadius: '2px',
  borderStyle: 'solid',
  borderWidth: '1px',
  margin: 0,
  outline: 'none',
  paddingBottom: 1,
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 1,
  width: '100px',
};

export const menuItem = {
  background: 'none',
  border: 'none',
  display: 'block',
  margin: 0,
  outline: 'none',
  padding: 2,
  textAlign: 'left',
  width: '100%',
  '&:hover': {
    backgroundColor: 'extraLightGray',
    cursor: 'pointer',
  },
};

export const itemControls = {
  background: 'white',
  borderColor: 'primary',
  borderRadius: '100px',
  borderStyle: 'solid',
  borderWidth: '1px',
  bottom: '-13px',
  padding: '0 5px',
  position: 'absolute',
  right: '10px',
  opacity: '0',
  'li:hover &': {
    opacity: '1',
  },
};

export const itemControl = {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  display: 'inline-block',
  height: '100%',
  margin: 0,
  padding: '5px',
};

export default {
  checkbox,
  itemControls,
  itemControl,
  itemLabel,
  itemWrapper,
  menu,
  menuDisclosure,
  menuItem,
  root,
};
