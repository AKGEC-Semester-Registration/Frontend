import "./Summary.css";

import { useEffect, useState } from "react";

import Api from "../../Api";
import Spinner from "react-spinner-material";
import axios from "axios";
import { useAsyncError } from "react-router-dom";

const Summary = () => {
  const [loader, setLoader] = useState(false);
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    setLoader(true);
    const getSummary = async () => {
      const res = await axios
        .get(Api.getSummary, {
          headers: { Authorization: `${localStorage.facultyToken}` },
        })
        .catch((err) => console.log(err));
      if (res) {
        console.warn(res.data);
        setSummary(res.data.data.BranchWiseDistinction);
        setLoader(false);
      }
    };
    getSummary();
  }, []);

  return (
    <div className="bar" style={{ overflow: "hidden" }}>
      <div
        className="card__summary card"
        style={{ backgroundColor: "#065b9a" }}
      >
        <div className="card-body">
          <div style={{ fontWeight: "600", fontSize: "xx-large" }}>Summary</div>
          <br />
          <div style={{ marginTop: "3%", fontSize: "x-large", float: "left" }}>
            Registration Summary
          </div>
        </div>
      </div>
      <div className="row r-1">
        <div
          className="col-sm-11 cd mat__summary"
          style={{
            borderRadius: "20px",
            marginTop: "1.5%",
            marginLeft: "4.3%",
            marginBottom: "2rem",
          }}
        >
          <div className="row hrow">
            <div className=" col-md b ">Percentage</div>
            <div className="col-md b ">Branch</div>
            <div className="col-md b ">Remaining</div>
            <div className="col-md b ">Registered</div>
            <div className="col-md b ">Total</div>
          </div>
          {loader && (
            <div>
              <div
                className="spin"
                style={{ margin: "auto", width: "fit-content" }}
              >
                <Spinner
                  radius={30}
                  color={"blue"}
                  stroke={3}
                  visible={true}
                ></Spinner>
              </div>
            </div>
          )}
          {summary.map((data, index) => {
            return (
              <div className="row trow" key={data._id}>
                <div className=" col-md b ">
                  <span
                    className="badge badge-primary "
                    style={{ fontSize: "1.5em" }}
                  >
                    {data.percentage}%
                  </span>
                </div>
                <div className="col-md b " data-label="Branch ">
                  {data._id}
                </div>
                <div className="col-md b " data-label="Remaining ">
                  {data.totalLeft}
                </div>
                <div className="col-md b " data-label="Registered ">
                  {data.totalRegesteredStudents}
                </div>
                <div className="col-md b " data-label="Total ">
                  {data.totalStudents}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Summary;
