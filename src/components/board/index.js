import firebase from 'firebase';
import PropTypes from 'prop-types';
import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { BoardSchema, WorkspaceSchema } from '../../schemata';
import Block from '../block';

const Board = ({ workspace, board }) => {
  const blocksRef = firebase
    .firestore()
    .collection(`workspaces/${workspace.id}/boards/${board.id}/blocks`);

  const [blocks, loading, error] = useCollectionData(blocksRef, {
    snapshotListenOptions: { includeMetadataChanges: true },
    idField: 'id',
  });

  if (error) return 'Error';
  if (loading) return 'Loading';

  return (
    <div>
      {board.name}
      <ul>
        {blocks.map(block => (
          <Block
            key={block.id}
            workspaceId={workspace.id}
            boardId={board.id}
            block={block}
          />
        ))}
      </ul>
    </div>
  );
};

Board.propTypes = {
  board: PropTypes.shape(BoardSchema).isRequired,
  workspace: PropTypes.shape(WorkspaceSchema).isRequired,
};

export default Board;
