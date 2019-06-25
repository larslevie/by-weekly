/* eslint-disable react/prop-types */
import _map from 'lodash/map';
import React from 'react';
import Task from './task';

const TaskList = ({ tasks, saveTask }) => (
  <div>
    {_map(tasks, task => (
      <Task key={task.id} task={task} saveTask={saveTask} />
    ))}
  </div>
);

export default TaskList;
