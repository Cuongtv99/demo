import React from "react";
import "./ResultPage.css";
import { Line, Pie } from "react-chartjs-2";

const stateLine = {
  labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11 (Bài)"],
  datasets: [
    {
      label: "Point",
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [25, 60, 35, 100, 63, 30, 22, 85, 20, 60, 18, 16],
    },
  ],
};

const statePie = {
  labels: ["Mức 1", "Mức 2", "Mức 3", "Mức 4", "Mức 5"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
      hoverBackgroundColor: [
        "#501800",
        "#4B5000",
        "#175000",
        "#003350",
        "#35014F",
      ],
      data: [65, 59, 80, 81, 56],
    },
  ],
};

function ResultPage() {
  return (
    <>
      <section className="resultPage">
        <div className="chart_item chart1">
          <Line
            data={stateLine}
            options={{
              title: {
                display: true,
                text: "Tỉ lệ hoàn thành bài tập",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>
        <div className="chart_item chart2">
          <Pie
            data={statePie}
            options={{
              title: {
                display: true,
                text: "Mức độ thành thạo",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>
        <div className="chart_item chart__text">
          <div className="textcolor">
            <h2>Gợi ý bài luyện</h2>
            <p>Tiếng anh nâng cao</p>
            <p>Ngữ pháp cơ bản</p>
            <p>Luyện nghe thành thạo</p>
            <p>Phát âm cơ bản </p>
          </div>
        </div>
        <div className="chart_item chart__judge">
            <h2>Thống kê tự luyện</h2> <br />
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
      </section>
    </>
  );
}

export default ResultPage;
