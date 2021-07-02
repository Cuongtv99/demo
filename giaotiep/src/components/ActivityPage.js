import React from "react";
import "./ActivityPage.css";

function ActivityPage() {
  return (
    <div className="activity_container">
      <div className="activity_test">
        <div className="activity_test_item test__item1">
          <div className="content">
            <h3>Exam: 100 câu ( Trung Bình - Khá )</h3>
            <p className="test_content">
              <p>
                <i className="fa fa-crosshairs"></i>100 <br />% chính xác
              </p>
              <p>
                <i className="fa fa-crosshairs"></i>100 <br />% chính xác
              </p>
              <p>
                <i className="fa fa-crosshairs"></i>100 <br />% chính xác
              </p>
              <p>
                <i className="fa fa-crosshairs"></i>100 <br />% chính xác
              </p>
            </p>
          </div>
          <div className="content">
            <h3>Kiểm tra toán: 100 câu ( Trung Bình - Khá )</h3>
            <p className="test_content">
              <p>
                <i className="fa fa-crosshairs"></i>100 <br />% chính xác
              </p>
              <p>
                <i className="fa fa-crosshairs"></i>100 <br />% chính xác
              </p>
              <p>
                <i className="fa fa-crosshairs"></i>100 <br />% chính xác
              </p>
              <p>
                <i className="fa fa-crosshairs"></i>100 <br />% chính xác
              </p>
            </p>
          </div>
          <div className="content">
            <h3>Kiểm tra hoá: 100 câu ( Trung Bình - Khá )</h3>
            <p className="test_content">
              <p>
                <i className="fa fa-crosshairs"></i>100 <br />% chính xác
              </p>
              <p>
                <i className="fa fa-crosshairs"></i>100 <br />% chính xác
              </p>
              <p>
                <i className="fa fa-crosshairs"></i>100 <br />% chính xác
              </p>
              <p>
                <i className="fa fa-crosshairs"></i>100 <br />% chính xác
              </p>
            </p>
          </div>
          <div className="content">
            <h3>Kiểm tra lý: 100 câu ( Trung Bình - Khá )</h3>
            <p className="test_content">
              <p>
                <i className="fa fa-crosshairs"></i>100 <br />% chính xác
              </p>
              <p>
                <i className="fa fa-crosshairs"></i>100 <br />% chính xác
              </p>
              <p>
                <i className="fa fa-crosshairs"></i>100 <br />% chính xác
              </p>
              <p>
                <i className="fa fa-crosshairs"></i>100 <br />% chính xác
              </p>
            </p>
          </div>
          <div className="content">
            <h3>Tự luyện: 100 câu ( Trung Bình - Khá )</h3>
            <p className="test_content">
              <p>
                <i className="fa fa-crosshairs"></i>100 <br />% chính xác
              </p>
              <p>
                <i className="fa fa-crosshairs"></i>100 <br />% chính xác
              </p>
              <p>
                <i className="fa fa-crosshairs"></i>100 <br />% chính xác
              </p>
              <p>
                <i className="fa fa-crosshairs"></i>100 <br />% chính xác
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className="activity_list">
        <div className="activity_list_item list__item1">
          <div className="item__content">
            <h4>Thống kê tự luyện</h4> <br />
            <div>
              <p>
                <i className="fa fa-crosshairs"></i> 100 <br />% chính xác
              </p>
            </div>
            <div>
              <p>
                <i className="fa fa-stopwatch"></i> 8 giờ 30 phút <br />
                làm bài
              </p>
            </div>
            <div>
              <p>
                <i className="fa fa-tachometer-alt"></i>3 câu/ phút <br />
                tốc độ
              </p>
            </div>
            <div>
              <p>
                <i className="fa fa-tasks"></i>1000 câu <br />
                đã làm
              </p>
            </div>
          </div>
        </div>
        <div className="activity_list_item list__item2">
          <div>
            <h4>Lộ trình học hiệu quả</h4>
            <p>Vững nền tảng, chắc cơ bản</p>
            <p>Tổng ôn</p>
            <p>Kiểm tra thi thử</p>
            <p>Rà soát, bổ sung</p>
          </div>
        </div>
        <div className="activity_list_item list__item3">
          <h4>Gợi ý hoạt động tiếp theo</h4>
          <p>Tiếng anh nâng cao</p>
          <p>Ngữ pháp cơ bản</p>
          <p>Luyện nghe thành thạo</p>
          <p>Phát âm cơ bản </p>
        </div>
      </div>
    </div>
  );
}

export default ActivityPage;
