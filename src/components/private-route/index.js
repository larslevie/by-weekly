import firebase from 'firebase';
import PropTypes from 'prop-types';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, render, ...rest }) => {
  const [user, initailizing, error] = useAuthState(firebase.auth());

  return (
    <Route
      {...rest}
      render={(props) => {
        if (initailizing) return 'Loading...';
        if (error) return 'Error';
        if (user) return render ? render(props) : <Component {...props} />;

        return (
          <Redirect
            to={{
              pathname: '/login',
              // eslint-disable-next-line react/prop-types
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType,
  render: PropTypes.func,
};

PrivateRoute.defaultProps = {
  component: null,
  render: null,
};

export default PrivateRoute;
