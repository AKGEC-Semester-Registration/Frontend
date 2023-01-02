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
          className="akg-logo__home"
          alt=""
        />
        <h1 className="h1__home">New Semester Registration</h1>
      </div>
      <div className="container">
        <div className="row row__home">
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
            <div className="card card1 card__home card1__home">
              <h2 className="h2__home">Login As</h2>
              <br />
              <br />
              <div className="row mx-4 row__home">
                <div className="col-md-6">
                  <Link to="/student">
                    <button className="btn btn-lg bg-danger shadow-hover shadow-hover__home mb-2 py-3 btn__home">
                      <h2>Student</h2>
                    </button>
                  </Link>
                </div>
                <div className="col-md-6">
                  <Link to="/faculty">
                    <button className="btn btn-group-lg bg-danger shadow-hover shadow-hover__home py-3 mb-2 btn__home">
                      <h2>Faculty</h2>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer footer__home">
        <h4 style={{ marginRight: "10%" }} className="h4__home">
          Powered by
        </h4>
        <img
          src={brl_logo}
          alt="brl-logo"
          className="brl-logo__home"
          style={{ marginRight: "10%" }}
        />
      </div>
    </div>
  );
};

export default Home;
