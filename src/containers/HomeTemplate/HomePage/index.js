import React, { Component } from "react";
import HomeMovie from "./HomeMovieSlick/index";
import HomeSlider from "./HomeSlider/index";

export default class HomePage extends Component {

  render() {
    return (
      <React.Fragment>
        <HomeSlider />
        <HomeMovie />
      </React.Fragment>
    );
  }
}
