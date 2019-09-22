const root = {
  boxSizing: 'border-box',
  display: 'flex',
  flex: [1, '0 1 calc(33% - 48px)'],
  flexDirection: 'column',
  marginBottom: 4,
  marginRight: 4,
  paddingLeft: 2,
};

export const title = {
  fontSize: 2,
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
