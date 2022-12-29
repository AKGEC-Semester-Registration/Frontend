import "./Student.css";

import { Link, useNavigate } from "react-router-dom";

import Api from "../../Api";
import akg_logo from "../../assets/akg logo.png";
import axios from "axios";
import boy_image from "../../assets/boy.svg";
import brl_logo from "../../assets/brllogo.png";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import { useState } from "react";

const Student = () => {
  const navigate = useNavigate();
  const [rollNo, setRollNo] = useState("");
  const [fullName, setFullName] = useState("");
  const [loader, setLoader] = useState(false);

  const loginStudent = async (e) => {
    e.preventDefault();
    if (rollNo === "" || fullName === "") {
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
      .post(Api.loginStd, { full_name: fullName, roll_no: rollNo })
      .catch((err) => {
        var errMsg = err.errors;
        setLoader(false);
        toast.error(`${errMsg}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
    if (res) {
      localStorage.setItem("studentToken", res.data.data.token);
      var studentToken = localStorage.getItem("studentToken").split(" ")[1];
      var decoded = jwt_decode(studentToken);
      localStorage.setItem("stdName", decoded.name);
      const res2 = await axios.get(Api.getStdDetails, rollNo).catch((err) => {
        console.log(err);
      });
      if (res2) {
        var stdDetails = res2.data;
        localStorage.setItem("studentDetails", stdDetails);
      }
      setLoader(false);
      navigate("/proceed");
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
              <div className="card redbox">
                <h2>Student Login</h2>
              </div>
              <br />

              <form onSubmit={loginStudent}>
                <div className="card-body">
                  <input
                    name="roll_no"
                    className="form-control form-control-lg mb-2 p-3"
                    type="text"
                    placeholder="ROLL NUMBER"
                    value={rollNo}
                    onChange={(e) => setRollNo(e.target.value)}
                  />
                  <input
                    name="full_name"
                    className="form-control form-control-lg mb-4 p-3"
                    type="text"
                    placeholder="FULL NAME"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md"></div>
                  <div className="form-group col-md btn1">
                    {!loader && (
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        style={{ borderRadius: "15px" }}
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
                        <span className="spinner-border spinner-border-lg"></span>
                      </button>
                    )}
                  </div>
                  <div className="form-group col-md">
                    <Link to="/home">
                      <i
                        className="fas fa-arrow-circle-left"
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

export default Student;
