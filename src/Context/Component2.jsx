import React, { useContext } from "react";
import { MyContext } from "../ContextApi/MyContext";

const Component2 = () => {
  const { user, setUser } = useContext(MyContext);
  return (
    <div>
      <h1>{user} Component2</h1>
      <button onClick={() => setUser("john")}>click me</button>
    </div>
  );
};

export default Component2;
