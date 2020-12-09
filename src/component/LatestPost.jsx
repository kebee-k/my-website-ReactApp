import React, { Fragment, useEffect, useState } from "react";

const LatestPost = () => {
  const [appStates, setAppState] = useState([]);
  const getList = async () => {
    try {
      const response = await fetch("http://localhost:5000/get", {
        method: "GET",
      });
      const data = await response.json();
      setAppState(data);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <Fragment>
      <h1>latest News </h1>
      {appStates.map((appState) => (
        <p key={appState.description}>{appState.description}</p>
      ))}
    </Fragment>
  );
};
export default LatestPost;
