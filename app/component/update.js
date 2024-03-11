"use client";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import React, { useEffect, useState } from "react";

function Update({ id, title, userId, task }) {
  const [user, setUser] = useState(id);
  const update = () => {
    axios
      .post(`https://jsonplaceholder.typicode.com/todos:${id}`, {
        user,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(user);
      });
  };
  return (
    <div>
      <Formik
        initialValues={{ id: id, userId: userId, title: "", completed: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          setUser(values);
          update();
        }}
      >
        <Form>
          <Field name="name" type="text" />
          <Field name="checkbox" type="checkbox" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Update;
