"use client";
import React, { useEffect, useState } from "react";

function Filterbox({ value, setValue }) {
  const [check, setCheck] = useState("");
  useEffect(() => {
    const update = value.filter((elem) => {
      return check === elem.title;
    });
    setValue(update);
  }, [check]);
  return (
    <div>
      <input
        onChange={(e) => {
          setCheck(e.target.value);
        }}
        className="w-full p-2 border-2 border-blue-100"
        placeholder="Filter The Value"
      />
    </div>
  );
}

export default Filterbox;
