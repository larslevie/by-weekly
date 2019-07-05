import React from 'react';
import { Toolbar, ToolbarItem, useToolbarState } from 'reakit';
import getISOWeek from 'date-fns/get_iso_week';
import startOfISOWeek from 'date-fns/start_of_iso_week';
import endOfISOWeek from 'date-fns/end_of_iso_week';
import formatDate from 'date-fns/format';
import styles from './styles';

const NavBar = () => {
  const toolbar = useToolbarState();
  const isoWeek = getISOWeek(new Date());
  const startOfWeek = startOfISOWeek(new Date());
  const endOfWeek = endOfISOWeek(new Date());

  return (
    <Toolbar {...toolbar} css={styles.toolbar}>
      <ToolbarItem
        {...toolbar}
        as="a"
        css={[styles.toolbarItem, styles.logo]}
        href="/"
      >
        By Weekly
      </ToolbarItem>
      <span css={[styles.toolbarItem]}>
        {formatDate(startOfWeek, 'MM/DD')}
        {' '}
&ndash;
        {' '}
        {formatDate(endOfWeek, 'MM/DD')}
      </span>
      <span css={[styles.toolbarItem]}>{`Week ${isoWeek}`}</span>
    </Toolbar>
  );
};

export default NavBar;
