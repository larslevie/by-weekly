/** @jsx jsx */

import endOfWeek from 'date-fns/end_of_week';
import formatDate from 'date-fns/format';
import getISOWeek from 'date-fns/get_iso_week';
import startOfWeek from 'date-fns/start_of_week';
import PropTypes from 'prop-types';
import { Toolbar, ToolbarItem, useToolbarState } from 'reakit';
import { jsx } from 'theme-ui';
import { auth } from '../../constants/firebase';
import styles from './styles';

const NavBar = ({ date }) => {
  const toolbar = useToolbarState();
  const isoWeek = getISOWeek(date);
  const firstDay = startOfWeek(date, { weekStartsOn: 1 });
  const lastDay = endOfWeek(date, { weekStartsOn: 1 });

  return (
    <Toolbar {...toolbar} sx={styles.toolbar} aria-label="Navigation">
      <div sx={styles.toolbarStart}>
        <span sx={styles.toolbarItem}>
          The Week of {formatDate(firstDay, 'MMMM DD')} &ndash;{' '}
          {formatDate(lastDay, 'MMMM DD')}
          <span sx={styles.weekNumber}>
            {' / '}
            {isoWeek}
          </span>
        </span>
      </div>

      <div sx={styles.toolbarEnd}>
        <ToolbarItem
          {...toolbar}
          sx={styles.button}
          as="button"
          onClick={() => auth.signOut()}
        >
          Logout
        </ToolbarItem>
        <ToolbarItem
          {...toolbar}
          as="a"
          sx={{ ...styles.toolbarItem, ...styles.logo }}
          href="/"
        >
          By Weekly
        </ToolbarItem>
      </div>
    </Toolbar>
  );
};

NavBar.propTypes = {
  date: PropTypes.string.isRequired,
};

export default NavBar;
