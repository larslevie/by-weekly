import { css } from '@emotion/core';

export default {
  taskList: css({
    listStyle: 'none',
    paddingLeft: 0,
  }),
  taskLabel: css({
    border: 0,
    fontSize: '1em',
    outline: 0,
  }),
  taskButton: css({
    border: 'none',
    outline: 'none',
    ':hover': {
      cursor: 'pointer',
    },
  }),
  task: css({
    '& + &': {
      borderTop: 'solid 1px #f1f1f1',
      marginTop: '10px',
      paddingTop: '10px',
    },
  }),
  taskCheckbox: css({
    // height: '18px',
    marginRight: '10px',
    // width: '18px',
    fontSize: '1em',
  }),
};
