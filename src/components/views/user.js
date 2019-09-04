import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchUsers } from './../../actions/index';
import Card from './../shared/card';




class Users extends Component {

  componentDidMount() {
    this.props.fetchUsers();
    console.log(this.props);

  }

  userClick = (user) => {
    console.log(user.id);
    this.props.history.push('/user/' + user.id)

  }

  render() {
    const cards = this.props.users.map((user) => {
      return (
        <div key={user.id}>
          <Link to={`/user/${user.id}`}>
            <Card title={user.name}
              body={user.phone}
              onClick={() => this.userClick(user)} />
          </Link>
        </div>
      )
    })

    return (
      <div>
        <h3>Users</h3>
        {cards}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  console.log(state);
  return { users: state.users }
}

export default connect(mapStateToProps, {
  fetchUsers: fetchUsers
})(Users);
