import "./Faculty.css";

import Api from "../../Api";
import { Link } from "react-router-dom";
import akg_logo from "../../assets/akg logo.png";
import axios from "axios";
import boy_image from "../../assets/boy.svg";
import brl_logo from "../../assets/brllogo.png";
import { toast } from "react-toastify";
import { useState } from "react";

const Faculty = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const loginFaculty = async () => {
    if (userName === "" || password === "") {
      toast.warn("Please fill all fields first!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    setLoader(true);
    const res = await axios
      .post(Api.facultyLogin, { username: userName, password: password })
      .catch((err) => {
        console.log(err);
      });
    if (res) {
    }
  };
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
              <div className="card redbox ">
                <h2>Faculty Login</h2>
              </div>
              <br />

              <form>
                <div className="card-body">
                  <input
                    className="form-control form-control-lg  mb-2 p-3"
                    type="text"
                    placeholder="USERNAME"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <input
                    className="form-control form-control-lg mb-4 p-3"
                    type="password"
                    placeholder="PASSWORD"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md"></div>
                  <div className="form-group col-md btn1">
                    {!loader && (
                      <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        style={{ borderRadius: "15px" }}
                        onClick={loginFaculty}
                      >
                        <h3>LOGIN</h3>
                      </button>
                    )}
                    {loader && (
                      <button
                        type="button"
                        className="btn btn-primary btn-lg px-5"
                        style={{ borderRadius: "15px" }}
                      >
                        <h3>
                          <span className="spinner-border"></span>
                        </h3>
                      </button>
                    )}
                  </div>
                  <div className="form-group col-md">
                    <Link to="/home">
                      <i
                        className="fas fa-arrow-circle-left "
                        style={{
                          fontSize: "4em",
                          color: "#d9534f",
                          float: "right",
                        }}
                      ></i>
                    </Link>
                  </div>
                </div>
              </form>
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

export default Faculty;
