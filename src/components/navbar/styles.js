import { css } from '@emotion/core';

const toolbar = css({
  background: '#33e',
  marginBottom: '16px',
});

const logo = css({
  fontWeight: 'bold',
  textDecoration: 'none',
});

const toolbarItem = css({
  color: '#fff',
  padding: '16px',
  display: 'inline-block',
});

export default {
  logo,
  toolbar,
  toolbarItem,
};
