import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Api from "../../Api";
import "./FacultyPopup.css";

const FacultyPopup = () => {
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
  return (
    <div>
      <div className="head">Faculty Options</div>
      <mat-list>
        <mat-list-item>
          <button color="primary">
            <Link to="/facultypage/update-faculty">Update Faculty</Link>
          </button>
        </mat-list-item>
        <mat-list-item>
          <button color="primary">
            <Link to="/facultypage/update-password" style={{ color: "white" }}>
              Update Password
            </Link>
          </button>
        </mat-list-item>
        <mat-list-item>
          <button onClick={facultyLogout} color="primary">
            LogOut
          </button>
        </mat-list-item>
      </mat-list>

      <div style={{ marginTop: "10px" }}>
        <button
          style={{
            backgroundColor: "#d9534f",
            width: "fit-content",
            margin: "auto",
            color: "white",
            marginBottom: "10px",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FacultyPopup;
