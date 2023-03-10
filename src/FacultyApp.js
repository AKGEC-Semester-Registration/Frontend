import "./App.css";

import React, { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkFacultyToken = () => {
    const facultyToken = localStorage.getItem("facultyToken");
    if (!facultyToken || facultyToken === "undefined") {
      setIsLoggedIn(false);
    }
    setIsLoggedIn(true);
  };
  useEffect(() => {
    checkFacultyToken();
  }, [isLoggedIn]);

  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
}
export default App;
