import { css } from '@emotion/core';

const taskButton = css({
  background: 'transparent',
  border: 'none',
  outline: 'none',
  fontSize: '16px',
  ':hover': {
    cursor: 'pointer',
  },
});

const actions = css({
  visibility: 'hidden',
  position: 'absolute',
  right: 0,
});

const canceled = css({
  textDecoration: 'line-through',
  color: '#bdbdbd',
});

const deferred = css({
  backgroundColor: '#29b9f1',
});

const completed = css({
  backgroundColor: '#dbe62f',
});

const rest = {
  taskList: css({
    listStyle: 'none',
    paddingLeft: 0,
  }),
  taskLabel: css({
    border: 0,
    fontSize: '1em',
    outline: 0,
    flex: 1,
  }),
  task: css({
    display: 'flex',
    position: 'relative',
    [`:hover .css-${actions.name}`]: {
      visibility: 'visible',
    },
    '& + &': {
      borderTop: 'solid 1px #f1f1f1',
      marginTop: '10px',
      paddingTop: '10px',
    },
  }),
  taskCheckbox: css({
    marginRight: '10px',
    fontSize: '1em',
  }),
};

export default {
  ...rest,
  taskButton,
  actions,
  canceled,
  deferred,
  completed,
};
