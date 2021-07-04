import React from "react";
import "./CoursesPage.css";

function CoursesPage() {
  return (
    <div>
      <form className="d-flex align-items-center search_tool">
        <input
          className="form-control search_item me-2"
          type="search"
          placeholder="Tìm kiếm ..."
          aria-label="Search"
        />
        <i className="fa fa-search"></i>
      </form>
      <div className="courses__container">
        <div className="courses__item1">
          <div className="courses__content1">
            <img
              classname="courses__img"
              src={"./images/img-2.jpg"}
              style={{ width: "873px", height: "400px" }}
              alt="Courses"
            />
            <div>
              <h3>Toán căn bản lớp 12</h3>
              <div className="text_courses">
                <p>Thầy: Trần Đình Thiện</p>
                <p>Ngày tạo: 1/6/2020</p>
              </div>
            </div>
          </div>
          <div className="courses__comment">
            <h1>Thảo luận</h1>
            <div className="comment">
              <div className="comment1">
                <img
                  classname="courses__comment"
                  src={"./images/img-2.jpg"}
                  style={{
                    width: 50,
                    height: 60,
                    borderRadius: 20,
                    marginRight: 10,
                  }}
                  alt="Courses"
                />
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: 100, width: 600, borderRadius: 10 }}
                  />
                </div>
                <div>
                  <button>Gửi</button>
                </div>
              </div>
              <div className="comment2">
                <img
                  classname="courses__comment"
                  src={"./images/img-2.jpg"}
                  style={{
                    width: 50,
                    height: 60,
                    borderRadius: 20,
                    marginRight: 10,
                  }}
                  alt="Courses"
                />
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: 100, width: 600, borderRadius: 10 }}
                  />
                  <label for="floatingTextarea2">
                    Trần Thị B : 2 giờ trước <br /> Bài học hay quá
                  </label>
                </div>
              </div>
              <div className="commet_demo">
                <div className="comment3">
                  <img
                    classname="courses__comment"
                    src={"./images/img-2.jpg"}
                    style={{
                      width: 50,
                      height: 60,
                      borderRadius: 20,
                      marginRight: 10,
                    }}
                    alt="Courses"
                  />
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style={{ height: 100, width: 600, borderRadius: 10 }}
                    />
                    <label for="floatingTextarea2">
                      Trần Thị B : 2 giờ trước <br /> Bài học hay quá
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="courses__item2">
          <h1>Khoá học gợi ý</h1>
          <div className="courses__recom">
            <img
              classname="courses__img"
              src={"./images/img-6.jpg"}
              alt="Courses"
              style={{ width: "100px", height: "130px", marginLeft: 20 }}
            />
            <div className="text">
              <p>Ôn tập căn bản toán 12</p>
              <p>Thầy: Trần Đình Thiện</p>
              <p>Ngày tạo: 1/6/2020</p>
            </div>
          </div>
          <div className="courses__recom">
            <img
              classname="courses__img"
              src={"./images/img-6.jpg"}
              alt="Courses"
              style={{ width: "100px", height: "130px", marginLeft: 20 }}
            />
            <div className="text">
              <p>Ôn tập căn bản toán 12</p>
              <p>Thầy: Trần Đình Thiện</p>
              <p>Ngày tạo: 1/6/2020</p>
            </div>
          </div>
          <div className="courses__recom">
            <img
              classname="courses__img"
              src={"./images/img-6.jpg"}
              alt="Courses"
              style={{ width: "100px", height: "130px", marginLeft: 20 }}
            />
            <div className="text">
              <p>Ôn tập căn bản toán 12</p>
              <p>Thầy: Trần Đình Thiện</p>
              <p>Ngày tạo: 1/6/2020</p>
            </div>
          </div>
          <div className="courses__recom">
            <img
              classname="courses__img"
              src={"./images/img-6.jpg"}
              alt="Courses"
              style={{ width: "100px", height: "130px", marginLeft: 20 }}
            />
            <div className="text">
              <p>Ôn tập căn bản toán 12</p>
              <p>Thầy: Trần Đình Thiện</p>
              <p>Ngày tạo: 1/6/2020</p>
            </div>
          </div>
          <div className="courses__recom">
            <img
              classname="courses__img"
              src={"./images/img-6.jpg"}
              alt="Courses"
              style={{ width: "100px", height: "130px", marginLeft: 20 }}
            />
            <div className="text">
              <p>Ôn tập căn bản toán 12</p>
              <p>Thầy: Trần Đình Thiện</p>
              <p>Ngày tạo: 1/6/2020</p>
            </div>
          </div>
          <div className="courses__recom">
            <img
              classname="courses__img"
              src={"./images/img-6.jpg"}
              alt="Courses"
              style={{ width: "100px", height: "130px", marginLeft: 20 }}
            />
            <div className="text">
              <p>Ôn tập căn bản toán 12</p>
              <p>Thầy: Trần Đình Thiện</p>
              <p>Ngày tạo: 1/6/2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
