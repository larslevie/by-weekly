const toolbar = {
  borderTop: '8px solid #33e',
  display: 'flex',
};

const logo = {
  background: '#33e',
  color: '#fff',
  textDecoration: 'none',
};

const toolbarItem = {
  color: '#111111',
  display: 'inline-block',
  fontSize: '20px',
  fontWeight: 'bold',
  padding: '12px 16px 16px',
};

const toolbarStart = {
  alignSelf: 'start',
  flex: 1,
};

const toolbarEnd = {
  alignSelf: 'end',
};

const weekNumber = {
  fontWeight: 'normal',
  color: '#9F9F9F',
};

const button = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: 1,
  margin: 0,
  marginRight: 3,
  padding: 0,
  '&:active': {
    color: '#000',
  },
  '&:hover': {
    textDecoration: 'underline',
  },
};

export default {
  button,
  logo,
  toolbar,
  toolbarEnd,
  toolbarItem,
  toolbarStart,
  weekNumber,
};
