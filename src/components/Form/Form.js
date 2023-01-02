import "./Form.css";

import Api from "../../Api";
import akg_logo from "../../assets/akg logo.png";
import axios from "axios";
import brl_logo from "../../assets/brllogo.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Form = () => {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState({
    full_name: "",
    student_no: "",
    roll_no: "",
    session: "",
    semester: "",
    course: "",
    branch: "",
    email: "",
    mobile: "",
    father_name: "",
    address: "",
    year: "",
  });
  const [disabled, setDisabled] = useState(true);
  const [loader, setLoader] = useState(false);

  const handleChange = (event) => {
    setUserProfile({
      ...userProfile,
      [event.target.name]: event.target.value,
    });
  };

  const logoutStd = () => {
    localStorage.clear();
    navigate("/");
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submitting");
    if (
      userProfile.full_name === "" ||
      userProfile.student_no === "" ||
      userProfile.roll_no === "" ||
      userProfile.session === "" ||
      userProfile.semester === "" ||
      userProfile.course === "" ||
      userProfile.branch === "" ||
      userProfile.email === "" ||
      userProfile.mobile === "" ||
      userProfile.father_name === "" ||
      userProfile.address === "" ||
      userProfile.year === ""
    ) {
      toast.warning("Please fill all fields first!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "colored",
      });
      return;
    }
    setLoader(true);
    const res = await axios
      .post(Api.registerUrl, userProfile, {
        headers: { Authorization: `${localStorage.studentToken}` },
      })
      .catch((err) => {
        console.log(err.errors);
        setLoader(false);
        var errMsg = err.errors;
        toast.error(`${errMsg}`, {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: "colored",
        });
      });
    if (res) {
      console.log("form submitted");
      toast.success(
        `Hi ${userProfile.full_name} ! You Are Successfully Registered!`,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: "colored",
        }
      );
      setLoader(false);
      setUserProfile({});
      navigate("submitted");
    }
  };

  const updateForm = () => {
    console.log("updating");
    setDisabled(!disabled);
    // Object.keys(userProfile)
  };
  return (
    <div>
      <button
        onClick={logoutStd}
        type="submit"
        className="btn btn__form px-5 mb-2 mr-5 mt-5"
        style={{
          float: "right",
          borderRadius: "5px",
          backgroundColor: "rgb(204, 45, 45)",
        }}
      >
        <h3 className="h3__form">Logout</h3>
      </button>
      <div>
        <img
          src={akg_logo}
          height="130em"
          width="130em"
          className="akg-logo__form"
          alt=""
        />
        <h1 className="h1__form">New Semester Registration</h1>
      </div>
      <div className="container-fluid container-fluid__form">
        <div className="row row__form">
          <div className="column column__form side__form side"></div>

          <div className="column column__form middle middle__form mb-2">
            <br />
            <br />
            <br />
            <div className="card card__form card1__form card1">
              <div className="card card__form redbox redbox__form py-3 px-5 ">
                <h1 className="h1__form">Registration Form</h1>
              </div>

              <form
                style={{ padding: "5% 10% 0 10%", fontSize: "x-large" }}
                onSubmit={submitHandler}
              >
                <div className="form-group form-group__form">
                  <label htmlFor="fullName">
                    <b>Full Name</b>
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    value={userProfile.full_name}
                    onChange={handleChange}
                    className="form-control form-control__form"
                    id="fullName"
                  />
                </div>
                <div className="form-row form-row__form">
                  <div className="form-group form-group__form col-md-6">
                    <label htmlFor="studentNo">
                      <b>Student No.</b>
                    </label>
                    <input
                      type="number"
                      name="student_no"
                      className="form-control form-control__form mr-3"
                      id="studentNo"
                      value={userProfile.student_no}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group form-group__form col-md-6">
                    <label htmlFor="rollNo">
                      <b>Roll No.</b>
                    </label>
                    <input
                      type="number"
                      className="form-control form-control__form"
                      id="rollNo"
                      name="roll_no"
                      value={userProfile.roll_no}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group form-group__form">
                  <label htmlFor="email">
                    <b>E-mail</b>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={userProfile.email}
                    onChange={handleChange}
                    className="form-control form-control__form"
                    id="email"
                  />
                </div>

                <div className="form-row form-row__form">
                  <div className="form-group form-group__form col-md">
                    <label htmlFor="course">
                      <b>Course</b>
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={userProfile.course}
                      onChange={handleChange}
                      className="form-control form-control__form"
                    >
                      <option value={""}></option>
                      <option>B.Tech</option>
                      <option>MBA</option>
                      <option>MCA</option>
                    </select>
                  </div>

                  <div className="form-group form-group__form col-md">
                    <label htmlFor="branch">
                      <b>Branch</b>
                    </label>
                    <select
                      id="branch"
                      name="branch"
                      value={userProfile.branch}
                      onChange={handleChange}
                      className="form-control form-control__form"
                    >
                      <option value={""}></option>
                      <option>IT</option>
                      <option>CSE</option>
                      <option>ECE</option>
                      <option>Civil</option>
                      <option>ME</option>
                      <option>EI</option>
                      <option>EN</option>
                    </select>
                  </div>
                  <div className="form-group form-group__form col-md">
                    <label htmlFor="year">
                      <b>Year</b>
                    </label>
                    <select
                      id="year"
                      name="year"
                      value={userProfile.year}
                      onChange={handleChange}
                      className="form-control form-control__form"
                    >
                      <option value={""}></option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>

                  <div className="form-group form-group__form col-md">
                    <label htmlFor="sem">
                      <b>Semester</b>
                    </label>
                    <select
                      id="sem"
                      name="semester"
                      value={userProfile.semester}
                      onChange={handleChange}
                      className="form-control form-control__form"
                    >
                      <option value={""}></option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNo">
                    <b>Address</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={userProfile.address}
                    onChange={handleChange}
                    id="phoneNo"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNo">
                    <b>Father's name</b>
                  </label>
                  <input
                    type="text"
                    name="father_name"
                    value={userProfile.father_name}
                    onChange={handleChange}
                    className="form-control"
                    id="phoneNo"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNo">
                    <b>Mobile number</b>
                  </label>
                  <input
                    type="number"
                    value={userProfile.mobile}
                    onChange={handleChange}
                    name="mobile"
                    className="form-control"
                    id="phoneNo"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNo">
                    <b>Session</b>
                  </label>
                  <input
                    type="number"
                    name="session"
                    value={userProfile.session}
                    onChange={handleChange}
                    className="form-control"
                    id="phoneNo"
                  />
                </div>
                <div className="form-check form-check__form">
                  <input
                    className="form-check-input form-check-input__form"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label
                    className="form-check-label form-check-label__form pb-4"
                    htmlFor="defaultCheck1"
                  >
                    <h6>
                      I hereby declare that the information furnished above is
                      correct , complete and best of my knowledge and belief. I
                      understand that in the event of my information being found
                      false or incorrect at any stage, my registration shall be
                      liable to cancellation / termination without notice or any
                      compensation.
                    </h6>
                  </label>
                </div>

                <div className="form-group btn-center btn-center__form">
                  {!loader && (
                    <button
                      type="submit"
                      className="btn  btn__form btn-lg px-5 mb-2 "
                    >
                      <h3>Submit</h3>
                    </button>
                  )}
                  {loader && (
                    <button
                      type="submit"
                      className="btn  btn__form btn-lg  mb-2 "
                      style={{ padding: ".55em 3.5em .55em 3.5em" }}
                    >
                      <span className="spinner-border spinner-border-lg"></span>
                    </button>
                  )}
                  <button
                    type="button"
                    className="btn  btn__form btn-lg px-5 mb-2 ml-2"
                    style={{ backgroundColor: "green" }}
                    onClick={updateForm}
                  >
                    <h3>Update</h3>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer footer__form">
        <h4 style={{ marginRight: "10%" }} className="h4__form">
          Powered by
        </h4>
        <img
          src={brl_logo}
          alt="brl-logo"
          className="brl-logo__form"
          style={{ marginRight: "10%" }}
        />
      </div>
    </div>
  );
};

export default Form;
