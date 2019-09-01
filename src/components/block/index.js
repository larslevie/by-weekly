/** @jsx jsx */

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import { BlockSchema } from '../../schemata';
import blocks from '../../services/blocks';
import styles from './styles';
import Item from '../item';

const Block = ({ workspaceId, boardId, block }) => (
  <section sx={styles.root}>
    <h1 sx={styles.title}>{block.label}</h1>

    <div sx={styles.content}>
      <ul
        sx={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}
      >
        {block.itemIds.map(itemId => (
          <Item
            key={itemId}
            block={block}
            boardId={boardId}
            itemId={itemId}
            workspaceId={workspaceId}
          />
        ))}
      </ul>

      <button
        type="button"
        sx={styles.addTaskButton}
        onClick={() =>
          blocks.createItem({ workspaceId, blockId: block.id, boardId })
        }
      >
        <FontAwesomeIcon icon={faPlus} />
        {' Add Task'}
      </button>
    </div>
  </section>
);

Block.propTypes = {
  block: PropTypes.shape(BlockSchema).isRequired,
  boardId: PropTypes.string.isRequired,
  workspaceId: PropTypes.string.isRequired,
};

export default Block;
