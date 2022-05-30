import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterReducer";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);

  return (
    <div className="App">
      <h1>Redux Counter</h1>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>increment +1</button>
      <button onClick={() => dispatch(decrement())}>decrement -1</button>
    </div>
  );
}
