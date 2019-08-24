import PropTypes from 'prop-types';
import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { WorkspaceSchema } from '../../schemata';
import { createCurrent, getCurrentRef } from '../../services/boards';
import Board from '../board';

const useBoard = (workspaceId) => {
  const boardRef = getCurrentRef({ workspaceId });

  const [boards, loading, error] = useCollectionData(boardRef, {
    snapshotListenOptions: { includeMetadataChanges: true },
    idField: 'id',
  });

  if (!boards) createCurrent({ workspaceId });

  return [boards && boards[0], loading, error];
};

const renderBoard = (workspace, board) =>
  board && <Board workspace={workspace} board={board} />;

const Workspace = ({ workspace }) => {
  const [board, loading, error] = useBoard(workspace.id);

  if (error) return 'Workspace Error';
  if (loading) return 'Loading';

  return (
    <div>
      Workspace
      {renderBoard(workspace, board)}
    </div>
  );
};

Workspace.propTypes = {
  workspace: PropTypes.shape(WorkspaceSchema).isRequired,
};

export default Workspace;
