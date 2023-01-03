import "./UpdateFaculty.css";

import Api from "../../Api";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

const UpdateFaculty = () => {
  const [loader, setLoader] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    username: "",
    department: "",
  });

  const handleChange = (event) => {
    setUpdatedData({
      ...updatedData,
      [event.target.name]: event.target.value,
    });
  };

  const updateFac = async (e) => {
    e.preventDefault();
    if (updatedData.username === "" || updatedData.department === "") {
      toast.warning("Please fill all fields first!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "colored",
      });
      return;
    }
    setLoader(true);
    console.warn(updatedData);
    const res = await axios
      .patch(Api.updateFacultyUrl, updatedData, {
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
      toast.success("Faculty Updated Successfully!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "colored",
      });
      setLoader(false);
      setUpdatedData({});
    }
  };
  return (
    <div className="container container__uf">
      <div className="card card-01 card__uf card-01__uf">
        <h2 className="h4__uf">Update Faculty</h2>
        <br />
        <div>
          <h4
            className="h4__uf"
            style={{ width: "fit-content", float: "left" }}
          >
            Update Your Information
          </h4>
        </div>
      </div>
      <div className="card card-02 card card-02__uf">
        <form onSubmit={updateFac}>
          <div className="form-row">
            <div className="form-group col-md-6 col-md-6__uf">
              <label htmlFor="inputDepartment">Department</label>
              <select
                id="inputDepartment"
                className=" select__uf form-control"
                name="department"
                value={updatedData.department}
                onChange={handleChange}
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

          <div className="form-row">
            <div className="form-group col-md-6 col-md-6__uf">
              <label htmlFor="inputusername">Username</label>
              <input
                type="text"
                className="input__uf form-control"
                name="username"
                value={updatedData.username}
                onChange={handleChange}
              />
            </div>

            <div className=" col-md-6 col-md-6__uf">
              <label style={{ color: "transparent" }}>submit</label>
              <div className="form-group grp grp__uf">
                {!loader && (
                  <button
                    type="submit"
                    className="btn btn-blue btn__uf btn-blue__uf px-5 py-1"
                  >
                    UPDATE
                  </button>
                )}
                {loader && (
                  <button
                    type="submit"
                    className="btn btn-blue btn__uf btn-blue__uf px-5 py-1"
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

export default UpdateFaculty;
