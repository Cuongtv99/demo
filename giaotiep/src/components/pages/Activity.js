import React from "react";
import { Link } from "react-router-dom";
import ActivityPage from "../ActivityPage";

function Activity() {
  return (
    <div>
      <h1
        className="activity"
        style={{ textAlign: "inherit", border: "1px solid black" }}
      >
        <Link to="/record">
          <i className="fa fa-arrow-left" style={{ marginRight: "40px" }}></i>
        </Link>
        Hoạt động
      </h1>
      <div>
        <ActivityPage />
      </div>
    </div>
  );
}

export default Activity;
