import React from "react";

function Update({ id, title, userId, task }) {
  useEffect(() => {
    axios
      .post(`https://jsonplaceholder.typicode.com/todos:${userId}`, {
        id: id,
        title: title,
        userId: userId,
        completed: task,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  return <div></div>;
}

export default Update;
