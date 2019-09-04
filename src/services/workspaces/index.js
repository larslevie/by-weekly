import uuid from 'uuid/v4';
import { db } from '../../constants/firebase';

export const create = ({ userId, name, isCurrent = false }) => {
  const workspaceId = uuid();

  db.collection('workspaces')
    .doc(workspaceId)
    .set({
      current: isCurrent,
      name,
      userId,
      version: 1,
    });
};

export default { create };
