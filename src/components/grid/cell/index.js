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

  const handleAddTask = (task) => {
    const newTasks = _assign({}, tasks, { [task.id]: task });
    setTasks(newTasks);
  };

  const handleUpdateTask = (task) => {
    const newTasks = _assign({}, tasks, { [task.id]: task });
    setTasks(newTasks);
  };

  return (
    <div css={styles}>
      <h2>{title}</h2>

      <TaskList tasks={tasks} handleUpdateTask={handleUpdateTask} />
      <button
        type="button"
        onClick={() => {
          handleAddTask({
            id: `cid${Math.floor(Math.random() * 10)}`,
            name: 'Foo',
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
