import { css } from '@emotion/core';
import _assign from 'lodash/assign';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import TaskList from '../../task-list';

const styles = css({
  display: 'flex',
  flexBasis: 'calc(33%)',
  flexDirection: 'column',
  fontFamily: 'Helvetica',
  justifyContent: 'flex-start',
  maxWidth: 'calc(50%)',
});

const Cell = ({ title }) => {
  const [tasks, setTasks] = useState({});

  const saveTask = (task) => {
    const newTasks = _assign({}, tasks, { [task.id]: task });
    setTasks(newTasks);
  };

  return (
    <div css={styles}>
      <h2>{title}</h2>

      <TaskList tasks={tasks} saveTask={saveTask} />
      <button
        type="button"
        onClick={() => {
          saveTask({
            id: `cid${Math.floor(Math.random() * 10)}`,
            name: 'Foo',
            isComplete: false,
            isDeferred: false,
            isCanceled: false,
          });
        }}
      >
        Add Task
      </button>
    </div>
  );
};

Cell.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Cell;
