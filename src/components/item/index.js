/** @jsx jsx */

import {
  faArrowCircleRight,
  faCheck,
  faLevelUpAlt,
  faTimes,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import { useDocumentData } from 'react-firebase-hooks/firestore';
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
  console.log({
    workspaceId,
    item,
    boardId,
    blockId,
  });

  return (
    <div sx={styles.itemControls}>
      <button
        sx={styles.itemControl}
        type="button"
        onClick={() => {
          blocks.deleteItem({
            blockId,
            boardId,
            itemId: item.id,
            workspaceId,
          });
        }}
      >
        <FontAwesomeIcon icon={faTimesCircle} size="lg" />
      </button>
      <button
        sx={styles.itemControl}
        type="button"
        onClick={() => {
          blocks.toggleItemDeferred({
            blockId,
            boardId,
            itemId: item.id,
            workspaceId,
            isDeferred: item.status === 'deferred',
          });
        }}
      >
        <FontAwesomeIcon icon={faArrowCircleRight} size="lg" />
      </button>
    </div>
  );
};

const iconStatusMap = {
  canceled: faTimes,
  completed: faCheck,
  deferred: faLevelUpAlt,
};

const Input = ({ workspaceId, item }) => {
  const [label, setLabel] = useState(item.label);

  const onChange = useCallback(
    ({ target: { value } }) => {
      setLabel(value);
      items.update({ workspaceId, itemId: item.id, label: value });
    },
    [item.id, workspaceId],
  );

  return (
    <input
      type="text"
      name="label"
      sx={styles.itemLabel}
      value={label}
      onChange={onChange}
    />
  );
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
    <li sx={{ ...styles.root }}>
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
        <Input workspaceId={workspaceId} itemId={itemId} item={item} />
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

Input.propTypes = {
  item: PropTypes.shape(schemata.ItemSchema).isRequired,
  workspaceId: PropTypes.string.isRequired,
};

export default Item;
