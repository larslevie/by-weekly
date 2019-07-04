import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React, { useEffect, useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import useLocalStorage from '../../../hooks/use-local-storage';
import TaskList from '../../task-list';

const styles = css({
  display: 'flex',
  flexBasis: 'calc(33%)',
  flexDirection: 'column',
  fontFamily: 'Helvetica',
  justifyContent: 'flex-start',
  maxWidth: 'calc(50%)',
});

const crupdateTask = (state, task) => ({ ...state, [task.id]: { ...task } });

const reducer = (state, action) => {
  const { type, ...task } = action;

  switch (type) {
    case 'create':
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
    <div css={styles}>
      <h2>{title}</h2>

      <TaskList tasks={tasks} dispatch={dispatch} />

      <button
        type="button"
        onClick={() => {
          dispatch({ type: 'create', label: '' });
        }}
      >
        Add Task
      </button>
    </div>
  );
};

Cell.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Cell;
