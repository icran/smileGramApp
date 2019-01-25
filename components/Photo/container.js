import React, { Component } from "react";
import PropTypes from "prop-types";
import Photo from "./presenter";

console.log("wwwwwwwwPhoto container.jswwwwwwwwww");

class Container extends Component {
  render() {

    console.log("//////////////////////");
    console.log(this.props);
    return <Photo {...this.props} />;
  }
}


export default Container;
