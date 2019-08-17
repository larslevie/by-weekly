import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../grid';
import NavBar from '../navbar';

const Page = ({ date }) => (
  <div>
    <NavBar date={date} />
    <Grid date={date} />
  </div>
);

Page.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Page;
