import { css } from '@emotion/core';
import React from 'react';
import Cell from './cell';

const gridClass = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-template-rows: repeat(3, 31vh);
`;

const renderGrid = () =>
  [
    [
      { key: 1, title: 'monday' },
      { key: 2, title: 'tuesday' },
      { key: 3, title: 'wednesday' },
    ],
    [
      { key: 4, title: 'thursday' },
      { key: 5, title: 'friday' },
      { key: 6, title: 'next' },
    ],
  ].map((column, ci) =>
    column.map((day, ri) => <Cell column={ci + 1} row={ri + 1} {...day} />));

const Grid = () => <div css={gridClass}>{renderGrid()}</div>;

export default Grid;
