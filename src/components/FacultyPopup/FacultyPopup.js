import "./FacultyPopup.css";

import { Link, useNavigate } from "react-router-dom";

import Api from "../../Api";
import { Button } from "@mui/material";
import axios from "axios";

const FacultyPopup = (props) => {
  // const navigate = useNavigate();
  // const facultyLogout = async () => {
  //   const res = await axios.get(Api.logoutfacultyUrl).catch((err) => {
  //     console.log(err);
  //   });
  //   if (res) {
  //     console.log("logout successful");
  //     localStorage.removeItem("facultyToken");
  //     navigate("home");
  //   }
  // };

  const handleClose = () => {
    props.onSuccessfulClose(true);
  };
  return (
    <div className="container">
      <div className="head head__fp">Faculty Options</div>
      <div className="div2__fp">
        <Button variant="contained" className="fp__btn button__fp">
          <Link to="/facultypage/update-faculty" className="a__fp">
            Update Faculty
          </Link>
        </Button>
        <Button variant="contained" className="fp__btn button__fp">
          <Link to="/facultypage/update-password" className="a__fp">
            Update Password
          </Link>
        </Button>
        <Button
          variant="contained"
          // onClick={facultyLogout}
          className="fp__btn button__fp"
        >
          <Link to="/facultypage/logout" className="a__fp">
            LogOut
          </Link>
        </Button>
        <Button
          variant="contained"
          onClick={handleClose}
          className="fp__btn1 button__fp"
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default FacultyPopup;
