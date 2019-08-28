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

const ItemControls = ({
  workspaceId, itemId, boardId, blockId,
}) => {
  console.log([workspaceId, itemId]);

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
            blocks.deleteItem({
              workspaceId,
              boardId,
              blockId,
              itemId,
            });
          }}
        >
          Delete
        </MenuItem>
        <MenuItem
          {...menu}
          onClick={() => {
            menu.hide();
            console.log('clicked on button');
          }}
        >
          Defer
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

const Item = ({
  workspaceId, itemId, boardId, blockId,
}) => {
  const itemRef = db.doc(`workspaces/${workspaceId}/items/${itemId}`);

  const [item, loading, error] = useDocumentData(itemRef, {
    snapshotListenOptions: { includeMetadataChanges: true },
    idField: 'id',
  });

  if (error) return 'Error';
  if (loading) return '';

  return (
    <li>
      <Checkbox
        type="checkbox"
        name="completed"
        checked={!!item.completedAt}
        onChange={({ target: { checked } }) =>
          items.update({
            workspaceId,
            itemId,
            completedAt: checked ? new Date() : null,
          })
        }
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
        itemId={itemId}
        boardId={boardId}
        blockId={blockId}
      />
    </li>
  );
};

Item.propTypes = {
  blockId: PropTypes.string.isRequired,
  boardId: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  workspaceId: PropTypes.string.isRequired,
};

ItemControls.propTypes = {
  blockId: PropTypes.string.isRequired,
  boardId: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  workspaceId: PropTypes.string.isRequired,
};

export default Item;
