import React from 'react';
import { Toolbar, ToolbarItem, useToolbarState } from 'reakit';
import styles from './styles';

const NavBar = () => {
  const toolbar = useToolbarState();
  return (
    <Toolbar {...toolbar} css={styles.toolbar}>
      <ToolbarItem
        {...toolbar}
        as="a"
        css={[styles.toolbarItem, styles.logo]}
        href="/"
      >
        Weekly
      </ToolbarItem>
    </Toolbar>
  );
};

export default NavBar;
