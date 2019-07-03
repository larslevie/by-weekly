import PropTypes from 'prop-types';
import React, { useState } from 'react';

const TaskForm = ({ render }) => render();

const Task = ({ task, dispatch }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div>
      {editMode ? (
        <TaskForm
          task={task}
          render={() => (
            <div>
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
              <button type="button" onClick={() => setEditMode(false)}>
                Save
              </button>
            </div>
          )}
        />
      ) : (
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
          <span>{task.label}</span>
          <button type="button" onClick={() => setEditMode(true)}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({ label: PropTypes.string }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

TaskForm.propTypes = {
  task: PropTypes.shape({ label: PropTypes.string }).isRequired,
};

export default Task;
