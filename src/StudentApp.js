import "./App.css";

import React, { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkStudentToken = () => {
    const studentToken = localStorage.getItem("studentToken");
    if (!studentToken || studentToken === "undefined") {
      setIsLoggedIn(false);
    }
    setIsLoggedIn(true);
  };
  useEffect(() => {
    checkStudentToken();
  }, [isLoggedIn]);

  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
}
export default App;
