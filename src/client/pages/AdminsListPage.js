import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import requireAuth  from '../components/hocs/requireAuth';

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>
    });
  }

  render() {
    return (
      <div>
        Protect list of admins:
        <ul>{this.renderAdmins()}</ul>
      </div>
    )
  }
} 

function mapStateToProps({ admins }) {
  return { admins };
}

function loadData(store) {
  // console.log(`I'm trying to load some data`);
  return store.dispatch(fetchAdmins());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchAdmins })(
    requireAuth(AdminsListPage)
  )
};
