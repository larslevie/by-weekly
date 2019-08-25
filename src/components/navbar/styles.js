import { css } from '@emotion/core';

const toolbar = css({
  borderTop: '8px solid #33e',
  display: 'flex',
});

const logo = css({
  background: '#33e',
  color: '#fff',
  textDecoration: 'none',
});

const toolbarItem = css({
  color: '#111111',
  display: 'inline-block',
  fontSize: '20px',
  fontWeight: 'bold',
  padding: '12px 16px 16px',
});

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

export default {
  logo,
  toolbar,
  toolbarEnd,
  toolbarItem,
  toolbarStart,
  weekNumber,
};
