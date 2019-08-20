import { css, Global } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import firebase from 'firebase';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignInScreen from './login';
import Page from './page';
import PrivateRoute from './private-route';

const config = {
  apiKey: 'AIzaSyCF_yM26d7ntHfIvgaCFMX35GXfb2YeNrk',
  authDomain: 'levieindustries.firebaseapp.com',
  databaseURL: 'https://levieindustries.firebaseio.com',
  projectId: 'levieindustries',
  storageBucket: 'levieindustries.appspot.com',
  messagingSenderId: '673836380053',
  appId: '1:673836380053:web:e60178141f52fe91',
};

firebase.initializeApp(config);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

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
        <Route path="/login" exact component={SignInScreen} />
      </div>
    </Router>
  </div>
);

export default Root;
