/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import {
  Menu, MenuDisclosure, MenuItem, useMenuState,
} from 'reakit';
import { Checkbox } from 'reakit/Checkbox';
import { jsx } from 'theme-ui';
import { db } from '../../constants/firebase';
import items from '../../services/items';
import blocks from '../../services/blocks';
import schemata from '../../schemata';

const ItemControls = ({
  workspaceId, item, boardId, blockId,
}) => {
  const menu = useMenuState();

  return (
    <React.Fragment>
      <MenuDisclosure
        {...menu}
        sx={{ border: 'none', backgroundColor: 'background' }}
      >
        Preferences
      </MenuDisclosure>
      <Menu {...menu} aria-label="Item controls">
        <MenuItem
          {...menu}
          onClick={() => {
            menu.hide();
            blocks.toggleItemDeferred({
              blockId,
              boardId,
              itemId: item.id,
              workspaceId,
              isDeferred: item.status === 'deferred',
            });
          }}
        >
          {item.status === 'deferred' ? 'Undefer' : 'Defer'}
        </MenuItem>
        <MenuItem
          {...menu}
          onClick={() => {
            menu.hide();
            blocks.cancelItem({
              blockId,
              boardId,
              itemId: item.id,
              workspaceId,
            });
          }}
        >
          {item.status === 'cancelled' ? 'Uncancel' : 'Cancel'}
        </MenuItem>
        <MenuItem
          {...menu}
          onClick={() => {
            blocks.deleteItem({
              blockId,
              boardId,
              itemId: item.id,
              workspaceId,
            });
          }}
        >
          Delete
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

const Item = ({
  workspaceId, itemId, boardId, block,
}) => {
  const itemRef = db.doc(`workspaces/${workspaceId}/items/${itemId}`);

  const [item, loading, error] = useDocumentData(itemRef, {
    snapshotListenOptions: { includeMetadataChanges: true },
    idField: 'id',
  });

  if (error) return 'Error';
  if (loading) return '';

  item.status = blocks.getItemStatus({ block, item });
  item.isImportant = blocks.isItemImportant({ block, itemId: item.id });

  return (
    <li>
      <Checkbox
        type="checkbox"
        name="completed"
        checked={item.status === 'completed'}
        onChange={({ target: { checked } }) => {
          console.log('Completeing');
          blocks.toggleItemComplete({
            workspaceId,
            blockId: block.id,
            boardId,
            itemId,
            isComplete: checked,
          });
        }}
      />
      <input
        type="text"
        name="label"
        value={item.label}
        onChange={({ target: { value } }) =>
          items.update({ workspaceId, itemId, label: value })
        }
      />
      <ItemControls
        workspaceId={workspaceId}
        item={item}
        boardId={boardId}
        blockId={block.id}
      />
    </li>
  );
};

Item.propTypes = {
  block: PropTypes.shape(schemata.BlockSchema).isRequired,
  boardId: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  workspaceId: PropTypes.string.isRequired,
};

ItemControls.propTypes = {
  blockId: PropTypes.string.isRequired,
  boardId: PropTypes.string.isRequired,
  item: PropTypes.shape(schemata.ItemSchema).isRequired,
  workspaceId: PropTypes.string.isRequired,
};

export default Item;
