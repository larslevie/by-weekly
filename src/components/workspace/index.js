import firebase from 'firebase';
import PropTypes from 'prop-types';
import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { WorkspaceSchema } from '../../schemata';
import Board from '../board';

const Workspace = ({ workspace }) => {
  const boardRef = firebase
    .firestore()
    .collection(`workspaces/${workspace.id}/boards`)
    .where('isoWeek', '==', '2019-W33');

  const [boards, loading, error] = useCollectionData(boardRef, {
    snapshotListenOptions: { includeMetadataChanges: true },
    idField: 'id',
  });

  if (error) return 'Error';
  if (loading) return 'Loading';

  const board = boards[0];

  return (
    <div>
      Workspace
      {board && <Board workspace={workspace} board={board} />}
    </div>
  );
};

Workspace.propTypes = {
  workspace: PropTypes.shape(WorkspaceSchema).isRequired,
};

export default Workspace;
