import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("5 August 2023");
  date.setDate(date.getDate() + count);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <div style={{ display: "flex" }}>
          <button
            style={{ width: "30px", height: "30px" }}
            onClick={() => setStep((c) => c - 1)}
          >
            {" "}
            -{" "}
          </button>
          <span style={{ padding: " 5px" }}> Step is {step} </span>
          <button
            style={{ width: "30px", height: "30px" }}
            onClick={() => setStep((c) => c + 1)}
          >
            {" "}
            +{" "}
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <button
            style={{ width: "30px", height: "30px" }}
            onClick={() => setCount((c) => c - step)}
          >
            -
          </button>
          <span style={{ padding: " 5px" }}> Count is: {count}</span>
          <button
            style={{ width: "30px", height: "30px" }}
            onClick={() => setCount((c) => c + step)}
          >
            +
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>
          <span>
            {count === 0
              ? "today is"
              : count > 0
              ? `${count} days form todays is `
              : `${count} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </>
  );
}
