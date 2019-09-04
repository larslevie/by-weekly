/** @jsx jsx */

import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import NavBar from '../navbar';
import styles from './styles';

const Page = ({ children }) => (
  <div sx={styles.root}>
    <NavBar date={new Date().toISOString()} />
    <div sx={styles.content}>{children}</div>
    <footer sx={styles.footer}>
      Made by <a href="http://levieindustries.com">Levie Industries</a>.
      Copyright &copy; 2019. All rights reserved.
    </footer>
  </div>
);

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Page;
