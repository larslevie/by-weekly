import { css, Global } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import React from 'react';
import Grid from './grid';
import NavBar from './navbar';

const Root = () => {
  const date = new Date();

  return (
    <div>
      <Global
        styles={css`
          ${emotionNormalize}
          body {
            font-family: -apple-system, system-ui, BlinkMacSystemFont,
              'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            padding: 0 16px;
          }
        `}
      />
      <NavBar date={date} />
      <Grid date={date} />
    </div>
  );
};

export default Root;
