/** @jsx jsx */

import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import { BlockSchema } from '../../schemata';
import Item from '../item';

const Block = ({ workspaceId, block }) => {
  const itemIds = block.itemRefs.map(itemRef => itemRef.id);

  return (
    <div
      sx={{
        flex: '1 1 26%',
        maxHeight: '33%',
      }}
    >
      <h1>{block.label}</h1>

      <ul>
        {itemIds.map(itemId => (
          <Item key={itemId} workspaceId={workspaceId} itemId={itemId} />
        ))}
      </ul>
    </div>
  );
};

Block.propTypes = {
  block: PropTypes.shape(BlockSchema).isRequired,
  workspaceId: PropTypes.string.isRequired,
};

export default Block;
