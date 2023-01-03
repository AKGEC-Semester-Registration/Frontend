import "./Submitted.css";

import akg_logo from "../../assets/akg logo.png";
import brl_logo from "../../assets/brllogo.png";
import { useNavigate } from "react-router-dom";

const Submitted = () => {
  const navigate = useNavigate();
  const logoutStd = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      <div>
        <img
          src={akg_logo}
          height="130em"
          width="130em"
          className="akg-logo__sub"
          alt=""
        />
        <h1 className="h1__sub">New Semester Registration</h1>
      </div>
      <div className="container container__sub">
        <div className="row row__sub">
          <div className="column side column__sub side__sub"></div>

          <div className="column middle column__sub middle__sub">
            <br />
            <br />
            <br />
            <div className="card card1 card__sub card1__sub">
              <div className="card redbox card__sub redbox__sub py-3 px-5 ">
                <h1 className="h1__sub">Registration Form</h1>
              </div>
              <br />
              <br />

              <h2 className="h2__sub">Thankyou!!! </h2>
              <h2 className="h2__sub">Your response have been submitted</h2>
              <br />
              <br />
              <br />
              <button
                onClick={logoutStd}
                type="button"
                className="btn btn__sub btn-light__sub btn-light btn-lg"
                style={{ margin: "auto" }}
              >
                <h2 className="h2__sub px-4 py-0">Logout</h2>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer footer__sub">
        <h4 style={{ marginRight: "10%" }} className="h4__sub">
          Powered by
        </h4>
        <img
          src={brl_logo}
          alt="brl-logo"
          className="brl-logo__sub"
          style={{ marginRight: "10%" }}
        />
      </div>
    </div>
  );
};

export default Submitted;
