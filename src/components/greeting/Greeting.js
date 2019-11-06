import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./greeting.css";

import UsernameAction from "../../actions/UsernameAction";
const Greeting = props => {
  const [requiresRedirect, redirect] = useState(false);
  const [username, setUsername] = useState("");
  const handleChange = event => {
    setUsername(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (username.length === 0) {
      alert("Please type any username!");
      return;
    }
    props.data.dispatch(UsernameAction(username));
    redirect(true);
  };

  if (!requiresRedirect) {
    return (
      <div>
        <h1>Welcome to PostsApp!</h1>
        <h3>Please choose username</h3>
        <form onSubmit={e => handleSubmit(e)}>
          <input
            className="username-input"
            type="text"
            placeholder="type username"
            value={username}
            onChange={e => handleChange(e)}
          />
          <input className="submit-username" type="submit" value="GO" />
        </form>
      </div>
    );
  } else {
    return <Redirect to="/main" />;
  }
};

export default Greeting;
