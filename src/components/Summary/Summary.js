import "./Summary.css";

import { useEffect, useState } from "react";

import Api from "../../Api";
import Spinner from "react-spinner-material";
import axios from "axios";

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
    <div className="bar bar__summary" style={{ overflow: "hidden" }}>
      <div
        className="card__summary card"
        style={{ backgroundColor: "#065b9a" }}
      >
        <div className="card-body card-body__summary">
          <div style={{ fontWeight: "600", fontSize: "xx-large" }}>Summary</div>
          <br />
          <div style={{ marginTop: "3%", fontSize: "x-large", float: "left" }}>
            Registration Summary
          </div>
        </div>
      </div>
      <div className="row r-1 row__summary r-1__summary">
        <div
          className="col-sm-11 col-sm-11__summary cd cd__summary mat__summary"
          style={{
            borderRadius: "20px",
            marginTop: "1.5%",
            marginLeft: "4.3%",
            marginBottom: "2rem",
          }}
        >
          <div className="row hrow row__summary hrow__summary">
            <div className="col-md col-md__summary b b__summary">
              Percentage
            </div>
            <div className="col-md col-md__summary b b__summary">Branch</div>
            <div className="col-md col-md__summary b b__summary">Remaining</div>
            <div className="col-md col-md__summary b b__summary">
              Registered
            </div>
            <div className="col-md col-md__summary b b__summary">Total</div>
          </div>
          {loader && (
            <div>
              <div
                className="spin spin__summary"
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
              <div
                className="row row__summary trow trow__summary"
                key={data._id}
              >
                <div className=" col-md b col-md__summary b__summary">
                  <span
                    className="badge badge__summary badge-primary badge-primary__summary"
                    style={{ fontSize: "1.5em" }}
                  >
                    {data.percentage}%
                  </span>
                </div>
                <div
                  className="col-md b col-md__summary b__summary"
                  data-label="Branch "
                >
                  {data._id}
                </div>
                <div
                  className="col-md b col-md__summary b__summary"
                  data-label="Remaining "
                >
                  {data.totalLeft}
                </div>
                <div
                  className="col-md b col-md__summary b__summary"
                  data-label="Registered "
                >
                  {data.totalRegesteredStudents}
                </div>
                <div
                  className="col-md b col-md__summary b__summary"
                  data-label="Total "
                >
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
