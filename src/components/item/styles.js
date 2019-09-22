export const root = {
  display: 'flex',
  marginBottom: '12px',
};

export const itemWrapper = {
  flex: 1,
  display: 'flex',
};

export const itemLabel = {
  border: 'none',
  borderBottomColor: 'background',
  borderBottomStyle: 'solid',
  borderBottomWidth: '2px',
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

export default {
  checkbox,
  itemLabel,
  itemWrapper,
  menu,
  menuDisclosure,
  menuItem,
  root,
};
