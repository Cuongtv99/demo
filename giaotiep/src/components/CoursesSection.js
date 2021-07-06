import React from "react";
import "../App.css";
import { Button } from "./Button";
import { Chat } from "react-chat-popup";
import "./CoursesSection.css";

function CoursesSection() {
  return (
    <div className="courses-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>WELCOME TO WEBSITE</h1>
      <p>What are you waiting for?</p>
      <div className="courses-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH DEMO <i className="far fa-play-circle" />
        </Button>
      </div>
      <Chat />
    </div>
  );
}

export default CoursesSection;
