import React, { useEffect, useState } from "react";

const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (url.includes("deserts")) {
      setData(["cake", "ice", "pie", "brownic"]);
    } else {
      setData(["water", "soda", "juice"]);
    }
  }, []);
  return render(data);
};
const DesertCount = () => {
  return (
    <DataFetcher
      url="http://littlelemon/deserts"
      render={(data) => <p>{data.length} deserts</p>}
    />
  );
};
const DrinksCount = () => {
  return (
    <DataFetcher
      url="http://littlelemon/drinks"
      render={(data) => <p>{data.length} drinks</p>}
    />
  );
};
const Fibonacci = () => {
  return (
    <div>
      <DesertCount />
      <DrinksCount />
    </div>
  );
};

export default Fibonacci;
