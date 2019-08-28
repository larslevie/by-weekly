import PropTypes from 'prop-types';

export const WorkspaceSchema = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  version: PropTypes.number.isRequired,
};

export const BoardSchema = {
  id: PropTypes.string.isRequired,
  deferredIds: PropTypes.arrayOf(PropTypes.string),
  importantIds: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['iso-week']).isRequired,
};

export const BlockSchema = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  order: PropTypes.number,
};

export const ItemSchema = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  status: PropTypes.shape({
    label: PropTypes.oneOf(['complete', 'incomplete', 'canceled']).isRequired,
    at: PropTypes.string.isRequired,
  }),
};

export default {
  BoardSchema,
  WorkspaceSchema,
};
