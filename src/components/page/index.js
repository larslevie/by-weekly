/** @jsx jsx */

import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import NavBar from '../navbar';

const Page = ({ children }) => (
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
    }}
  >
    <NavBar date={new Date().toISOString()} />
    <div
      sx={{
        flex: 1,
        width: '100%',
      }}
    >
      {children}
    </div>
    <footer
      sx={{
        width: '100%',
      }}
    >
      Footer
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
