import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieItem from "./../../ListMoviePage/MovieItem";
import Loader from "components/Loader";
import { actFetchListMovie } from "./../../ListMoviePage/modules/actions";
import { connect } from "react-redux";
class HomeMovieSlick extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  renderListMovie() {
    const { loading, data } = this.props;
    if (loading) return <Loader />;
    return data?.map((movie) => {
      return (
        <div key={movie.maPhim}>
          <MovieItem movie={movie} />
        </div>
      );
    });
  }

  render() {
    const settings = {
      arrows: true,
      dots: true,
      className: "center",
      centerMode: true,
      infinite: true,
      slidesToShow: 1,
      speed: 500,
      rows: 3,
      slidesPerRow: 5,

      pauseOnHover: true,
    };
    return (
      <div className="movieItem home">
        <h1 className="text-white">Movie</h1>
        <button
          id="dangchieu"
          className=" button1 active "
          onClick={() => {
            this.props.dangChieu();
            document.getElementById("sapchieu").classList.remove("active");
            document.getElementById("dangchieu").classList.add("active");
          }}
        >
          Now Showing
        </button>
        <button
          id="sapchieu"
          className="button1 ms-5"
          onClick={() => {
            this.props.sapChieu();
            document.getElementById("sapchieu").classList.add("active");
            document.getElementById("dangchieu").classList.remove("active");
          }}
        >
          Coming Soon
        </button>

        <Slider {...settings}>{this.renderListMovie()}</Slider>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.listMovieReducer.loading,
    data: state.listMovieReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => {
      dispatch(actFetchListMovie());
    },
    dangChieu: () => {
      dispatch({
        type: "DangChieu",
      });
    },
    sapChieu: () => {
      dispatch({
        type: "SapChieu",
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeMovieSlick);
