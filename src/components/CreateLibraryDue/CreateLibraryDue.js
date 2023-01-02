import "./CreateLibraryDue.css";

import React, { useState } from "react";

import Api from "../../Api";
import axios from "axios";
import { toast } from "react-toastify";

const CreateLibraryDue = () => {
  const [studentDetail, setStudentDetail] = useState({
    full_name: "",
    student_no: "",
    roll_no: "",
    branch: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const CreateLibDue = async (ev) => {
    ev.preventDefault();
    if (
      studentDetail.full_name === "" ||
      studentDetail.student_no === "" ||
      studentDetail.roll_no === "" ||
      studentDetail.branch === ""
    ) {
      toast.warning("Please fill all fields first!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    setIsLoading(true);
    const res = await axios
      .patch(Api.clearLibDue, {
        headers: { Authorization: `${localStorage.facultyToken}` },
      })
      .catch((err) => {
        var errMsg = err.errors;
        setIsLoading(false);
        toast.error(`${errMsg}`, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
    if (res) {
      toast.success("Library Due Created Succesfully!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setIsLoading(false);
      setStudentDetail({});
    }
  };

  const handleChange = (e) => {
    setStudentDetail({ ...studentDetail, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container container__cld">
        <div className="card card__cld card-01 card-01__cld">
          <h2 className="h2__cld">Create Library Due</h2>
          <br />
          <div>
            <h4
              style={{ width: "fit-content", float: "left" }}
              className="h4__cld"
            >
              Create Student Library Due
            </h4>
          </div>
        </div>
        <div className="card card__cld card-02__cld card-02">
          <form onSubmit={CreateLibDue}>
            <div className="form-row form-row__cld">
              <div className="form-group form-group__cld col-md-6__cld col-md-6">
                <label htmlFor="inputStdno">Full Name</label>
                <input
                  type="text"
                  className="input__cld form-control form-control__cld"
                  id="inputname"
                  name="full_name"
                  value={studentDetail.full_name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group form-group__cld col-md-6 col-md-6__cld">
                <label htmlFor="inputStdno">Student No. :</label>
                <input
                  type="text"
                  className="input__cld form-control form-control__cld"
                  id="inputStdno"
                  name="student_no"
                  value={studentDetail.student_no}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row form-row__cld">
              <div className="form-group form-group__cld col-md-6 col-md-6__cld">
                <label htmlFor="inputRollno">Roll No. :</label>
                <input
                  type="number"
                  className="input__cld form-control form-control__cld"
                  id="inputRollno"
                  name="roll_no"
                  value={studentDetail.roll_no}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group form-group__cld col-md-6 col-md-6__cld">
                <label htmlFor="inputBranch">Branch :</label>
                <select
                  value={studentDetail.branch}
                  onChange={handleChange}
                  id="inputBranch"
                  className="select__cld form-control form-control__cld"
                  name="branch"
                >
                  <option value=""></option>
                  <option value="IT">IT</option>
                  <option value="CSE">CSE</option>
                  <option value="CSE(AIML)">CSE(AIML)</option>
                  <option value="CSE(HINDI)">CSE(HINDI)</option>
                  <option value="ECE">ECE</option>
                  <option value="EN">EN</option>
                  <option value="CE">CE</option>
                  <option value="AIML">AIML</option>
                  <option value="ME">ME</option>
                  <option value="CSE(DS)">CSE(DS)</option>
                </select>
              </div>
            </div>
            <br />
            <div className="form-row form-row__cld">
              <div className="form-group form-group__cld grp grp__cld">
                {!isLoading && (
                  <button
                    type="submit"
                    className="btn btn__blue btn-blue btn-blue__cld px-5 py-1"
                  >
                    SUBMIT
                  </button>
                )}
                {isLoading && (
                  <button
                    type="submit"
                    className="btn btn__cld btn-blue__cld btn-blue px-5 py-1"
                  >
                    <span className="spinner-border "></span>
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateLibraryDue;
