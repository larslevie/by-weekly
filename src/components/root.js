/** @jsx jsx */

import { Global } from '@emotion/core';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { jsx, ThemeProvider } from 'theme-ui';
import { auth, db } from '../constants/firebase';
import { create as createWorkspace } from '../services/workspaces';
import theme from '../theme';
import SignInScreen from './login';
import Workspace from './workspace';
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
  <ThemeProvider theme={theme}>
    <Global
      styles={t => ({
        body: {
          backgroundColor: t.colors.background,
          color: t.colors.text,
          fontFamily: t.fonts.body,
          margin: 0,
        },
      })}
    />
    <Router>
      <PrivateRoute
        path="/workspaces/:key([a-z0-9]+)"
        exact
        component={Workspace}
      />
      <PrivateRoute path="/" exact component={Resolver} />
      <Route path="/login" exact component={SignInScreen} />
    </Router>
  </ThemeProvider>
);

export default Root;
