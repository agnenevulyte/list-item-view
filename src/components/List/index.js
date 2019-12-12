import React, { Component } from "react";
import { Route } from "react-router-dom";
import { fetchData } from "./fetchData";

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loading: true,
      error: null
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const res = await fetchData();
      console.log("res:", res);
      this.setState({
        users: res.clients,
        loading: false
      });
    } catch (error) {
      console.log(error);
      this.setState({
        loading: false,
        error: error
      });
    }
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <Route
          render={({ history }) => (
            <ul>
              {users &&
                users.map(user => (
                  <li
                    key={user.id}
                    onClick={() => history.push(`/${user.name}`)}
                  >
                    <h1>{user.name}</h1>
                    <p>{user.description}</p>
                  </li>
                ))}
            </ul>
          )}
        />
      </div>
    );
  }
}
