import "./Dashboard.css";
import { React, useState, useEffect } from "react";
import Api from "../../Api";
import axios from "axios";
import total_admins from "../../assets/Total admins.svg";
import regd_students from "../../assets/Registered Students.svg";
import total_students from "../../assets/Total Students.svg";
const Dashboard = () => {
  const [countRegistered, setCountRegistered] = useState(0);
  const [countLeft, setCountLeft] = useState(0);
  const [countStudent, setCountStudent] = useState(0);
  const fetchCounts = async() => {
    const res = await axios.get(Api.countUrl, {
      headers: { Authorization: `${localStorage.facultyToken}` },
    }).catch((err) => {
      console.log(err);
    });
    if(res) {
      console.warn(res);
      setCountRegistered(res.data.data.registered);
      setCountStudent(res.data.data.student);
      setCountLeft(res.data.data.left);
    }
  }
  useEffect(() => {
    fetchCounts();
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <h1 style={{ color: "#065b9a" }} className="pl-4">
          Admin Dashboard
        </h1>
        <br />
        <br />
        <div className="card py-5 card-1">
          <ul className="navbar nav">
            <li className="pl-5">
              <div className="card card-2 py-3">
                <div className="row">
                  <div className="card card-3">
                    <img src={total_students} className="icon" />
                  </div>

                  <div className="text">
                    <h5>
                      Total <br />
                      Students
                    </h5>
                    <h2 style={{ color: "#065b9a" }}>{countStudent}</h2>
                  </div>
                </div>
              </div>
            </li>
            <li className="px-4">
              <div className="card card-2 py-3">
                <div className="row">
                  <div className="card card-3">
                    <img src={regd_students} className="icon" />
                  </div>

                  <div className="text">
                    <h5>
                      Registered
                      <br />
                      Student
                    </h5>
                    <h2 style={{ color: "#065b9a" }}>{countRegistered}</h2>
                  </div>
                </div>
              </div>
            </li>
            <li className="pr-5">
              <div className="card card-2 py-3">
                <div className="row">
                  <div className="card card-3">
                    <img src={total_admins} className="icon" />
                  </div>

                  <div className="text">
                    <h5>
                      Remaining
                      <br />
                      Students
                    </h5>
                    <h2 style={{ color: "#065b9a" }}>{countLeft}</h2>
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
