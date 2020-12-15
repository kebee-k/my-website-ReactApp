import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Service from "./component/Service";
import Navbar from "./header/CustomNavbar";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import LatestPost from "./component/LatestPost";
import Product from "./component/Product";
import Follow from "./component/Follow";
import Background from "./background/Background"
import MapSite from "./component/MapSite";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Background />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/LatestPost" component={LatestPost} />
          <Route path="/contact" component={Contact} />
          <Route path="/service" component={Service} />
          <Route path="/product" component={Product} />
          <Route path="/mapsite" component={MapSite} />
          <Footer />
          <Follow />
        </div>
      </Router>
    );
  }
}
export default App;
