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
              <label htmlFor="inputName">Full Name :</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="form-group col-md-5">
              <label htmlFor="inputRollno">Roll No. :</label>
              <input
                type="number"
                className="form-control"
                id="inputRollno"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="inputStdno">Student No. :</label>
              <input
                type="text"
                className="form-control"
                id="inputStdno"
                value={stdNo}
                onChange={(e) => setStdNo(e.target.value)}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputCourse">Course :</label>
              <select
                id="inputCourse"
                className="form-control"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              >
                <option value={""}></option>
                <option value={"B.Tech"}>B.Tech</option>
                <option value={"MCA"}>MCA</option>
                <option value={"MBA"}>MBA</option>
              </select>
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputBranch">Branch :</label>
              <select
                id="inputBranch"
                className="form-control"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              >
                <option value={""}></option>
                <option value={"CSE"}>CSE</option>
                <option value={"IT"}>IT</option>
                <option value={"ECE"}>ECE</option>
                <option value={"CE"}>CE</option>
                <option value={"ME"}>ME</option>
                <option value={"EI"}>EI</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputYear">Year :</label>
              <select
                id="inputYear"
                className="form-control"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option value={""}></option>
                <option value={"1"}>1</option>
                <option value={"2"}>2</option>
                <option value={"3"}>3</option>
                <option value={"4"}>4</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-5">
              <label htmlFor="inputPhone">Phone No. :</label>
              <input
                type="number"
                className="form-control"
                id="inputPhone"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="form-group col-md-5">
              <label htmlFor="inputEmail">Email :</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputSem">Sem :</label>
              <select
                id="inputSem"
                className="form-control"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
              >
                <option value={""}></option>
                <option value={"1"}>1</option>
                <option value={"2"}>2</option>
                <option value={"3"}>3</option>
                <option value={"4"}>4</option>
                <option value={"5"}>5</option>
                <option value={'6'}>6</option>
                <option value={"7"}>7</option>
                <option value={"8"}>8</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-7">
              <label htmlFor="inputfather">Father's Name :</label>
              <input
                type="text"
                className="form-control"
                id="inputfather"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
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
