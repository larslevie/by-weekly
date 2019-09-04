/** @jsx jsx */

import PropTypes from 'prop-types';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { jsx } from 'theme-ui';
import { auth, db } from '../../constants/firebase';
import { createCurrent, getCurrentRef } from '../../services/boards';
import Board from '../board';
import Page from '../page';

const useWorkspace = (name) => {
  const workspaceRef = db
    .collection('workspaces')
    .where('userId', '==', auth.currentUser.uid)
    .where('name', '==', name);

  const [workspaces, loading, error] = useCollectionData(workspaceRef, {
    snapshotListenOptions: { includeMetadataChanges: true },
    idField: 'id',
  });

  if (error) return 'Error';
  if (loading) return 'Loading';

  return [workspaces && workspaces[0], loading, error];
};

const useCurrentBoard = (workspaceId) => {
  const boardRef = getCurrentRef({ workspaceId });

  const [boards, loading, error] = useCollectionData(boardRef, {
    snapshotListenOptions: { includeMetadataChanges: true },
    idField: 'id',
  });

  if (loading || error) return [boards && boards[0], loading, error];

  if (boards.length === 0) {
    createCurrent({ workspaceId });
    return [null, true, error];
  }

  return [boards && boards[0], loading, error];
};

const BoardResolver = ({ workspaceId }) => {
  const [board, loading, error] = useCurrentBoard(workspaceId);

  if (loading || error) return 'Loading';

  return board && <Board workspaceId={workspaceId} boardId={board.id} />;
};

const Workspace = ({
  match: {
    params: { key },
  },
}) => {
  const [workspace, loading, error] = useWorkspace(key);

  if (loading) return <Page>Error</Page>;
  if (error) return <Page>Loading</Page>;

  return (
    <Page>
      <BoardResolver workspaceId={workspace.id} />
    </Page>
  );
};

Workspace.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      key: PropTypes.string,
    }),
  }).isRequired,
};

export default Workspace;
