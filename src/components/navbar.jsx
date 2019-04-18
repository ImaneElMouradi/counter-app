import React, { Component } from "react";

// stateless Functional component so no need to use a Class
// sfc + tab

const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

/*
class NavBar extends Component {
  render() {
    
  }
}
*/

export default NavBar;
