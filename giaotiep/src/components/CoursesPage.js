import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import "./CoursesPage.css";
import {
  Row,
  Container,
  Col,
  Card,
  Button,
  Image,
  FormGroup,
  Form,
} from "react-bootstrap";
import { Player, BigPlayButton, LoadingSpinner } from "video-react";

function CoursesPage() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [courses, setCourses] = useState(["", "", "", "", "", "", "", ""]);

  //handle comment
  function onChangeComment(e) {
    setComment(e.target.value);
  }

  function sendComment(e) {
    e.preventDefault();
    if (!comment) return;
    const newComments = [
      {
        id: comments.length + 1,
        name: "Trần Thị B",
        content: `${comment}`,
      },
      ...comments,
    ];

    setComments(newComments);

    console.log(comments);

    //reset
    setComment("");
  }

  function clearText() {
    setComment("");
  }

  //render comments
  function renderComment() {
    return comments.map((comment, id) => {
      return (
        <Row className="mt-3" key={comment.id}>
          <Col md={1} sm={1} lg={1}>
            <Image
              src={"./images/img-2.jpg"}
              roundedCircle
              style={{
                width: 50,
                height: 60,
              }}
            />
          </Col>
          <Col>
            <div>
              <span style={{ fontWeight: "bold" }}>{comment.name}</span>
              <span style={{ fontWeight: "lighter", fontSize: 14 }}>
                {" "}
                ● 04/05/2020
              </span>
            </div>
            <div>{comment.content}</div>
          </Col>
        </Row>
      );
    });
  }

  //render other courses
  function renderCourses() {
    return courses.map((course, id) => {
      return (
        <div
          key={id}
          style={{ display: "flex", cursor: "pointer" }}
          className="mb-3 mt-2"
        >
          <Image
            src={"./images/img-2.jpg"}
            style={{ width: "50%", height: "100px" }}
          />
          <div style={{ marginLeft: 5 }}>
            <h4 style={{ fontWeight: "bold" }}>Ôn tập cơ bản</h4>
            <p style={{ fontWeight: "lighter" }}>
              Thầy: Trần Đình Thiện ● 06/07/2020
            </p>
          </div>
        </div>
      );
    });
  }

  return (
    <Container>
      <br />
      <Row>
        <Col md={8} sm={12} xs={8}>
          <Row>
            <Row>
              <Player
                poster="https://theedge.vn/wp-content/uploads/2020/11/sat-math.jpg"
                src={"./videos/Cat.mp4"}
                src="https://www.w3schools.com/html/mov_bbb.mp4"
              >
                <LoadingSpinner />
                <BigPlayButton position="center" />
              </Player>
            </Row>
            <div>
              <br />
            </div>
            <Row>
              <Col md={9} sm={9} lg={9}>
                <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  Toán căn bản lớp 12
                </Card.Title>
                <Card.Text>Thầy: Trần Đình Thiện</Card.Text>
                <Card.Text>Ngày tạo: 1/6/2020</Card.Text>
              </Col>
              <Col md={3} sm={3} lg={3}>
                <Row>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      value={4}
                      size={32}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star" />}
                      halfIcon={<i className="fa fa-star-half-alt" />}
                      fullIcon={<i className="fa fa-star" />}
                      activeColor="#ffd700"
                      active
                    />
                    <span style={{ fontSize: 14 }}>
                      Có 7 triệu người đánh giá
                    </span>
                  </div>
                </Row>
              </Col>
            </Row>
          </Row>
          <hr />
          <Row>
            <Row>
              <Col md={1} sm={1} lg={1}>
                <Image
                  src={"./images/img-2.jpg"}
                  roundedCircle
                  style={{
                    width: 50,
                    height: 60,
                  }}
                />
              </Col>
              <Col>
                <form>
                  <label htmlFor="fComment" style={{ fontWeight: "bold" }}>
                    Trần Thị B
                  </label>
                  <input
                    className="form__field"
                    id="fComment"
                    type="text"
                    placeholder="Phần bình luận ..."
                    value={comment}
                    onChange={onChangeComment}
                  />
                  <div
                    style={{ display: "flex", justifyContent: "flex-end" }}
                    className="mt-2"
                  >
                    <Button
                      type="reset"
                      style={{ marginRight: "10px" }}
                      variant="flat"
                      onClick={clearText}
                    >
                      Huỷ{" "}
                    </Button>
                    <Button type="submit" onClick={sendComment}>
                      Gửi
                    </Button>
                  </div>
                </form>
              </Col>
            </Row>
            <h5 className="mt-5">{comments.length} : Bình luận</h5>
            {renderComment()}
          </Row>
        </Col>
        <Col md={4} xs={4}>
          {renderCourses()}
        </Col>
      </Row>
    </Container>
  );
}

export default CoursesPage;
