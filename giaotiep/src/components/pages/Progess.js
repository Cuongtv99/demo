import React from "react";
import { Link } from "react-router-dom";
import ProgessItem from "../ProgessItem";

function Progess() {
  return (
    <div>
      <h1 className="progess">Tiến độ học tập</h1>
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
      <ProgessItem />
    </div>
  );
}

export default Progess;
