import PropTypes from 'prop-types';
import React, { useState } from 'react';
import _assign from 'lodash/assign';

const TaskForm = ({ render }) => render();

const handleUpdateTask = (task, values, cb) => {
  const {
    name = task.name,
    isComplete = false,
    isDeferred = false,
    isCanceled = false,
  } = values;

  cb(
    _assign({}, task, {
      name,
      isCanceled,
      isDeferred,
      isComplete,
    }),
  );
};

const Task = ({ task, saveTask }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div>
      {editMode ? (
        <TaskForm
          task={task}
          saveTask={saveTask}
          render={() => (
            <div>
              <input
                type="text"
                name=""
                value={task.name}
                onChange={(event) => {
                  handleUpdateTask(
                    task,
                    { name: event.target.value },
                    saveTask,
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
          <input
            type="checkbox"
            checked={task.isComplete}
            onChange={(event) => {
              handleUpdateTask(
                task,
                { isComplete: event.target.checked },
                saveTask,
              );
            }}
          />
          <input
            type="checkbox"
            checked={task.isDeferred}
            onChange={(event) => {
              handleUpdateTask(
                task,
                { isDeferred: event.target.checked },
                saveTask,
              );
            }}
          />
          <input
            type="checkbox"
            checked={task.isCanceled}
            onChange={(event) => {
              handleUpdateTask(
                task,
                { isCanceled: event.target.checked },
                saveTask,
              );
            }}
          />
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
  saveTask: PropTypes.func.isRequired,
};

TaskForm.propTypes = {
  task: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired,
  saveTask: PropTypes.func.isRequired,
};

export default Task;
