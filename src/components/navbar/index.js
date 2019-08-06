import endOfWeek from 'date-fns/end_of_week';
import formatDate from 'date-fns/format';
import getISOWeek from 'date-fns/get_iso_week';
import startOfWeek from 'date-fns/start_of_week';
import PropTypes from 'prop-types';
import React from 'react';
import { Toolbar, ToolbarItem, useToolbarState } from 'reakit';
import styles from './styles';

const NavBar = ({ date }) => {
  const toolbar = useToolbarState();
  const isoWeek = getISOWeek(date);
  const firstDay = startOfWeek(date, { weekStartsOn: 1 });
  const lastDay = endOfWeek(date, { weekStartsOn: 1 });

  return (
    <Toolbar {...toolbar} css={styles.toolbar}>
      <div css={styles.toolbarStart}>
        <span css={[styles.toolbarItem]}>
          The Week of
          {' '}
          {formatDate(firstDay, 'MMMM DD')}
          {' '}
&ndash;
          {' '}
          {formatDate(lastDay, 'MMMM DD')}
          <span css={styles.weekNumber}>
            {' / '}
            {isoWeek}
          </span>
        </span>
      </div>

      <div css={styles.toolbarEnd}>
        <ToolbarItem
          {...toolbar}
          as="a"
          css={[styles.toolbarItem, styles.logo]}
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
