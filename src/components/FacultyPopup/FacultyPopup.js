import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Api from "../../Api";
import "./FacultyPopup.css";

import { Link, useNavigate } from "react-router-dom";

import Api from "../../Api";
import { Button } from "@mui/material";
import axios from "axios";

const FacultyPopup = (props) => {
  const navigate = useNavigate();
  const facultyLogout = async () => {
    const res = await axios.get(Api.logoutfacultyUrl).catch((err) => {
      console.log(err);
    });
    if (res) {
      console.log("logout successful");
      localStorage.removeItem("facultyToken");
      navigate("home");
    }
  };

  const handleClose = () => {
    props.onSuccessfulClose(true);
  };
  return (
    <div className="container">
      <div className="head">Faculty Options</div>
      <Button variant="contained" className="fp__btn">
        <Link to="/facultypage/update-faculty">Update Faculty</Link>
      </Button>
      <Button variant="contained" className="fp__btn">
        <Link to="/facultypage/update-password">Update Password</Link>
      </Button>
      <Button variant="contained" onClick={facultyLogout} className="fp__btn">
        LogOut
      </Button>
      <Button variant="contained" onClick={handleClose} className="fp__btn1">
        Close
      </Button>
    </div>
  );
};

export default FacultyPopup;
