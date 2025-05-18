import React, { useState } from "react";
import Workday from "./Condition/Workday";
import Weekend from "./Condition/Weekend";
const App = () => {
  const day = new Date().getDay();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(password);
    setName("");
    setPassword("");
  };
  return (
    <div>
      {day >= 1 && day <= 5 ? <Workday /> : <Weekend />}
      {/* <div className="flex bg-gray-200 h-[30px] mt-8 py-0 py- w-full  justify-between ">
        <Input 
          className="inline"
          reference={passwordRef}
          label={"Password"}
          type={visible ? "text" : "password"}
          name={"password"}
          Icon={BsKey}
          value={password}
          onChange={(e) => Setpassword(e.target.value)}
        />

        <span
          className="flex item-center p-5 cursor-pointer"
          onClick={(e) => {
            SetVisible(!visible);
          }}
        >
          {!visible ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
        </span>
      </div> */}
      <div>
        <fieldset className="mx-10 border border-black">
          <legend className="font-bold text-3xl">Form</legend>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-[400px] mx-auto"
          >
            <label className="m-4 text-xl font-bold" htmlFor="name">
              Name:
            </label>
            <input
              className="border border-gray-600"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="m-4 text-xl font-bold" htmlFor="password">
              Password:
            </label>
            <input
              className="border border-gray-600"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              disabled={!name && !password}
              className="border border-gray-700 mt-10 text-xl "
              type="submit"
            >
              Submit
            </button>
          </form>
        </fieldset>
      </div>
      {/* another code entirely */}

      {/* const App = () => {
  const [toggle, setToggle] = React.useState(false);
  const [petName, setPetName] = React.useState("fluffy");
  const handleToggle = (e) => { 
     setToggle(!toggle);
  }; 
   useEffect(() => {     document.title = toggle
      ? "Welcome To My Community"
      : "Using The UseEffect Hook";
  });
  const nameLooper = () => {
    if (petName === "fluffy") {
      setPetName("Gizza");
    } else if (petName === "Gizza") {
      setPetName("Braimo");
    } else if (petName === "Braimo") {
      setPetName("cat");
    } else {
      setPetName("no pet");
    }
  };

  return (
      {petName === "no pet" ? (
        <div className="bg-red-500">
          <h1 className="font-bold"> refresh for more pets</h1>
        </div>
      ) : (
        ""
      )} */}

      {/* <button
        onClick={handleToggle}
        className="mt-5 ml-5 border border-gray-500 bg-gray-300"
      >
        Toggle Message
      </button>
      <div>{toggle && "Welcome To My community"}</div> */}
      <h1>choose a pet {petName}</h1>
      <button onClick={nameLooper}>change pet </button>
    </div>
  );
};

export default App;
