import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const StudentProtectedRoute = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkStudentToken = () => {
    const studentToken = localStorage.getItem("studentToken");
    if (!studentToken || studentToken === "undefined") {
      setIsLoggedIn(false);
      return navigate("/student");
    }
    setIsLoggedIn(true);
  };
  useEffect(() => {
    checkStudentToken();
  }, [isLoggedIn]);
  return <React.Fragment>{isLoggedIn ? props.children : null}</React.Fragment>;
};
export default StudentProtectedRoute;
