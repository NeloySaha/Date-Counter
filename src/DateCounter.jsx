import { useState } from "react";

export const DateCounter = () => {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);

  const dateObj = new Date();
  dateObj.setDate(dateObj.getDate() + count);

  const countPlus = () => setCount((prev) => prev + steps);
  const countMinus = () => setCount((prev) => prev - steps);

  return (
    <>
      <h1>Date Counter</h1>
      <div className="count-container">
        <p>Steps</p>
        <input
          className=".range"
          type="range"
          min="0"
          max="10"
          step="1"
          value={steps}
          onChange={(e) => {
            setSteps(+e.target.value);
          }}
        />

        <p> {steps}</p>
      </div>

      <div className="count-container">
        <button onClick={countMinus}>&minus;</button>
        {/* <p>Count: {count}</p> */}
        <input
          className="input"
          type="number"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
        <button onClick={countPlus}>&#43;</button>
      </div>

      <p>
        {count !== 0 &&
          `${Math.abs(count)} days 
          ${count > 0 ? "from" : "ago"}`}{" "}
        <span>Today is {dateObj.toDateString()}</span>
      </p>

      {(count !== 0 || steps !== 1) && (
        <button
          className="reset-btn"
          onClick={() => {
            setCount(0);
            setSteps(1);
          }}
        >
          Reset
        </button>
      )}
    </>
  );
};
