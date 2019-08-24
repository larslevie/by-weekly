import getISOWeek from 'date-fns/get_iso_week';
import getISOYear from 'date-fns/get_iso_year';
import uuid from 'uuid/v4';
import { db } from '../../constants/firebase';
import { create as createBlock } from '../blocks';

const getISOWeekKey = (date) => {
  const isoWeek = getISOWeek(date);
  const isoYear = getISOYear(date);

  return `${isoYear}-W${isoWeek}`;
};

export const create = ({ workspaceId, isoWeek, name }) => {
  const boardId = uuid();
  const workspacePath = `workspaces/${workspaceId}`;

  db.collection(`${workspacePath}/boards`)
    .doc(boardId)
    .set({ isoWeek, name, type: 'iso-week' });

  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Next'].forEach(
    (label, i) =>
      createBlock({
        boardId,
        label,
        order: i + 1,
        workspaceId,
      }),
  );
};

export const createCurrent = ({ workspaceId }) => {
  const now = new Date();

  create({ workspaceId, isoWeek: getISOWeekKey(now), name: '' });
};

export const getCurrentRef = ({ workspaceId }) => {
  const now = new Date();

  return db
    .collection(`workspaces/${workspaceId}/boards`)
    .where('isoWeek', '==', getISOWeekKey(now));
};
