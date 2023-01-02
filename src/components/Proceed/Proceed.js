import "./Proceed.css";

import Api from "../../Api";
import akg_logo from "../../assets/akg logo.png";
import axios from "axios";
import boy_img from "../../assets/boy.svg";
import brl_logo from "../../assets/brllogo.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Proceed = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [alert, setAlert] = useState(false);

  const checkDues = async () => {
    setLoader(true);
    const res = await axios
      .get(Api.stddueUrl, {
        headers: { Authorization: `${localStorage.studentToken}` },
      })
      .catch((err) => {
        console.warn(err.errors);
        setLoader(false);
        setAlert(true);
        var errMsg = err.errors;
        toast.error(`${errMsg}`, {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        });
      });
    if (res) {
      console.warn(res.data);
      navigate("form");
      setLoader(false);
    }
  };

  const logoutStd = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      <button
        onClick={logoutStd}
        type="submit"
        className="btn btn__pro px-5 mb-2 mr-5 mt-5"
        style={{
          float: "right",
          borderRadius: "5px",
          backgroundColor: "rgb(204, 45, 45)",
          color: "white",
        }}
      >
        <h3 style={{ fontSize: "1.75rem" }} className="h3__pro">
          Logout
        </h3>
      </button>
      <div>
        <img
          src={akg_logo}
          height="130em"
          width="130em"
          className="akg-logo__pro"
          alt=""
        />
        <h1 className="h1__pro">New Semester Registration</h1>
      </div>
      <div className="container container__pro">
        <div className="row row__pro">
          <div className="column side column__pro side__pro">
            <img
              src={boy_img}
              style={{ width: "auto", height: "65vh" }}
              alt=""
            />
          </div>
          <div className="column middle column__pro middle__pro">
            <br />
            <br />
            <br />
            <div className="card card__pro card1__pro card1">
              <div className="card card__pro redbox redbox__pro">
                <h2 className="px-3 h2__pro">Student Login</h2>
              </div>
              <br />
              <br />
              <br />

              <h3 className="h3__pro">
                Please Proceed only if you have cleared your library dues.
              </h3>
              <br />
              <br />

              {!loader && (
                <button
                  onClick={checkDues}
                  type="button"
                  className="btn btn__pro btn-primary btn-lg"
                >
                  <h3 className="px-4 py-1 h3__pro">Proceed</h3>
                </button>
              )}
              {loader && (
                <button
                  onClick={checkDues}
                  type="button"
                  className="btn btn__pro btn-primary btn-lg"
                  style={{ padding: ".9em 4em" }}
                >
                  <span className="spinner-border spinner-border-lg"></span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="footer footer__pro">
        <h4 style={{ marginRight: "10%" }} className="h4__pro">
          Powered by
        </h4>
        <img
          src={brl_logo}
          alt="brl-logo"
          className="brl-logo__pro"
          style={{ marginRight: "10%" }}
        />
      </div>
    </div>
  );
};

export default Proceed;
