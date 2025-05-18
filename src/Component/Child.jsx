import React from "react";

const Child = (props) => {
  return (
    <div className="mt-4 bg-red-400 sm:ml-10  rounded-b-2xl  rounded-r-3xl z-10">
      <div className="hover:bg-blue-400 hover:shadow-2xl hover:p-10 sm:z-10 sm:hover:text-right sm:relative md:hover:z-10">
        <h1 className="text-2xl font-bold ">{props.person}</h1>
        <h1 className="text-2xl font-bold"> is {props.age}</h1>
      </div>
    </div>
  );
};

export default Child;
