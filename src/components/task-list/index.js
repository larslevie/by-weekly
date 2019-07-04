import _map from 'lodash/map';
import PropTypes from 'prop-types';
import React from 'react';
import Task from './task';

const TaskList = ({ tasks, dispatch }) => (
  <div>
    {_map(tasks, task => (
      <Task key={task.id} task={task} dispatch={dispatch} />
    ))}
  </div>
);

TaskList.propTypes = {
  tasks: PropTypes.shape().isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default TaskList;
