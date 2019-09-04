import uuid from 'uuid/v4';
import { db } from '../../constants/firebase';

const update = async ({ workspaceId, itemId, ...rest }) => {
  const ref = db.collection(`workspaces/${workspaceId}/items`).doc(itemId);
  await ref.set({ ...rest }, { merge: true });
};

const create = async ({ workspaceId, label }) => {
  const itemId = uuid();
  const ref = db.collection(`workspaces/${workspaceId}/items`).doc(itemId);

  await update({ workspaceId, itemId, label });

  return ref;
};

const remove = async ({ workspaceId, itemId }) => {
  const ref = db.collection(`workspaces/${workspaceId}/items`).doc(itemId);
  ref.delete();
};

const cancel = async ({ workspaceId, itemId }) => {
  await update({
    workspaceId,
    itemId,
    canceledAt: new Date().toISOString(),
    completedAt: null,
  });
};

const uncancel = async ({ workspaceId, itemId }) => {
  update({
    workspaceId, itemId, canceledAt: null, completedAt: null,
  });
};

const setComplete = async ({ workspaceId, itemId }) => {
  update({
    workspaceId,
    itemId,
    completedAt: new Date().toISOString(),
    canceledAt: null,
  });
};

const setIncomplete = async ({ workspaceId, itemId }) => {
  update({
    workspaceId,
    itemId,
    completedAt: null,
    canceledAt: null,
  });
};

const toggleComplete = async ({ workspaceId, itemId, isComplete }) =>
  (isComplete
    ? setComplete({ workspaceId, itemId })
    : setIncomplete({ workspaceId, itemId }));

const defer = async ({ workspaceId, itemId }) =>
  update({
    workspaceId,
    itemId,
    completedAt: null,
    canceledAt: null,
  });

export default {
  cancel,
  create,
  defer,
  delete: remove,
  setComplete,
  setIncomplete,
  toggleComplete,
  uncancel,
  update,
};
