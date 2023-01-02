import "./UpdateStudent.css";

import Api from "../../Api";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

const UpdateStudent = () => {
  const [loader, setLoader] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    full_name: "",
    student_no: "",
    roll_no: "",
    semester: "",
    course: "",
    branch: "",
    email: "",
    mobile: "",
    father_name: "",
    address: "",
    year: "",
    session: "",
  });

  const handleChange = (event) => {
    setUpdatedData({
      ...updatedData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      updatedData.full_name === "" ||
      updatedData.student_no === "" ||
      updatedData.roll_no === "" ||
      updatedData.semester === "" ||
      updatedData.course === "" ||
      updatedData.branch === "" ||
      updatedData.email === "" ||
      updatedData.mobile === "" ||
      updatedData.father_name === "" ||
      updatedData.address === "" ||
      updatedData.year === "" ||
      updatedData.session === ""
    ) {
      toast.warning("Please fill all fields first!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "colored",
      });
      return;
    }
    setLoader(true);
    console.warn(updatedData);
    const res = await axios
      .patch(Api.updateStudentUrl, updatedData, {
        headers: { Authorization: `${localStorage.facultyToken}` },
      })
      .catch((err) => {
        var errMsg = err.errors;
        setLoader(false);
        toast.error(`${errMsg}`, {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: "colored",
        });
      });
    if (res) {
      toast.success("Student Updated Successfully!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "colored",
      });
      setLoader(false);
      setUpdatedData({});
    }
  };

  return (
    <div className="container container__us">
      <div className="card card__us card-01__us card-01">
        <h2>Update Student</h2>
        <br />
        <div>
          <h4
            className="h4__us"
            style={{ width: "fit-content", float: "left" }}
          >
            Update Student Information
          </h4>
        </div>
      </div>
      <div className="card card__us card-02__us card-02">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-4 col-md-4__us">
              <label htmlFor="inputName">Full Name :</label>
              <input
                type="text"
                className="input__us form-control"
                id="inputName"
                name="full_name"
                value={updatedData.full_name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-4 col-md-4__us">
              <label htmlFor="inputRollno">Roll No. :</label>
              <input
                type="number"
                className="input__us form-control"
                id="inputRollno"
                name="roll_no"
                value={updatedData.roll_no}
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-4 col-md-4__us">
              <label htmlFor="inputSession">Session</label>
              <input
                type="number"
                className="input__us form-control"
                name="session"
                value={updatedData.session}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-4 col-md-4__us">
              <label htmlFor="inputStdno">Student No. :</label>
              <input
                type="text"
                className="input__us form-control"
                id="inputStdno"
                name="student_no"
                value={updatedData.student_no}
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-3 col-md-3__us">
              <label htmlFor="inputCourse">Course :</label>
              <select
                id="inputCourse"
                className="select__us form-control"
                name="course"
                value={updatedData.course}
                onChange={handleChange}
              >
                <option value={""}></option>
                <option>B.Tech</option>
                <option>MCA</option>
                <option>MBA</option>
              </select>
            </div>
            <div className="form-group col-md-3 col-md-3__us">
              <label htmlFor="inputBranch">Branch :</label>
              <select
                id="inputBranch"
                className="select__us form-control"
                name="branch"
                value={updatedData.branch}
                onChange={handleChange}
              >
                <option value={""}></option>
                <option>CSE</option>
                <option>IT</option>
                <option>ECE</option>
                <option>CE</option>
                <option>ME</option>
                <option>EI</option>
              </select>
            </div>
            <div className="form-group col-md-2 col-md-2__us">
              <label htmlFor="inputYear">Year :</label>
              <select
                id="inputYear"
                className="select__us form-control"
                name="year"
                value={updatedData.year}
                onChange={handleChange}
              >
                <option value={""}></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-5 col-md-5__us">
              <label htmlFor="inputPhone">Phone No. :</label>
              <input
                type="number"
                className="input__us form-control"
                id="inputPhone"
                name="mobile"
                value={updatedData.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-5 col-md-5__us">
              <label htmlFor="inputEmail">Email :</label>
              <input
                type="email"
                className="input__us form-control"
                id="inputEmail"
                name="email"
                value={updatedData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group col-md-2 col-md-2__us">
              <label htmlFor="inputSem">Sem :</label>
              <select
                id="inputSem"
                className="select__us form-control"
                name="semester"
                value={updatedData.semester}
                onChange={handleChange}
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
          <div className="form-row">
            <div className="form-group col-md-4 col-md-4__us">
              <label htmlFor="inputfather">Father's Name :</label>
              <input
                type="text"
                className="input__us form-control"
                id="inputfather"
                name="father_name"
                value={updatedData.father_name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-5 col-md-5__us">
              <label htmlFor="inputAddress">Address</label>
              <input
                type="text"
                className="input__us form-control"
                id="inputAddress"
                placeholder="Student's Address"
                name="address"
                value={updatedData.address}
                onChange={handleChange}
              />
            </div>

            <div className=" col-md-3 col-md-3__us">
              <label style={{ color: "transparent" }}>submit</label>
              <div className="form-group grp grp__us">
                {!loader && (
                  <button
                    type="submit"
                    className="btn btn__us btn-blue__us btn-blue px-3 py-1"
                  >
                    SUBMIT
                  </button>
                )}
                {loader && (
                  <button
                    type="submit"
                    className="btn btn__us btn-blue__us btn-blue px-3 py-1"
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
  );
};

export default UpdateStudent;
