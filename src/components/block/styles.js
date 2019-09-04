const root = {
  boxSizing: 'border-box',
  flex: ['1', '1 1 26%'],
  maxHeight: ['auto', '33%'],
  paddingLeft: 2,
  width: ['auto', '50%'],
  display: 'flex',
  flexDirection: 'column',
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
