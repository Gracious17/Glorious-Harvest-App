import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "buy_ingredients") return { money: state.money - 10 };
  if (action.type === "sell_a_meal") return { money: state.money + 10 };
  if (action.type === "celebrity_visit") return { money: state.money + 500 };
};
const App = () => {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({ type: "buy_ingredients" })}>
          shopping for veggies
        </button>
        <br />
        <button onClick={() => dispatch({ type: "sell_a_meal" })}>
          sell a meal
        </button>
        <button onClick={() => dispatch({ type: "celebrity_visit" })}>
          {" "}
          celebrity visit
        </button>
      </div>
    </div>
  );
};

export default App;
