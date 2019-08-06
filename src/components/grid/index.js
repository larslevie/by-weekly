import { css } from '@emotion/core';
import format from 'date-fns/format';
import PropTypes from 'prop-types';
import React, { useEffect, useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import useLocalStorage from '../../hooks/use-local-storage';
import GridCell from '../grid-cell';

const gridClass = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-template-rows: repeat(3, 31vh);
`;

const crupdateTask = (state, list) => ({ ...state, ...list });

const deleteTask = (state, listId, id) => {
  const newState = { ...state };
  delete newState[listId][id];
  return newState;
};

const reducer = (state, action) => {
  const { type, listId, ...task } = action;

  switch (type) {
    case 'create':
      return crupdateTask(state, { [listId]: { [uuid()]: task } });
    case 'update':
      return crupdateTask(state, { [listId]: { [task.id]: { ...task } } });
    case 'complete':
      if (task.status === 'completed') {
        return crupdateTask(state, {
          [listId]: { [task.id]: { ...task, status: 'uncompleted' } },
        });
      }

      return crupdateTask(state, {
        [listId]: { [task.id]: { ...task, status: 'completed' } },
      });
    case 'defer':
      if (task.status !== 'deferred') {
        return crupdateTask(state, {
          [listId]: { [task.id]: { ...task, status: 'deferred' } },
        });
      }

      return crupdateTask(state, {
        [listId]: { [task.id]: { ...task, status: 'uncompleted' } },
      });
    case 'cancel':
      if (task.status !== 'canceled') {
        return crupdateTask(state, {
          [listId]: { [task.id]: { ...task, status: 'canceled' } },
        });
      }

      return crupdateTask(state, {
        [listId]: { [task.id]: { ...task, status: 'uncompleted' } },
      });
    case 'delete':
      return deleteTask(state, listId, task.id);
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

const Grid = ({ date }) => {
  const persistenceKey = `${format(date, 'YYYYMMDD')}`;
  const [lists, dispatch] = usePersistence(persistenceKey, {
    0: {},
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
  });

  return (
    <div css={gridClass}>
      {[
        [
          { key: 0, title: 'monday' },
          { key: 1, title: 'tuesday' },
          { key: 2, title: 'wednesday' },
        ],
        [
          { key: 3, title: 'thursday' },
          { key: 4, title: 'friday' },
          { key: 5, title: 'next' },
        ],
      ].map((column, ci) =>
        column.map((day, ri) => (
          <GridCell
            column={ci + 1}
            dispatch={dispatch}
            listId={day.key}
            list={lists[day.key]}
            row={ri + 1}
            {...day}
          />
        )))}
    </div>
  );
};

Grid.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Grid;
