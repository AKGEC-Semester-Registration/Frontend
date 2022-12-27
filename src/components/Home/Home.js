import "./Home.css";

import { Link } from "react-router-dom";
import akg_logo from "../../assets/akg logo.png";
import boy_image from "../../assets/boy.svg";
import brl_logo from "../../assets/brllogo.png";

const Home = () => {
  return (
    <div>
      <div>
        <img
          src={akg_logo}
          height="130em"
          width="130em"
          className="akg-logo"
          alt=""
        />
        <h1>New Semester Registration</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="column side">
            <img
              src={boy_image}
              style={{ width: "auto", height: "65vh" }}
              alt=""
            />
          </div>

          <div className="column middle">
            <br />
            <br />
            <br />
            <div className="card card1">
              <h2>Login As</h2>
              <br />
              <br />
              <div className="row mx-4">
                <div className="col-md-6">
                  <Link to="/student">
                    <button className="btn btn-lg bg-danger shadow-hover mb-2 py-3">
                      <h2>Student</h2>
                    </button>
                  </Link>
                </div>
                <div className="col-md-6">
                  <Link to="/faculty">
                    <button className="btn btn-group-lg bg-danger shadow-hover py-3 mb-2">
                      <h2>Faculty</h2>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <h4 style={{ marginRight: "10%" }}>Powered by</h4>
        <img
          src={brl_logo}
          alt="brl-logo"
          className="brl-logo"
          style={{ marginRight: "10%" }}
        />
      </div>
    </div>
  );
};

export default Home;
