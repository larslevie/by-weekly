import { css, Global } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import React from 'react';
import Grid from './grid';
import NavBar from './navbar';

const Root = () => (
  <div>
    <Global
      styles={css`
        ${emotionNormalize}
        body {
          font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
            Roboto, 'Helvetica Neue', Arial, sans-serif;
        }
      `}
    />
    <NavBar />
    <Grid />
  </div>
);

export default Root;
