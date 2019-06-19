import PropTypes from 'prop-types';
import React from 'react';

const Task = ({ task }) => <div>{task.name}</div>;

Task.propTypes = {
  task: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired,
};

export default Task;
