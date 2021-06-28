import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Khóa học đề xuất</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Ôn tập căn bản toán 12"
              text1="Thầy: Trần Đình Thiện"
              label="Basic"
              path="/courses"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Ôn tập căn bản hóa 12"
              text1="Thầy: Trần Văn Cường"
              label="Basic"
              path="/courses"
            />
            <CardItem
              src="images/img-3.jpg"
              text="Ôn tập căn bản anh văn 12"
              text1="Thầy: Phan Thanh Hoàng"
              label="Basic"
              path="/courses"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-4.jpg"
              text="Ôn tập căn bản hóa 12"
              text1="Thầy: Trần Văn Cường"
              label="Basic"
              path="/courses"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ôn tập căn bản toán 12"
              text1="Thầy: Trần Đình Thiện"
              label="Basic"
              path="/courses"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ôn tập căn bản anh văn 12"
              text1="Thầy: Phan Thanh Hoàng"
              label="Basic"
              path="/courses"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
