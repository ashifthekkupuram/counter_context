import { useContext } from "react";

import { CounterContext } from "../contexts/counterContext";

const Button = ({ type }) => {
  const { increment, decrement } = useContext(CounterContext);

  return (
    <button
      className="button"
      onClick={() => {
        if (type === "plus") {
          increment();
        } else {
          decrement();
        }
      }}
    >
      {type === "plus" ? "+" : "-"}
    </button>
  );
};

export default Button;
