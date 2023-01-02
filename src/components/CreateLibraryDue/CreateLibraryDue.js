import "./CreateLibraryDue.css";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Api from "../../Api";
import axios from "axios";
const CreateLibraryDue = () => {
  const [studentDetail, setStudentDetail] = useState({
    full_name: "",
    student_no: "",
    roll_no: "",
    branch: "",
    lib_due: true,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const CreateLibraryDue = async (ev) => {
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
    // API call here
  };

  const handleChange = (e) => {
    setStudentDetail({ ...studentDetail, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container">
        <div className="card card-01">
          <h2>Create Library Due</h2>
          <br />
          <div>
            <h4 style={{ width: "fit-content", float: "left" }}>
              Create Student Library Due
            </h4>
          </div>
        </div>
        <div className="card card-02">
          <form onSubmit={CreateLibraryDue}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputStdno">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputname"
                  name="full_name"
                  value={studentDetail.full_name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputStdno">Student No. :</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputStdno"
                  name="student_no"
                  value={studentDetail.student_no}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputRollno">Roll No. :</label>
                <input
                  type="number"
                  className="form-control"
                  id="inputRollno"
                  name="roll_no"
                  value={studentDetail.roll_no}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputBranch">Branch :</label>
                <select
                  value={studentDetail.branch}
                  onChange={handleChange}
                  id="inputBranch"
                  className="form-control"
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
            <div className="form-row">
              <div className="form-group grp">
                {!isLoading && (
                  <button type="submit" className="btn btn-blue px-5 py-1">
                    SUBMIT
                  </button>
                )}
                {isLoading && (
                  <button type="submit" className="btn btn-blue px-5 py-1">
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
