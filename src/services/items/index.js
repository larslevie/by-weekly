import uuid from 'uuid/v4';
import { db } from '../../constants/firebase';

const update = async ({ workspaceId, itemId, ...rest }) => {
  const ref = db.collection(`workspaces/${workspaceId}/items`).doc(itemId);
  await ref.set({ ...rest }, { merge: true });
};

const create = async ({ workspaceId, label }) => {
  const itemId = uuid();
  const ref = db.collection(`workspaces/${workspaceId}/items`).doc(itemId);

  await ref.set({ label });

  return ref;
};

const remove = async ({ workspaceId, itemId }) => {
  const ref = db.collection(`workspaces/${workspaceId}/items`).doc(itemId);
  ref.delete();
};

export default { create, update, delete: remove };
