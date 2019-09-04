import { firestore } from 'firebase';
import uuid from 'uuid/v4';
import { db } from '../../constants/firebase';
import items from '../items';

const create = ({
  id, boardId, label, order, workspaceId,
}) => {
  const blockId = id || uuid();
  const boardPath = `workspaces/${workspaceId}/boards/${boardId}`;

  const doc = {
    deferredItemIds: [],
    importantItemIds: [],
    itemIds: [],
    label,
  };

  if (order) doc.order = order;

  db.collection(`${boardPath}/blocks`)
    .doc(blockId)
    .set(doc);
};

const createItem = async ({ workspaceId, blockId, boardId }) => {
  const blockPath = `workspaces/${workspaceId}/boards/${boardId}/blocks/${blockId}`;

  const { id } = await items.create({ workspaceId, label: '' });
  db.doc(blockPath).update({ itemIds: firestore.FieldValue.arrayUnion(id) });
};

const deleteItem = async ({
  workspaceId, boardId, blockId, itemId,
}) => {
  const blockPath = `workspaces/${workspaceId}/boards/${boardId}/blocks/${blockId}`;

  await db.doc(blockPath).update({
    itemIds: firestore.FieldValue.arrayRemove(itemId),
    deferredItemIds: firestore.FieldValue.arrayRemove(itemId),
    importantItemIds: firestore.FieldValue.arrayRemove(itemId),
  });

  items.delete({ workspaceId, itemId });
};

const deferItem = ({
  workspaceId, boardId, blockId, itemId,
}) => {
  const blockPath = `workspaces/${workspaceId}/boards/${boardId}/blocks/${blockId}`;

  db.doc(blockPath).update({
    deferredItemIds: firestore.FieldValue.arrayUnion(itemId),
    importantItemIds: firestore.FieldValue.arrayRemove(itemId),
  });

  items.defer({ workspaceId, itemId });
};

const undeferItem = ({
  workspaceId, boardId, blockId, itemId,
}) => {
  const blockPath = `workspaces/${workspaceId}/boards/${boardId}/blocks/${blockId}`;

  db.doc(blockPath).update({
    deferredItemIds: firestore.FieldValue.arrayRemove(itemId),
  });
};

const toggleItemDeferred = ({ isDeferred, ...rest }) => {
  if (isDeferred) {
    undeferItem({ ...rest });
  } else {
    deferItem({ ...rest });
  }
};

const cancelItem = ({
  workspaceId, boardId, blockId, itemId,
}) => {
  const blockPath = `workspaces/${workspaceId}/boards/${boardId}/blocks/${blockId}`;

  db.doc(blockPath).update({
    deferredItemIds: firestore.FieldValue.arrayRemove(itemId),
  });

  items.cancel({ workspaceId, itemId });
};

const uncancelItem = ({ workspaceId, itemId }) => {
  items.uncancel({ workspaceId, itemId });
};

const toggleItemCanceled = ({ isCanceled, ...rest }) => {
  if (isCanceled) {
    uncancelItem({
      ...rest,
    });
  } else {
    cancelItem({
      ...rest,
    });
  }
};

const toggleItemComplete = async ({
  blockId,
  boardId,
  isComplete,
  itemId,
  workspaceId,
}) => {
  const blockPath = `workspaces/${workspaceId}/boards/${boardId}/blocks/${blockId}`;

  if (isComplete) {
    await db.doc(blockPath).update({
      deferredItemIds: firestore.FieldValue.arrayRemove(itemId),
    });
  }

  items.toggleComplete({ workspaceId, itemId, isComplete });
};

const getItemStatus = ({ block, item }) => {
  if (item.canceledAt) return 'canceled';
  if (block.deferredItemIds.includes(item.id)) return 'deferred';
  if (item.completedAt) return 'completed';

  return 'incomplete';
};

const isItemImportant = ({ block, itemId }) =>
  block.importantItemIds.includes(itemId);

export default {
  cancelItem,
  create,
  createItem,
  deferItem,
  deleteItem,
  getItemStatus,
  isItemImportant,
  toggleItemCanceled,
  toggleItemComplete,
  toggleItemDeferred,
  uncancelItem,
};
