import React, { Component } from "react";
import MovieItem from "./MovieItem";
import Loader from "components/Loader";
import { actFetchListMovie } from "./modules/actions";
import { connect } from "react-redux";

class ListMoviePage extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  renderListMovie() {
    const { loading, data } = this.props;
    if (loading) return <Loader />;
    return data?.map((movie) => {
      return (
        <div className="col-3 colMovie">
          <MovieItem key={movie.maPhim} movie={movie} />
        </div>
      );
    });
  }

  render() {
    return (
      // <div className="container">
      //   <h3>ListMoviePage</h3>
      //   <div className="row">{this.renderListMovie()}</div>
      // </div>
      <React.Fragment>
        <div className="movieItem pt-5 bg-dark">
          <div className="container">
            <div className="mb-4 ">
              <button
                id="dangchieu"
                className=" button1 active "
                onClick={() => {
                  this.props.dangChieu();
                  document
                    .getElementById("sapchieu")
                    .classList.remove("active");
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
                  document
                    .getElementById("dangchieu")
                    .classList.remove("active");
                }}
              >
                Coming Soon
              </button>
            </div>

            <div className="row">{this.renderListMovie()}</div>
          </div>
        </div>
      </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);
