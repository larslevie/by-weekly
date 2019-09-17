const root = {
  boxSizing: 'border-box',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  paddingLeft: 2,
};

export const title = {
  fontSize: 3,
};

export const content = {
  flex: 1,
  overflow: 'scroll',
};

export const addTaskButton = {
  backgroundColor: 'background',
  border: 'none',
  cursor: 'pointer',
  fontSize: 1,
  margin: 0,
  padding: 0,
  '&:active': {
    color: '#000',
  },
};

export default {
  addTaskButton,
  content,
  root,
  title,
};
