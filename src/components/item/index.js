/** @jsx jsx */

import {
  faCheck,
  faEllipsisH,
  faLevelUpAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import {
  Menu, MenuDisclosure, MenuItem, useMenuState,
} from 'reakit';
import { jsx } from 'theme-ui';
import { db } from '../../constants/firebase';
import schemata from '../../schemata';
import blocks from '../../services/blocks';
import items from '../../services/items';
import Checkbox from '../shared/checkbox';
import styles from './styles';

const ItemControls = ({
  workspaceId, item, boardId, blockId,
}) => {
  const menu = useMenuState();

  return (
    <React.Fragment>
      <MenuDisclosure {...menu} sx={styles.menuDisclosure}>
        <FontAwesomeIcon icon={faEllipsisH} />
      </MenuDisclosure>

      <Menu {...menu} aria-label="Item controls" sx={styles.menu}>
        <MenuItem
          {...menu}
          sx={styles.menuItem}
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
          sx={styles.menuItem}
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
          sx={styles.menuItem}
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

const iconStatusMap = {
  canceled: faTimes,
  completed: faCheck,
  deferred: faLevelUpAlt,
};

const Item = ({
  workspaceId, itemId, boardId, block,
}) => {
  const itemRef = db.doc(`workspaces/${workspaceId}/items/${itemId}`);

  const [item, loading, error] = useDocumentData(itemRef, {
    idField: 'id',
  });

  if (error) return 'Error';
  if (loading) return '';

  item.status = blocks.getItemStatus({ block, item });
  item.isImportant = blocks.isItemImportant({ block, itemId: item.id });

  return (
    <li sx={styles.root}>
      <div sx={styles.itemWrapper} className={`status-${item.status}`}>
        <Checkbox
          name="isComplete"
          itemKey={`${itemId}-isComplete`}
          icon={iconStatusMap[item.status]}
          checked={item.status === 'completed'}
          handleChange={({ target: { checked } }) => {
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
          sx={styles.itemLabel}
          value={item.label}
          onChange={({ target: { value } }) =>
            items.update({ workspaceId, itemId, label: value })
          }
        />
      </div>
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
