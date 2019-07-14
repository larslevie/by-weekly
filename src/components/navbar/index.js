import endOfISOWeek from 'date-fns/end_of_iso_week';
import formatDate from 'date-fns/format';
import getISOWeek from 'date-fns/get_iso_week';
import startOfISOWeek from 'date-fns/start_of_iso_week';
import React from 'react';
import { Toolbar, ToolbarItem, useToolbarState } from 'reakit';
import styles from './styles';

const NavBar = () => {
  const toolbar = useToolbarState();
  const isoWeek = getISOWeek(new Date());
  const startOfWeek = startOfISOWeek(new Date());
  const endOfWeek = endOfISOWeek(new Date());

  return (
    <Toolbar {...toolbar} css={styles.toolbar}>
      <div css={styles.toolbarStart}>
        <span css={[styles.toolbarItem]}>
          The Week of
          {' '}
          {formatDate(startOfWeek, 'MMMM DD')}
          {' '}
&ndash;
          {' '}
          {formatDate(endOfWeek, 'MMMM DD')}
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

export default NavBar;
