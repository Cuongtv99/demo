import React from "react";
import "./Schedule.css";
import ScheduleItem from "./ScheduleItem";

function Schedule() {
  return (
    <div className="cards">
      <h1>Những khóa học khác</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <ScheduleItem
              src="images/img-9.jpg"
              text="Ôn tập mọi dạng bài toán"
              text1="Thầy: Nguyễn Hoàng Triều"
              label="Basic"
              path="/courses"
            />
            <ScheduleItem
              src="images/img-2.jpg"
              text="Ôn tập mọi dạng bài toán"
              text1="Thầy: Nguyễn Hoàng Triều"
              label="Basic"
              path="/courses"
            />
          </ul>
          <ul className="cards__items">
            <ScheduleItem
              src="images/img-4.jpg"
              text="Ôn tập mọi dạng bài toán"
              text1="Thầy: Nguyễn Hoàng Triều"
              label="Basic"
              path="/courses"
            />
            <ScheduleItem
              src="images/img-8.jpg"
              text="Ôn tập mọi dạng bài toán"
              text1="Thầy: Nguyễn Hoàng Triều"
              label="Basic"
              path="/courses"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
