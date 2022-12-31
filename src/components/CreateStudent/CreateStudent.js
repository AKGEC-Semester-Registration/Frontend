import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import Api from "../../Api";
import "./CreateStudent.css";

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
    const res = await axios.post(Api.createstdUrl, obj).catch((err) => {
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
    <div className="container">
      <div className="card card-01">
        <h2>Create Student</h2>
        <br />
        <div>
          <h4 style={{ width: "fit-content", float: "left" }}>
            Add a new student
          </h4>
        </div>
      </div>
      <div className="card card-02">
        <form onSubmit={submitHandler}>
          <div className="form-row">
            <div className="form-group col-md-7">
              <label for="inputName">Full Name :</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="form-group col-md-5">
              <label for="inputRollno">Roll No. :</label>
              <input
                type="number"
                className="form-control"
                id="inputRollno"
                onChange={(e) => setRollNo(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="inputStdno">Student No. :</label>
              <input
                type="text"
                className="form-control"
                id="inputStdno"
                onChnage={(e) => setStdNo(e.target.value)}
              />
            </div>
            <div className="form-group col-md-3">
              <label for="inputCourse">Course :</label>
              <select
                id="inputCourse"
                className="form-control"
                onChange={(e) => setCourse(e.target.value)}
              >
                <option>B.Tech</option>
                <option>MCA</option>
                <option>MBA</option>
              </select>
            </div>
            <div className="form-group col-md-3">
              <label for="inputBranch">Branch :</label>
              <select
                id="inputBranch"
                className="form-control"
                onChange={(e) => setBranch(e.target.value)}
              >
                <option>CSE</option>
                <option>IT</option>
                <option>ECE</option>
                <option>CE</option>
                <option>ME</option>
                <option>EI</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label for="inputYear">Year :</label>
              <select
                id="inputYear"
                className="form-control"
                onChange={(e) => setYear(e.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-5">
              <label for="inputPhone">Phone No. :</label>
              <input
                type="number"
                className="form-control"
                id="inputPhone"
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="form-group col-md-5">
              <label for="inputEmail">Email :</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group col-md-2">
              <label for="inputSem">Sem :</label>
              <select
                id="inputSem"
                className="form-control"
                onChange={(e) => setSemester(e.target.value)}
              >
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
            <div className="form-group col-md-7">
              <label for="inputfather">Father's Name :</label>
              <input
                type="text"
                className="form-control"
                id="inputfather"
                onChnage={(e) => setFName(e.target.value)}
              />
            </div>

            <div className=" col-md-5">
              <label style={{ color: "transparent" }}>submit</label>
              <div className="form-group grp">
                {!loader && (
                  <button type="submit" className="btn btn-blue px-5 py-1">
                    SUBMIT
                  </button>
                )}
                {loader && (
                  <button type="submit" className="btn btn-blue px-5 py-1">
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

export default CreateStudent;
