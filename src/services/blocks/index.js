import uuid from 'uuid/v4';
import { firestore } from 'firebase';
import { db } from '../../constants/firebase';
import items from '../items';

export const create = ({
  id, boardId, label, order, workspaceId,
}) => {
  const blockId = id || uuid();
  const boardPath = `workspaces/${workspaceId}/boards/${boardId}`;

  const doc = {
    importantItemRefs: [],
    itemRefs: [],
    label,
  };

  if (order) doc.order = order;

  db.collection(`${boardPath}/blocks`)
    .doc(blockId)
    .set(doc);
};

export const createItem = ({ workspaceId, blockId, boardId }) => {
  const blocksPath = `workspaces/${workspaceId}/boards/${boardId}/blocks`;

  console.log('creating item', { workspaceId, blockId, boardId });
  items.create({ workspaceId, label: '' }).then((itemRef) => {
    console.log('adding itemref', itemRef);
    db.collection(blocksPath)
      .doc(blockId)
      .update({ itemRefs: firestore.FieldValue.arrayUnion(itemRef) })
      .then(() => console.log('Done adding itemRef'))
      .catch(() => console.error('Something went wrong adding itemRef.'));
  });
};

export default {
  create,
  createItem,
};
