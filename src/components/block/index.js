import PropTypes from 'prop-types';
import React from 'react';
import { BlockSchema } from '../../schemata';
import Item from '../item';

const Block = ({ workspaceId, block }) => {
  const itemIds = block.itemRefs.map(itemRef => itemRef.id);

  console.dir(itemIds);

  return (
    <li>
      {block.label}
      <ul>
        {itemIds.map(itemId => (
          <Item key={itemId} workspaceId={workspaceId} itemId={itemId} />
        ))}
      </ul>
    </li>
  );
};

Block.propTypes = {
  block: PropTypes.shape(BlockSchema).isRequired,
  workspaceId: PropTypes.string.isRequired,
};

export default Block;
