import "./CreateStudent.css";

import Api from "../../Api";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

const CreateStudent = () => {
  const [loader, setLoader] = useState(false);
  const [fullName, setFullName] = useState("");
  const [stdNo, setStdNo] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [semester, setSemester] = useState("");
  const [course, setCourse] = useState("");
  const [branch, setBranch] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [fName, setFName] = useState("");
  const [address, setAddress] = useState("");
  const [year, setYear] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      stdNo === "" ||
      rollNo === "" ||
      fullName === "" ||
      semester === "" ||
      course === "" ||
      branch === "" ||
      email === "" ||
      mobile === "" ||
      fName === "" ||
      year === ""
    ) {
      toast.warn("Please fill all fields first!", {
        position: "bottom-right",
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
    const obj = {
      full_name: fullName,
      student_no: stdNo,
      roll_no: rollNo,
      semester: semester,
      course: course,
      branch: branch,
      email: email,
      mobile: mobile,
      father_name: fName,
      address: address,
      year: year,
    };
    const res = await axios
      .post(Api.createstdUrl, obj, {
        headers: { Authorization: `${localStorage.facultyToken}` },
      })
      .catch((err) => {
        const errMsg = err.errors;
        setLoader(false);
        toast.error(`${errMsg}`, {
          position: "bottom-right",
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
      toast.success("Student Created Successfully!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoader(false);
      setFullName("");
      setStdNo("");
      setRollNo("");
      setSemester("");
      setCourse("");
      setBranch("");
      setEmail("");
      setMobile("");
      setFName("");
      setAddress("");
      setYear("");
    }
  };
  return (
    <div className="container container__cs">
      <div className="card card__cs card-01 card-01__cs">
        <h2 className="h2__cs">Create Student</h2>
        <br />
        <div>
          <h4
            style={{ width: "fit-content", float: "left" }}
            className="h4__cs"
          >
            Add a new student
          </h4>
        </div>
      </div>
      <div className="card card__cs card-02 card-02__cs">
        <form onSubmit={submitHandler}>
          <div className="form-row form-row__cs">
            <div className="form-group form-group__cs col-md-7 col-md-7__cs">
              <label htmlFor="inputName">Full Name :</label>
              <input
                type="text"
                className="form-control form-control__cs input__cs"
                id="inputName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="form-group form-group__cs col-md-5 col-md-5__cs">
              <label htmlFor="inputRollno">Roll No. :</label>
              <input
                type="number"
                className="input__cs form-control form-control__cs"
                id="inputRollno"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row form-row__cs">
            <div className="form-group form-group__cs col-md-4 col-md-4__cs">
              <label htmlFor="inputStdno">Student No. :</label>
              <input
                type="text"
                className="input__cs form-control form-control__cs"
                id="inputStdno"
                value={stdNo}
                onChange={(e) => setStdNo(e.target.value)}
              />
            </div>
            <div className="form-group form-group__cs col-md-3 col-md-3__cs">
              <label htmlFor="inputCourse">Course :</label>
              <select
                id="inputCourse"
                className="select__cs form-control form-control__cs"
                value={course}
                onChange={(e) => {
                  setCourse(e.target.value);
                  console.log(e.target.value);
                }}
              >
                <option value={""}></option>
                <option>B.Tech</option>
                <option>MCA</option>
                <option>MBA</option>
              </select>
            </div>
            <div className="form-group form-group__cs col-md-3 col-md-3__cs">
              <label htmlFor="inputBranch">Branch :</label>
              <select
                id="inputBranch"
                className="select__cs form-control form-control__cs"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
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
            <div className="form-group form-group__cs col-md-2 col-md-2__cs">
              <label htmlFor="inputYear">Year :</label>
              <select
                id="inputYear"
                className="select__cs form-control form-control__cs"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option value={""}></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
          </div>
          <div className="form-row form-row__cs">
            <div className="form-group form-group__cs col-md-5 col-md-5__cs">
              <label htmlFor="inputPhone">Phone No. :</label>
              <input
                type="number"
                className="input__cs form-control form-control__cs"
                id="inputPhone"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="form-group form-group__cs col-md-5 col-md-5__cs">
              <label htmlFor="inputEmail">Email :</label>
              <input
                type="email"
                className="input__cs form-control form-control__cs"
                id="inputEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group form-group__cs col-md-2 col-md-2__cs">
              <label htmlFor="inputSem">Sem :</label>
              <select
                id="inputSem"
                className="select__cs form-control form-control__cs"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
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
          <div className="form-row form-row__cs">
            <div className="form-group form-group__cs col-md-7 col-md-7__cs">
              <label htmlFor="inputfather">Father's Name :</label>
              <input
                type="text"
                className="input__cs form-control form-control__cs"
                id="inputfather"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
              />
            </div>

            <div className="col-md-5 col-md-5__cs">
              <label style={{ color: "transparent" }}>submit</label>
              <div className="form-group form-group__cs grp grp__cs">
                {!loader && (
                  <button
                    type="submit"
                    className="btn btn__cs btn-blue btn-blue__cs px-5 px-5__cs py-1 py-1__cs"
                  >
                    SUBMIT
                  </button>
                )}
                {loader && (
                  <button
                    type="submit"
                    className="btn btn__cs btn-blue btn-blue__cs px-5 px-5__cs py-1 py-1__cs"
                  >
                    <span className="spinner-border"></span>
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

export default CreateStudent;
