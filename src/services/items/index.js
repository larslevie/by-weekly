import uuid from 'uuid/v4';
import { db } from '../../constants/firebase';

export const create = async ({ workspaceId, label }) => {
  const itemId = uuid();
  const ref = db.collection(`workspaces/${workspaceId}/items`).doc(itemId);

  await ref.set({ label });

  return ref;
};

export default { create };
