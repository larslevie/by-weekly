import { css, Global } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Page from './page';

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
      <Router>
        <div>
          <Route path="/" exact render={() => <Page date={date} />} />
          <Route
            path="/:date"
            exact
            render={({ match }) => <Page date={match.params.date} />}
          />
        </div>
      </Router>
    </div>
  );
};

export default Root;
