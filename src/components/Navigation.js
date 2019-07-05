import React from "react";
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <div id="nav">
      <Link to="/">home</Link>
      <Link to="/blog">blog</Link>
    </div>
  );
}

export default Navigation;
