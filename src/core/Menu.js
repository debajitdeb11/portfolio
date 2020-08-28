import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div>
        <ul className="justify-content-center nav nav-tabs py-2">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/writeup">
              Write ups
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/writeup">
              Resume
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Menu);
