import { css } from '@emotion/core';

export default {
  column1Cell: css({
    gridColumn: 1,
  }),
  column2Cell: css({
    gridColumn: 2,
  }),
  row1Cell: css({
    gridRow: 1,
  }),
  row2Cell: css({
    gridRow: 2,
  }),
  row3Cell: css({
    gridRow: 3,
  }),
  title: css({
    margin: 0,
    textTransform: 'capitalize',
  }),
  cell: css({
    padding: '10px',
  }),
  addbutton: css({
    border: 0,
    cursor: 'pointer',
    padding: 0,
    outline: 'none',
  }),
};
