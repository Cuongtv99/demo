import React from "react";
import { Link } from "react-router-dom";
import ResultPage from "../ResultPage";

function Result() {
  return (
    <div>
      <h1
        className="result"
        style={{ textAlign: "inherit", border: "1px solid black" }}
      >
        <Link to="/record">
          <i className="fa fa-arrow-left" style={{ marginRight: "40px" }}></i>
        </Link>
        Kết quả học tập
      </h1>
      <div className="dropdown ms-3">
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
      <div>
        <ResultPage />
      </div>
    </div>
  );
}

export default Result;
