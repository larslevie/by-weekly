import _map from 'lodash/map';
import PropTypes from 'prop-types';
import React from 'react';
import Task from './task';
import styles from './styles';

const TaskList = ({ listId, tasks, dispatch }) => (
  <ul css={styles.taskList}>
    {_map(tasks, task => (
      <Task key={task.id} task={task} dispatch={dispatch} listId={listId} />
    ))}
  </ul>
);

TaskList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  listId: PropTypes.number.isRequired,
  tasks: PropTypes.shape().isRequired,
};

export default TaskList;
