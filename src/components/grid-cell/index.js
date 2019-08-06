import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import TaskList from '../task-list';
import styles from './styles';

const GridCell = ({
  column, dispatch, listId, list, row, title,
}) => (
  <div
    css={[styles.cell, styles[`column${column}Cell`], styles[`row${row}Cell`]]}
  >
    <h2 css={styles.title}>{title}</h2>

    <TaskList listId={listId} tasks={list} dispatch={dispatch} />

    <button
      css={styles.addbutton}
      type="button"
      onClick={() => {
        dispatch({
          type: 'create',
          label: '',
          status: 'incomplete',
          listId,
        });
      }}
    >
      <FontAwesomeIcon icon={faPlus} />
      {' Add Task'}
    </button>
  </div>
);

GridCell.propTypes = {
  column: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  listId: PropTypes.number.isRequired,
  list: PropTypes.objectOf({}).isRequired,
  row: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default GridCell;
