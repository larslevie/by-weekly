import {
  faExternalLinkSquareAlt,
  faMinusSquare,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

const TaskForm = ({ render }) => render();

const renderTask = (dispatch, task) => (
  <li css={styles.task}>
    <input
      checked={task.status === 'completed'}
      css={styles.taskCheckbox}
      onChange={() => dispatch({ ...task, type: 'complete' })}
      type="checkbox"
    />
    <input
      css={styles.taskLabel}
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

    <div css={styles.actions}>
      <button
        css={styles.taskButton}
        onClick={() => dispatch({ ...task, type: 'delete' })}
        type="button"
      >
        <FontAwesomeIcon icon={faTimesCircle} />
      </button>

      <button
        css={styles.taskButton}
        onClick={() => dispatch({ ...task, type: 'cancel' })}
        type="button"
      >
        <FontAwesomeIcon icon={faMinusSquare} />
      </button>

      <button
        css={styles.taskButton}
        onClick={() => dispatch({ ...task, type: 'defer' })}
        type="button"
      >
        <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
      </button>
    </div>
  </li>
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
