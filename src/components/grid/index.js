import { css } from '@emotion/core';
import React from 'react';
import Cell from './cell';

const gridClass = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-template-rows: repeat(3, 31vh);
`;

const renderGrid = () =>
  [['monday', 'tuesday', 'wednesday'], ['thursday', 'friday', 'next']].map(
    (column, ci) =>
      column.map((day, ri) => (
        <Cell column={ci + 1} row={ri + 1} key={day} title={day} />
      )),
  );

const Grid = () => <div css={gridClass}>{renderGrid()}</div>;

export default Grid;
