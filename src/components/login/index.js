import firebase from 'firebase';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Redirect } from 'react-router-dom';
import PropTypes, { any } from 'prop-types';

const SignInScreen = ({ location }) => {
  const [user, initailizing, error] = useAuthState(firebase.auth());
  const { from } = location.state || { from: { pathname: '/' } };

  const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: from.pathname,
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };

  if (initailizing) return 'Loading...';
  if (error) return 'Error';

  return user ? (
    <Redirect to={from} />
  ) : (
    <div>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

SignInScreen.propTypes = {
  location: PropTypes.objectOf(any).isRequired,
};

export default SignInScreen;
