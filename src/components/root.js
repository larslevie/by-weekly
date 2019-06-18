import React from 'react';
import { css } from '@emotion/core';

const gridClass = css`
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const cellClass = css`
  display: flex;
  flex-basis: 50%;
  justify-content: center;
  flex-direction: column;
`;

const renderCell = title => (
  <div key={title} css={cellClass}>
    {title}
  </div>
);

const renderCells = () =>
  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Next'].map(day =>
    renderCell(day));

const Root = () => <div css={gridClass}>{renderCells()}</div>;

export default Root;
