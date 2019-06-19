import { css } from '@emotion/core';
import React from 'react';
import Cell from './cell';

const gridClass = css`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const renderGrid = () =>
  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Next'].map(day => (
    <Cell key={day} title={day} />
  ));

const Grid = () => <div css={gridClass}>{renderGrid()}</div>;

export default Grid;
