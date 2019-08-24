import { css, Global } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { auth, db } from '../constants/firebase';
import { create as createWorkspace } from '../services/workspaces';
import SignInScreen from './login';
import Page from './page';
import PrivateRoute from './private-route';

const Resolver = () => {
  const userId = auth.currentUser.uid;
  const [workspaces, loading, error] = useCollectionData(
    db
      .collection('workspaces')
      .where('userId', '==', userId)
      .where('current', '==', true),
  );

  if (error) return 'Workspace Error';
  if (loading) return 'Loading';

  if (workspaces.length === 0) {
    createWorkspace({ userId, name: 'main', isCurrent: true });
    return 'Loading';
  }

  return <Redirect to={`/workspaces/${workspaces[0].name}`} />;
};

const Root = () => (
  <div>
    <Global
      styles={css`
        ${emotionNormalize}
        body {
          font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
            Roboto, 'Helvetica Neue', Arial, sans-serif;
          padding: 0 16px;
        }
      `}
    />
    <Router>
      <div>
        <PrivateRoute
          path="/workspaces/:key([a-z0-9]+)"
          exact
          component={Page}
        />
        <PrivateRoute path="/" exact component={Resolver} />
        <Route path="/login" exact component={SignInScreen} />
      </div>
    </Router>
  </div>
);

export default Root;
