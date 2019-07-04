import { css } from '@emotion/core';

export default {
  cell: css({
    display: 'flex',
    flexBasis: 'calc(33%)',
    flexDirection: 'column',
    fontFamily: 'Helvetica',
    justifyContent: 'flex-start',
    maxWidth: 'calc(50%)',
  }),
  title: css({
    textTransform: 'capitalize',
  }),
};
