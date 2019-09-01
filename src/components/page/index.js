/** @jsx jsx */

import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import NavBar from '../navbar';
import styles from './styles';

const Page = ({ children }) => (
  <div sx={styles.root}>
    <NavBar date={new Date().toISOString()} />
    <div sx={styles.content}>{children}</div>
    <footer sx={styles.footer}>Footer</footer>
  </div>
);

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Page;
