import PropTypes from 'prop-types';
import React from 'react';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { db } from '../../constants/firebase';

const Item = ({ workspaceId, itemId }) => {
  const itemRef = db.doc(`workspaces/${workspaceId}/items/${itemId}`);

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
