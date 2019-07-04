import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _map from 'lodash/map';
import PropTypes from 'prop-types';
import React, { useEffect, useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import useLocalStorage from '../../../hooks/use-local-storage';
import TaskList from '../../task-list';
import styles from './styles';

const crupdateTask = (state, task) => ({ ...state, [task.id]: { ...task } });

const anyEmpty = (tasks) => {
  const labels = _map(tasks, (_v, k) => tasks[k].label.trim());
  const emptyLabels = labels.filter(v => v === '');

  return emptyLabels.length > 0;
};

const reducer = (state, action) => {
  const { type, ...task } = action;

  switch (type) {
    case 'create':
      if (anyEmpty(state)) return state;
      return crupdateTask(state, { ...task, id: uuid() });
    case 'update':
      return crupdateTask(state, { ...task });
    case 'complete':
      return crupdateTask(state, {
        ...task,
        isCanceled: false,
        isComplete: true,
        isDeferred: false,
      });
    case 'defer':
      return crupdateTask(state, {
        ...task,
        isCanceled: false,
        isComplete: false,
        isDeferred: true,
      });
    case 'cancel':
      return crupdateTask(state, {
        ...task,
        isCanceled: true,
        isComplete: false,
        isDeferred: false,
      });
    default:
      console.error('Unknown action: %s', action);
      return state;
  }
};

const usePersistence = (key, initialValue) => {
  const [storedValue, setStoredState] = useLocalStorage(key, initialValue);
  const [state, dispatch] = useReducer(reducer, storedValue);

  useEffect(() => setStoredState(state), [setStoredState, state]);

  return [state, dispatch];
};

const Cell = ({ title }) => {
  const [tasks, dispatch] = usePersistence(title, {});

  return (
    <div css={styles.cell}>
      <h2 css={styles.title}>{title}</h2>

      <TaskList tasks={tasks} dispatch={dispatch} />

      <button
        type="button"
        onClick={() => {
          dispatch({ type: 'create', label: '' });
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
        {' Add Task'}
      </button>
    </div>
  );
};

Cell.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Cell;
