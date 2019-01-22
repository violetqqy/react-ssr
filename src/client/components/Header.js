import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const Header =  ({ auth }) => {
  console.log(`My auth state is ${auth}.`);
  return (
    <div>
      <Link to='/'>React SSR</Link>
    </div>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
