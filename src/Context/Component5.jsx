import React, { useContext } from "react";
import { MyContext } from "../ContextApi/MyContext";

const Component5 = () => {
  const { obj, updatedObj } = useContext(MyContext);
  return (
    <>
      <div>{obj.name}Component5</div>;<div>{obj.career}Component5</div>;
    </>
  );
};

export default Component5;
