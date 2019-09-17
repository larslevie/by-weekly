/** @jsx jsx */

import PropTypes from 'prop-types';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { jsx } from 'theme-ui';
import { db } from '../../constants/firebase';
import Block from '../block';
import styles from './styles';

const Board = ({ workspaceId, boardId }) => {
  const blocksRef = db
    .collection(`workspaces/${workspaceId}/boards/${boardId}/blocks`)
    .orderBy('order', 'asc');

  const [blocks, loading, error] = useCollectionData(blocksRef, {
    idField: 'id',
  });

  if (error) return 'Error';
  if (loading) return 'Loading';

  return (
    <div sx={styles.root}>
      {blocks.map(block => (
        <Block
          key={block.id}
          workspaceId={workspaceId}
          boardId={boardId}
          block={block}
        />
      ))}
    </div>
  );
};

Board.propTypes = {
  boardId: PropTypes.string.isRequired,
  workspaceId: PropTypes.string.isRequired,
};

export default Board;
