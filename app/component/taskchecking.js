"use client";
import React, { useEffect, useState } from "react";

function Taskchecking({ value, setValue }) {
  const [check, setCheck] = useState(true);
  const updater = () => {
    const update = value.filter((elem) => {
      return true === elem.completed;
    });
    console.log();
    setValue(update);
  };
  return (
    <div>
      <button
        onClick={() => {
          setCheck(true);
          updater();
        }}
        className="border-2 border-black mr-5 p-2"
      >
        Complited task
      </button>
      <button
        onClick={() => {
          setCheck(false);
          updater();
        }}
        className="border-2 border-black p-2"
      >
        Uncomplited task
      </button>
    </div>
  );
}

export default Taskchecking;
