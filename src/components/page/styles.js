export const root = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  height: ['auto', '100vh'],
  paddingLeft: [2, 6],
  paddingRight: [2, 6],
};

export const content = {
  flex: 1,
  overflowX: 'scroll',
  width: '100%',
};

export const footer = {
  fontSize: '12px',
  paddingBottom: 2,
  paddingTop: 2,
  textAlign: 'right',
  width: '100%',
};

export default {
  content,
  footer,
  root,
};
