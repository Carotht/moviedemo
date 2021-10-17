import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MovieItem extends Component {
  render() {
    const { movie } = this.props;
    let urlMovie = movie.trailer;
    const resultFind = urlMovie.replace("watch?v=", "embed/");
    const result1 = urlMovie.replace("youtu.be/", "youtube.com/embed/");

    return (
      // <div className="col-md-3">
      //     <div className="card">
      //         <img className="card-img-top" src={movie.hinhAnh} alt="" />
      //         <div className="card-body">
      //             <h4 className="card-title">{movie.tenPhim}</h4>
      //             <Link
      //                 className="btn btn-info"
      //                 to={`/detail/${movie.maPhim}`}
      //             >
      //                 Detail
      //             </Link>
      //         </div>
      //     </div>
      // </div>

      <div className="card">
        <img className="img-fluid" src={movie.hinhAnh} alt="Lỗi Tải Ảnh" />
        <div className="face face2">
          <div className="trailer">
            <i
              className="far fa-play-circle btn"
              data-toggle="tooltip"
              title="Play Trailer"
              data-bs-toggle="modal"
              data-bs-target={"#" + movie.biDanh}
              onClick={() => {
                document
                  .getElementById(`${movie.biDanh}1`)
                  .setAttribute("src", `${result1}`);
              }}
            />
          </div>
          <Link
            to={`/detail/${movie.maPhim}`}
            data-toggle="tooltip"
            title={movie.tenPhim}
          >
            <h2>{movie.tenPhim}</h2>
          </Link>
          <span className="ageType mt-3 mb-0">C16</span>
          <p
            className="text-white mt-3 mb-3"
            style={{ fontSize: "14px", letterSpacing: "1px" }}
          >
            Ngày Khởi Chiếu:{" "}
            {new Date(movie.ngayKhoiChieu).toLocaleDateString()}
          </p>

          <span
            style={{ fontSize: "14px", letterSpacing: "1px" }}
            className="text-white"
          >
            <i className="fas fa-star"></i> {movie.danhGia}
          </span>

          <button className="button1">
            <Link to={`/detail/${movie.maPhim}`}>Detail</Link>
          </button>
        </div>
        {/* Trailer */}
        <div
          className="modal fade"
          id={movie.biDanh}
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          onClick={() => {
            document.getElementById(`${movie.biDanh}1`).setAttribute("src", "");
          }}
        >
          <div
            className="modal-dialog modal-dialog-centered justify-content-center"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-body">
                <i
                  className="fas fa-times-circle btn "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />

                <iframe
                  id={movie.biDanh + "1"}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
