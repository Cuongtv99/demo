import React from "react";

function ProgessItem() {
  return (
    <>
      <div className="progress">
        <div
          className="progress-bar bg-info"
          role="progressbar"
          style={{ width: "50%" }}
          aria-valuenow={50}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </>
  );
}

export default ProgessItem;
