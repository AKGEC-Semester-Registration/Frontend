import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const FacultyProtectedRoute = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkFacultyToken = () => {
    const facultyToken = localStorage.getItem("facultyToken");
    if (!facultyToken || facultyToken === "undefined") {
      setIsLoggedIn(false);
      return navigate("/faculty");
    }
    setIsLoggedIn(true);
  };
  useEffect(() => {
    checkFacultyToken();
  }, [isLoggedIn]);
  return <React.Fragment>{isLoggedIn ? props.children : null}</React.Fragment>;
};
export default FacultyProtectedRoute;
