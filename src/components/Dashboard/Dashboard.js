import "./Dashboard.css";

import { React, useEffect, useState } from "react";

import Api from "../../Api";
import axios from "axios";
import regd_students from "../../assets/Registered Students.svg";
import total_admins from "../../assets/Total admins.svg";
import total_students from "../../assets/Total Students.svg";

const Dashboard = () => {
  const [countRegistered, setCountRegistered] = useState(0);
  const [countLeft, setCountLeft] = useState(0);
  const [countStudent, setCountStudent] = useState(0);
  const fetchCounts = async () => {
    const res = await axios
      .get(Api.countUrl, {
        headers: { Authorization: `${localStorage.facultyToken}` },
      })
      .catch((err) => {
        console.log(err);
      });
    if (res) {
      console.warn(res);
      setCountRegistered(res.data.data.registered);
      setCountStudent(res.data.data.student);
      setCountLeft(res.data.data.left);
    }
  };
  useEffect(() => {
    fetchCounts();
  }, []);
  return (
    <div className="partition">
      <div className="container-fluid container-fluid__dash">
        <h1 style={{ color: "#065b9a" }} className="pl-4 pl-4__dash h1__dash">
          Admin Dashboard
        </h1>
        <br />
        <br />
        <div className="card card__dash py-5 py-5__dash card-1 card-1__dash">
          <ul className="navbar nav">
            <li className="pl-5 pl-5__dash li__dash">
              <div className="card card__dash card-2 card-2__dash py-3 py-3__dash">
                <div className="row row__dash">
                  <div className="card card__dash card-3 card-3__dash">
                    <img
                      src={total_students}
                      className="icon icon__dash"
                      alt=""
                    />
                  </div>

                  <div className="text text__dash">
                    <h5 className="h5__dash">
                      Total <br />
                      Students
                    </h5>
                    <h2 style={{ color: "#065b9a" }} className="h2__dash">
                      {countStudent}
                    </h2>
                  </div>
                </div>
              </div>
            </li>
            <li className="px-4 px-4__dash li__dash">
              <div className="card card__dash card-2 card-2__dash py-3 py-3__dash">
                <div className="row row__dash">
                  <div className="card card__dash card-3 card-3__dash">
                    <img
                      src={regd_students}
                      className="icon icon__dash"
                      alt=""
                    />
                  </div>

                  <div className="text text__dash">
                    <h5 className="h5__dash">
                      Registered
                      <br />
                      Student
                    </h5>
                    <h2 style={{ color: "#065b9a" }} className="h2__dash">
                      {countRegistered}
                    </h2>
                  </div>
                </div>
              </div>
            </li>
            <li className="pr-5 pr-5__dash li__dash">
              <div className="card card__dash card-2 card-2__dash py-3 py-3__dash">
                <div className="row row__dash">
                  <div className="card card__dash card-3 card-3__dash">
                    <img
                      src={total_admins}
                      className="icon icon__dash"
                      alt=""
                    />
                  </div>

                  <div className="text text__dash">
                    <h5 className="h5__dash">
                      Remaining
                      <br />
                      Students
                    </h5>
                    <h2 style={{ color: "#065b9a" }} className="h2__dash">
                      {countLeft}
                    </h2>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
