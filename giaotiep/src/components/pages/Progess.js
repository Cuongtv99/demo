import React from "react";
import { Link } from "react-router-dom";

function Progess() {
  return (
    <div>
      <h1
        className="result"
        style={{ textAlign: "inherit", border: "1px solid black" }}
      >
        <Link to="/record">
          <i className="fa fa-arrow-left" style={{ marginRight: "40px" }}></i>
        </Link>
        Tiến độ học tập
      </h1>
      <div className="dropdown ms-3 mb-3">
        <button
          className="btn btn-white dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Môn học : Anh văn lớp 12
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <Link className="dropdown-item" to="/progess">
              Toán lớp 12
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/progess">
              Toán ôn tập
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/progess">
              Hóa lớp 12
            </Link>
          </li>
        </ul>
      </div>
      <form
        className="row g-3"
        style={{ padding: "80px 80px", background: "#FF000026" }}
      >
        <div className="col-12">
          <i className="progess-icon fa fa-book"></i>
          <label for="inputEmail4" className="form-label">
            Hoàn thành 50% nội dung khoá học
          </label>

          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow={50}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
        <div className="col-md-6">
          <i className="fa fa-crosshairs"></i>
          <label htmlFor="inputCity" className="form-label">
            % chính xác <br />
            100
          </label>
        </div>
        <div className="col-md-4">
          <i className="fa fa-question"></i>
          <label htmlFor="inputState" className="form-label">
            Đã làm <br />
            12 câu
          </label>
        </div>
        <div className="col-md-6">
          <i className="fa fa-tachometer-alt"></i>
          <label htmlFor="inputCity" className="form-label">
            Tốc độ <br /> 3 câu/ phút
          </label>
        </div>
        <div className="col-md-4">
          <i className="fab fa-font-awesome-flag"></i>
          <label htmlFor="inputState" className="form-label">
            Hoàn thành
            <br />0 bài
          </label>
        </div>
      </form>
    </div>
  );
}

export default Progess;
