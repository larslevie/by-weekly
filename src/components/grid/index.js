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
  ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'next'].map(day => (
    <Cell key={day} title={day} />
  ));

const Grid = () => <div css={gridClass}>{renderGrid()}</div>;

export default Grid;
