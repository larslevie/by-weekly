import _map from 'lodash/map';
import PropTypes from 'prop-types';
import React from 'react';
import Task from './task';
import styles from './styles';

const TaskList = ({ tasks, dispatch }) => (
  <ul css={styles.taskList}>
    {_map(tasks, task => (
      <Task key={task.id} task={task} dispatch={dispatch} />
    ))}
  </ul>
);

TaskList.propTypes = {
  tasks: PropTypes.shape().isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default TaskList;
