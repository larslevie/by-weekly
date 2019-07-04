import PropTypes from 'prop-types';
import React from 'react';

const TaskForm = ({ render }) => render();

const renderTask = (dispatch, task) => (
  <div>
    <input
      type="checkbox"
      checked={task.isComplete}
      onChange={() => dispatch({ ...task, type: 'complete' })}
    />
    <input
      type="checkbox"
      checked={task.isDeferred}
      onChange={() => dispatch({ ...task, type: 'defer' })}
    />
    <input
      type="checkbox"
      checked={task.isCanceled}
      onChange={() => dispatch({ ...task, type: 'cancel' })}
    />
    <input
      type="text"
      name="label"
      value={task.label}
      onChange={({ target: { value } }) => {
        dispatch({
          ...task,
          type: 'update',
          label: value,
        });
      }}
    />
  </div>
);

const Task = ({ task, dispatch }) => renderTask(dispatch, task);

Task.propTypes = {
  task: PropTypes.shape({ label: PropTypes.string }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

TaskForm.propTypes = {
  task: PropTypes.shape({ label: PropTypes.string }).isRequired,
};

export default Task;
