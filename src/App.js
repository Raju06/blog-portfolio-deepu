import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./App.css";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import BlogPostDetailed from "./components/BlogPostDetailed";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blogs} />
        <Route exact path="/blog/:title" component={BlogPostDetailed} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Footer />
      </div>
    );
  }
}

export default App;
