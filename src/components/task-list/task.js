import PropTypes from 'prop-types';
import React, { useState } from 'react';
import _assign from 'lodash/assign';

const TaskForm = ({ render }) => render();

const Task = ({ task, handleUpdateTask }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div>
      {editMode ? (
        <TaskForm
          task={task}
          handleUpdateTask={handleUpdateTask}
          render={() => (
            <div>
              <input
                type="text"
                name=""
                value={task.name}
                onChange={(event) => {
                  handleUpdateTask(
                    _assign({}, task, { name: event.target.value }),
                  );
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
          <span>{task.name}</span>
          <button type="button" onClick={() => setEditMode(true)}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired,
  handleUpdateTask: PropTypes.func.isRequired,
};

TaskForm.propTypes = {
  task: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired,
  handleUpdateTask: PropTypes.func.isRequired,
};

export default Task;
