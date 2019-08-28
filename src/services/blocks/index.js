import uuid from 'uuid/v4';
import { firestore } from 'firebase';
import { db } from '../../constants/firebase';
import items from '../items';

const create = ({
  id, boardId, label, order, workspaceId,
}) => {
  const blockId = id || uuid();
  const boardPath = `workspaces/${workspaceId}/boards/${boardId}`;

  const doc = {
    importantItemIds: [],
    itemIds: [],
    deferredIds: [],
    importantIds: [],
    label,
  };

  if (order) doc.order = order;

  db.collection(`${boardPath}/blocks`)
    .doc(blockId)
    .set(doc);
};

const createItem = ({ workspaceId, blockId, boardId }) => {
  const blockPath = `workspaces/${workspaceId}/boards/${boardId}/blocks/${blockId}`;

  items.create({ workspaceId, label: '' }).then(({ id }) => {
    db.doc(blockPath).update({ itemIds: firestore.FieldValue.arrayUnion(id) });
  });
};

const deleteItem = ({
  workspaceId, boardId, blockId, itemId,
}) => {
  const blockPath = `workspaces/${workspaceId}/boards/${boardId}/blocks/${blockId}`;

  db.doc(blockPath)
    .update({
      itemIds: firestore.FieldValue.arrayRemove(itemId),
      deferredIds: firestore.FieldValue.arrayRemove(itemId),
      importantIds: firestore.FieldValue.arrayRemove(itemId),
    })
    .then(() => items.delete({ workspaceId, itemId }));
};

export default {
  create,
  createItem,
  deleteItem,
};
