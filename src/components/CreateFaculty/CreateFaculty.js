import "./CreateFaculty.css";

import { React, useState } from "react";

import Api from "../../Api";
import axios from "axios";
import { toast } from "react-toastify";

const CreateFaculty = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [createFaculty, setCreateFaculty] = useState({
    name: "",
    username: "",
    department: "",
    password: "",
    passwordConfirm: "",
  });
  const handleChange = (event) => {
    setCreateFaculty({
      ...createFaculty,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target);
    if (
      createFaculty.name === "" ||
      createFaculty.username === "" ||
      createFaculty.department === "" ||
      createFaculty.password === "" ||
      createFaculty.passwordConfirm === ""
    ) {
      toast.warning("Please fill all fields first!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "colored",
      });
      return;
    }
    setIsLoading(true);
    const res = await axios
      .post(Api.createfacultyUrl, createFaculty, {
        headers: { Authorization: `${localStorage.facultyToken}` },
      })
      .catch((err) => {
        console.log(err);
        var errMsg = err.errors;
        setIsLoading(false);
        toast.error(`${errMsg}`, {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: "colored",
        });
      });
    if (res) {
      toast.success("Faculty Created Successfully!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "colored",
      });
      setIsLoading(false);
      setCreateFaculty({});
    }
  };
  return (
    <div>
      <div className="container container__cf">
        <div className="card card__cf card-01 card-01__cf">
          <h2 style={{ width: "fit-content" }} className="h2__cf">
            Create Faculty
          </h2>
          <br />
          <div>
            <h4 style={{ width: "fit-content" }} className="h4__cf">
              Add a new faculty
            </h4>
          </div>
        </div>
        <div className="card card__cf card-02 card-02__cf">
          <form onSubmit={handleSubmit}>
            <div className="form-row form-row__cf">
              <div className="form-group form-group__cf col-md-6 col-md-6__cf">
                <label htmlFor="inputDepartment">Department</label>
                <select
                  id="inputDepartment"
                  className="select__cf form-control form-control__cf"
                  onChange={handleChange}
                  value={createFaculty.department}
                  name="department"
                >
                  <option value={""}></option>
                  <option>Applied Science & Humanities</option>
                  <option>Computer Science and Engineering</option>
                  <option>Mechanical Engineering</option>
                  <option>Civil Engineering</option>
                  <option>Information Technology</option>
                  <option>Electronics and Communication Engineering</option>
                  <option>Electrical and Electronics Engineering</option>
                </select>
              </div>
            </div>

            <div className="form-row form-row__cf">
              <div className="form-group form-group__cf col-md-6 col-md-6__cf">
                <label htmlFor="inputname">Full Name</label>
                <input
                  type="text"
                  className="input__cf form-control form-control__cf"
                  id="inputname"
                  name="name"
                  onChange={handleChange}
                  value={createFaculty.name}
                />
              </div>
            </div>
            <div className="form-row form-row__cf">
              <div className="form-group form-group__cf col-md-6 col-md-6__cf">
                <label htmlFor="inputPassword">Password</label>
                <input
                  type="password"
                  className="input__cf form-control form-control__cf"
                  id="inputPassword"
                  name="password"
                  onChange={handleChange}
                  value={createFaculty.password}
                />
              </div>
              <div className="form-group form-group__cf col-md-6 col-md-6__cf">
                <label htmlFor="inputPassword"> Confirm Password</label>
                <input
                  type="password"
                  className="input__cf form-control form-control__cf"
                  id="inputPassword1"
                  name="passwordConfirm"
                  onChange={handleChange}
                  value={createFaculty.passwordConfirm}
                />
              </div>
            </div>
            <div className="form-row form-row__cf">
              <div className="form-group form-group__cf col-md-6 col-md-6__cf">
                <label htmlFor="inputusername">Username</label>
                <input
                  type="text"
                  className="input__cf form-control form-control__cf"
                  name="username"
                  onChange={handleChange}
                  value={createFaculty.username}
                />
              </div>

              <div className="col-md-6 col-md-6__cf">
                <label style={{ color: "transparent" }}>submit</label>
                <div className="form-group form-group__cf grp grp__cf">
                  {!isLoading && (
                    <button
                      type="submit"
                      className="btn btn__cf btn-blue btn-blue__cf px-5 px-5__cf py-1 py-1__cf"
                    >
                      SUBMIT
                    </button>
                  )}
                  {isLoading && (
                    <button
                      type="submit"
                      className="btn btn__cf btn-blue btn-blue__cf px-5 px-5__cf py-1 py-1__cf"
                    >
                      <span className="spinner-border "></span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateFaculty;
