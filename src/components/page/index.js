import firebase from 'firebase';
import PropTypes from 'prop-types';
import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Workspace from '../workspace';

const Page = ({
  match: {
    params: { key },
  },
}) => {
  const workspaceRef = firebase
    .firestore()
    .collection('workspaces')
    .where('userId', '==', firebase.auth().currentUser.uid)
    .where('name', '==', key);

  const [workspaces, loading, error] = useCollectionData(workspaceRef, {
    snapshotListenOptions: { includeMetadataChanges: true },
    idField: 'id',
  });

  if (error) return 'Error';
  if (loading) return 'Loading';

  const workspace = workspaces[0];

  return workspace ? (
    <Workspace workspace={workspace} />
  ) : (
    <div>Workspace not found.</div>
  );
};

Page.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      key: PropTypes.string,
    }),
  }).isRequired,
};

export default Page;
