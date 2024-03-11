"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [value, setValue] = useState([]);
  useEffect(() => {
    const data = axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(function (response) {
        setValue(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);

  useEffect(() => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos:", {
        id: "",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return (
    <>
      <div className="flex justify-center">
        <div className="container">
          <div className="grid grid-cols-4 gap-8">
            {value.map((elem) => {
              return (
                <div>
                  <h6>id: {elem.id}</h6>
                  <h6>title: {elem.title}</h6>
                  <h6>task: {elem.completed ? "Completed" : "Uncompleted"}</h6>
                  <button className="p-1 mt-2 bg-blue-500">
                    Update States
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}