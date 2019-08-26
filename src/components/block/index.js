/** @jsx jsx */

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import { BlockSchema } from '../../schemata';
import blocks from '../../services/blocks';
import Item from '../item';

const renderNewItemButton = (workspaceId, blockId, boardId) => (
  <button
    type="button"
    onClick={() => blocks.createItem({ workspaceId, blockId, boardId })}
  >
    <FontAwesomeIcon icon={faPlus} />
    {' Add Task'}
  </button>
);

const Block = ({ workspaceId, boardId, block }) => {
  const itemIds = block.itemRefs.map(itemRef => itemRef.id);

  return (
    <div
      sx={{
        flex: '1 1 26%',
        maxHeight: '33%',
        width: '50%',
      }}
    >
      <h1>{block.label}</h1>

      <ul
        sx={{
          listStyle: 'none',
          padding: 0,
        }}
      >
        {itemIds.map(itemId => (
          <Item key={itemId} workspaceId={workspaceId} itemId={itemId} />
        ))}
      </ul>

      {renderNewItemButton(workspaceId, block.id, boardId)}
    </div>
  );
};

Block.propTypes = {
  block: PropTypes.shape(BlockSchema).isRequired,
  boardId: PropTypes.string.isRequired,
  workspaceId: PropTypes.string.isRequired,
};

export default Block;
