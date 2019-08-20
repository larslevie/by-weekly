import PropTypes from 'prop-types';
import React from 'react';
import firebase from 'firebase';
import { useDocumentData } from 'react-firebase-hooks/firestore';

const Item = ({ workspaceId, itemId }) => {
  const itemRef = firebase
    .firestore()
    .doc(`workspaces/${workspaceId}/items/${itemId}`);

  const [item, loading, error] = useDocumentData(itemRef, {
    snapshotListenOptions: { includeMetadataChanges: true },
    idField: 'id',
  });

  if (error) return 'Error';
  if (loading) return 'Loading';

  return <li>{item.label}</li>;
};

Item.propTypes = {
  workspaceId: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default Item;
