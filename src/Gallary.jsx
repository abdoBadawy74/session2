import React from "react";
import { useState, useEffect } from "react";
export default function Gallary() {
  let [count, setCount] = useState(0);
  let [name, setName] = useState("John Doe");

  useEffect(() => {
    console.log("Component Mounted");

    return () =>{
     console.log("Component Unmounted");   
    }
  }, []); // componentDidMount

  useEffect(() => {
    if (count === 0 ) return;
    console.log("Component Updated");
  }, [count, name]); // componentDidUpdate

  function changeCount() {
    setCount(Math.random());
  }

  function ChangeName() {
    setName("Abdo")
  }

  return (
    <div>
      <h1>Gallary</h1>

      <h3> Count : {count}</h3> 
      <h3> Name : {name}</h3> 

      <button className="btn btn-info" onClick={() => changeCount()}>
        Change
      </button>
      <button className="btn btn-info" onClick={() => ChangeName()}>
        Change Name
      </button>
    </div>
  );
}

// useEffet
