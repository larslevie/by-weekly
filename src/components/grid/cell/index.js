import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import TaskLast from '../../task-list';

const styles = css({
  display: 'flex',
  flexBasis: 'calc(33%)',
  flexDirection: 'column',
  fontFamily: 'Helvetica',
  justifyContent: 'flex-start',
});

const Cell = ({ title }) => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks(tasks.concat(task));
  };

  return (
    <div css={styles}>
      <h2>{title}</h2>

      <TaskLast tasks={tasks}>
        <button
          type="button"
          onClick={() => {
            handleAddTask({
              id: `${Math.random(0.5)}`,
              name: 'Foo',
            });
          }}
        >
          Add Task
        </button>
      </TaskLast>
    </div>
  );
};

Cell.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Cell;
