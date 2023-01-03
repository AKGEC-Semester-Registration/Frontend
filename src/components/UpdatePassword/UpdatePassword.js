import "./UpdatePassword.css";

import Api from "../../Api";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const UpdatePassword = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    password: "",
    newPassword: "",
    newPasswordConfirm: "",
  });

  const handleChange = (event) => {
    setUpdatedData({
      ...updatedData,
      [event.target.name]: event.target.value,
    });
  };

  const updatePswd = async (e) => {
    e.preventDefault();
    if (
      updatedData.password === "" ||
      updatedData.newPassword === "" ||
      updatedData.newPasswordConfirm === ""
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
      .patch(Api.updatePasswordUrl, updatedData, {
        headers: { Authorization: `${localStorage.facultyToken}` },
      })
      .catch((err) => {
        console.log(err.errors);
        var errMsg = err.errors;
        setLoader(false);
        toast.error(`${errMsg}`, {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: "colored",
        });
      });
    if (res) {
      toast.success("Password Successfully Changed, Please Login again!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "colored",
      });
      setLoader(false);
      setUpdatedData({});
      localStorage.clear();
      navigate("/faculty");
    }
  };
  return (
    <div className="container container__up">
      <div className="card card-01 card__up card-01__up">
        <h2 className="h2__up">Update Password</h2>
        <br />
        <div>
          <h4
            className="h4__up"
            style={{ width: "fit-content", float: "left" }}
          >
            Update Your Password
          </h4>
        </div>
      </div>
      <div className="card card-02 card__up card-02__up">
        <form onSubmit={updatePswd}>
          <div className="form-row">
            <div className="form-group col-md-6 col-md-6__up">
              <label htmlFor="inputPassword"> Current Password</label>
              <input
                type="password"
                className="input__up form-control"
                id="inputPassword"
                name="password"
                value={updatedData.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-6 col-md-6__up">
              <label htmlFor="inputPassword"> New Password</label>
              <input
                type="password"
                className="input__up form-control"
                id="inputPassword"
                name="newPassword"
                value={updatedData.newPassword}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 col-md-6__up">
              <label htmlFor="inputPassword"> Confirm New Password</label>
              <input
                type="password"
                className="input__up form-control"
                id="inputPassword"
                name="newPasswordConfirm"
                value={updatedData.newPasswordConfirm}
                onChange={handleChange}
              />
            </div>
            <div className=" col-md-6 col-md-6__up">
              <label style={{ color: "transparent" }}>submit</label>
              <div className="form-group grp grp__up">
                {!loader && (
                  <button
                    type="submit"
                    className="btn btn__up btn-blue__up btn-blue px-5 py-1"
                  >
                    SUBMIT
                  </button>
                )}
                {loader && (
                  <button
                    type="submit"
                    className="btn btn__up btn-blue__up btn-blue px-5 py-1"
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

export default UpdatePassword;
