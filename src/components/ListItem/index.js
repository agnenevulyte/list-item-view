// import React from "react";
// import { useParams } from "react-router-dom";

// export default function ListItem() {
//   let { id } = useParams();
//   return <div>name: {id}</div>;
// }

import React, { Component } from "react";
import { fetchData } from "../List/fetchData";
import { connect } from "react-redux";
import {
  usersLoaded,
  userLoaded,
  userLoading,
  userLoadingError
} from "../../actions";

class ListItem extends Component {
  componentDidMount() {
    this.props.userLoading();
    fetchData()
      .then(res => {
        console.log("res:", res.clients);
        this.props.userLoaded(res.clients);
      })
      .catch(error => {
        console.log(error);
        this.props.userLoadingError(error);
      });
  }
  render() {
    const { users, loading, error } = this.props;
    const currentUserId = this.props.match.params.id;
    const currentUser = users[currentUserId - 1];
    console.log("currentUser: ", currentUser);
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;
    if (!currentUserId) return "No client";
    return (
      <div>
        <img src={currentUser.image} alt={currentUser.id} />
        <h4>{currentUser.phone}</h4>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.user.loading,
  users: state.users.users,
  error: state.user.error
});

const mapDispatchToProps = {
  usersLoaded,
  userLoaded,
  userLoading,
  userLoadingError
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
