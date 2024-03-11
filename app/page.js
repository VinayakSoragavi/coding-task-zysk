"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Update from "./component/update";
import Filterbox from "./component/filterbox";
import Taskchecking from "./component/taskchecking";

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

  return (
    <>
      <div className="flex justify-center">
        <div className="container">
          <div className="py-10">
            <Filterbox setValue={setValue} value={value} />
          </div>
          <div className="py-10">
            <Taskchecking setValue={setValue} value={value} />
          </div>
          <div className="grid grid-cols-4 gap-8">
            {value.length == 0 ? (
              <h1 className="text-3xl">No data is found</h1>
            ) : (
              value.map((elem) => {
                return (
                  <div>
                    <h6>id: {elem.id}</h6>
                    <h6>title: {elem.title}</h6>
                    <h6>
                      task: {elem.completed ? "Completed" : "Uncompleted"}
                    </h6>
                    <Update
                      id={elem.id}
                      title={elem.title}
                      task={elem.completed}
                      userId={elem.userId}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}
