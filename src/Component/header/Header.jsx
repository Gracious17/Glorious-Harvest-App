import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl tracking-widest uppercase bg-amber-600">
        {props.heading}
      </h1>
    </div>
  );
};

export default Header;
