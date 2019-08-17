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

const Task = ({ task, dispatch, listId }) => (
  <li css={styles.task}>
    <input
      checked={task.status === 'completed'}
      css={styles.taskCheckbox}
      onChange={() => dispatch({ ...task, listId, type: 'complete' })}
      type="checkbox"
    />
    <input
      css={[
        styles.taskLabel,
        task.status === 'canceled' && styles.canceled,
        task.status === 'deferred' && styles.deferred,
        task.status === 'completed' && styles.completed,
      ]}
      type="text"
      name="label"
      value={task.label}
      onChange={({ target: { value } }) => {
        dispatch({
          ...task,
          listId,
          type: 'update',
          label: value,
        });
      }}
    />

    <div css={styles.actions}>
      <button
        css={styles.taskButton}
        onClick={() => dispatch({ ...task, listId, type: 'delete' })}
        type="button"
      >
        <FontAwesomeIcon icon={faTimesCircle} />
      </button>

      <button
        css={styles.taskButton}
        onClick={() => dispatch({ ...task, listId, type: 'cancel' })}
        type="button"
      >
        <FontAwesomeIcon icon={faMinusSquare} />
      </button>

      <button
        css={styles.taskButton}
        onClick={() => dispatch({ ...task, listId, type: 'defer' })}
        type="button"
      >
        <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
      </button>
    </div>
  </li>
);

Task.propTypes = {
  dispatch: PropTypes.func.isRequired,
  listId: PropTypes.number.isRequired,
  task: PropTypes.shape({ label: PropTypes.string }).isRequired,
};

TaskForm.propTypes = {
  task: PropTypes.shape({ label: PropTypes.string }).isRequired,
};

export default Task;
