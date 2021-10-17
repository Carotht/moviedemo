import React, { Component } from "react";
import slide1 from "./../../../../assets/img/banner1.png";
import slide2 from "./../../../../assets/img/banner2.png"

export default class HomeSlider extends Component {
  render() {
    return (
      <div
        id="carouselExampleDark"
        className="carousel  slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={10000}>
            <img src={slide1} className="img-fluid d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src={slide2} className="img-fluid d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="fas fa-arrow-circle-left fa-3x" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="fas fa-arrow-circle-right fa-3x"
            aria-hidden="true"
          />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}
