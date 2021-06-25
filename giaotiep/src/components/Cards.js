import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these COURSES Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Name Courses 1"
              text1="Detail Courses"
              label="Courses 1"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Name Courses 2"
              text1="Detail Courses"
              label="Courses 2"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Name Courses 3"
              text1="Detail Courses"
              label="Courses 3"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Name Courses 4"
              text1="Detail Courses"
              label="Courses 4"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Name Courses 5"
              text1="Detail Courses"
              label="Courses 5"
              path="/sign-up"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Name Courses 6"
              text1="Detail Courses"
              label="Courses 6"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
