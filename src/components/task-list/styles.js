import { css } from '@emotion/core';

export default {
  taskList: css({
    listStyle: 'none',
    paddingLeft: 0,
  }),
  taskLabel: css({
    fontSize: '1em',
    border: 0,
    outline: 0,
  }),
  taskButton: css({
    border: 'none',
    outline: 'none',
    ':hover': {
      cursor: 'pointer',
    },
  }),
};
