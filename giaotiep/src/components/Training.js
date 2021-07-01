import React from "react";
import "./Training.css";

import TrainingItem from "./TrainingItem";

function Training() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <TrainingItem
              src="images/img-9.jpg"
              text="Kết quả học tập:"
              text1="Kết quả học tập của học viên 
              trong quá trình làm bài tự luyện 
              hoặc kiểm tra,..."
              //   label="Basic"
              path="/result"
            />
            <TrainingItem
              src="images/img-2.jpg"
              text="Hoạt động"
              text1="Tổng hợp kết quả qua các bài kiểm tra hoặc tự luyện ,..."
              //   label="Basic"
              path="/test"
            />
          </ul>
          <ul className="cards__items">
            <TrainingItem
              src="images/img-4.jpg"
              text="Tiến độ:"
              text1="Thống kê tiến độ trong quá trình học "
              label="Basic"
              path="progess"
            />
            <TrainingItem
              src="images/img-8.jpg"
              text="Dự đoán kết quả"
              text1="Dự đoán điểm thi trong tương lai dựa vào kết quả học tập"
              //   label="Basic"
              path="/test"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Training;
