import "./CreateFaculty.css";
import Api from "../../Api";
import { React, useState } from "react";
import { toast } from "react-toastify";
const CreateFaculty = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
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

  const handleSubmit = (e) => {
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
      });
      return;
    }

    setIsLoading(true);
    // API Call here
  };
  return (
    <div>
      <div className="container">
        <div className="card card-01">
          <h2 style={{ width: "fit-content" }}>Create Faculty</h2>
          <br />
          <div>
            <h4 style={{ width: "fit-content" }}>Add a new faculty</h4>
          </div>
        </div>
        <div className="card card-02">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputDepartment">Department</label>
                <select
                  id="inputDepartment"
                  className="form-control"
                  onChange={handleChange}
                  value={createFaculty.department}
                  name="department"
                >
                  <option defaultValue={"HI"}>
                    Applied Science & Humanities
                  </option>
                  <option>Computer Science and Engineering</option>
                  <option>Mechanical Engineering</option>
                  <option>Civil Engineering</option>
                  <option>Information Technology</option>
                  <option>Electronics and Communication Engineering</option>
                  <option>Electrical and Electronics Engineering</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputname">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputname"
                  name="name"
                  onChange={handleChange}
                  value={createFaculty.name}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  name="password"
                  onChange={handleChange}
                  value={createFaculty.password}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword"> Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword1"
                  name="passwordConfirm"
                  onChange={handleChange}
                  value={createFaculty.passwordConfirm}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputusername">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  onChange={handleChange}
                  value={createFaculty.username}
                />
              </div>

              <div className=" col-md-6">
                <label style={{ color: "transparent" }}>submit</label>
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateFaculty;
