export const root = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  height: ['auto', '100vh'],
  paddingLeft: 2,
  paddingRight: 2,
};

export const content = {
  flex: 1,
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
