import "./ClearLibraryDue.css";

import Api from "../../Api";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

const ClearLibraryDue = () => {
  const [loader, setLoader] = useState(false);
  const [clearDue, setCleardue] = useState({
    roll_no: "",
  });
  const ClearDue = async (e) => {
    e.preventDefault();
    if (clearDue.roll_no === "") {
      toast.warning("Please fill the field first!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "colored",
      });
      return;
    }
    setLoader(true);
    console.warn(clearDue);
    const res = await axios
      .patch(Api.clearLibDue, clearDue, {
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
      toast.success("Library Due Cleared Succesfully!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "colored",
      });
      setLoader(false);
      setCleardue({});
    }
  };
  return (
    <div className="container container__clr">
      <div className="card card__clr card-01 card-01__clr">
        <h2 className="h2__clr">Clear Library Due</h2>
        <br />
        <div>
          <h4
            className="h4__clr"
            style={{ width: "fit-content", float: "left" }}
          >
            Clear Student Library Due
          </h4>
        </div>
      </div>
      <div className="card card__clr card-02__clr card-02">
        <form onSubmit={ClearDue}>
          <div className="form-row">
            <div
              className="form-group col-md-6 col-md-6__clr"
              style={{ marginLeft: "10%" }}
            >
              <label for="inputRollno">Roll No. :</label>
              <input
                type="number"
                className="input__clr form-control"
                id="inputRollno"
              />
            </div>
          </div>
          <div className="form-row">
            <div className=" col-md-6 col-md-6__clr">
              <label style={{ color: "transparent" }}>submit</label>
              <div className="form-group btn-center btn-center__clr">
                {!loader && (
                  <button
                    type="submit"
                    className="btn  btn__clr btn-lg__clr btn-lg px-4 mb-2 "
                  >
                    SUBMIT
                  </button>
                )}
                {loader && (
                  <button
                    type="submit"
                    className="btn  btn__clr btn-lg__clr btn-lg px-4 mb-2 "
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

export default ClearLibraryDue;
