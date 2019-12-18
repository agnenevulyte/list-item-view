import React, { useEffect, Component } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "./fetchData";
import { connect } from "react-redux";
import { usersLoaded, usersLoading, usersLoadingError } from "../../actions";

class List extends Component {
  componentDidMount() {
    this.props.usersLoading();

    fetchData()
      .then(res => {
        console.log("res:", res);
        this.props.usersLoaded(res.clients);
      })
      .catch(error => {
        console.log(error);
        this.props.usersLoadingError(error);
      });
  }

  render() {
    const { users } = this.props;
    console.log("list users: ", users);
    return (
      <div>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <Link to={`/${user.id}`}>
                <h1>{user.name}</h1>
                <p>{user.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.users.loading,
  users: state.users.users,
  error: state.users.error
});

const mapDispatchToProps = {
  usersLoaded,
  usersLoading,
  usersLoadingError
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
