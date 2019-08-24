import uuid from 'uuid/v4';
import { db } from '../../constants/firebase';

export const create = ({ workspaceId, boardId, label }) => {
  const blockId = uuid();
  const boardPath = `workspaces/${workspaceId}/boards/${boardId}`;

  db.collection(`${boardPath}/blocks`)
    .doc(blockId)
    .set({
      importantItemRefs: [],
      itemRefs: [],
      label,
    });
};

export default {
  create,
};
