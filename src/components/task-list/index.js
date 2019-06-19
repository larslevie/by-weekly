import _map from 'lodash/map';
import PropTypes from 'prop-types';
import React from 'react';
import Task from './task';

const TaskList = ({ tasks, children }) => (
  <div>
    {_map(tasks, task => (
      <Task key={task.id} task={task} />
    ))}

    {children}
  </div>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
    }),
  ),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

TaskList.defaultProps = {
  tasks: [],
  children: [],
};

export default TaskList;
