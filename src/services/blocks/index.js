import uuid from 'uuid/v4';
import { db } from '../../constants/firebase';

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

export default {
  create,
};
