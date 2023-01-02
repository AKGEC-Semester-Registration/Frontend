import "./ManageStudent.css";

import { React, useEffect, useForm, useState } from "react";

import Api from "../../Api";
import FacultyPopup from "./../FacultyPopup/FacultyPopup";
import { Link } from "react-router-dom";
import axios from "axios";
import editimg from "../../assets/edit.png";
import jwt_decode from "jwt-decode";

const ManageStudent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [stdList, setStdList] = useState([]);
  const [totalRecords, setTotalRecords] = useState("");
  const [page, setPage] = useState(1);
  const [index, setIndex] = useState();
  const [len, setLen] = useState();
  const [createstudent, setCreatestudent] = useState({
    branch: "",
    year: "",
  });
  const [facultyCurrent, setFacultyCurrent] = useState();
  const [students, setStudents] = useState([]);
  // const [createstudentForm] = useForm(null);
  const getStudents = async () => {
    const res = await axios
      .get(Api.getStdlist, {
        headers: { Authorization: `${localStorage.facultyToken}` },
      })
      .catch((err) => {
        console.log(err);
      });
    if (res) {
      console.log(res.data.data);
      setStudents(res.data.data);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    setIsLoading(true);

    setFacultyCurrent(localStorage.getItem("facultyName"));

    getStudents();
  }, []);
  const openDialog = () => {};
  return (
    <>
      <section>
        {/* <FacultyPopup /> */}
        <div className="container container__ms">
          <div
            className="row row__ms m-3 p-3"
            style={{
              backgroundColor: "#065b9a",
              color: "white",
              borderRadius: "20px",
            }}
          >
            <div className="col-10 m-auto">
              <div className="row row__ms">
                <div className="col-12">
                  <h2>Manage Students</h2>
                </div>
              </div>
              <div className="row row__ms">
                <div className="col-12">
                  <h4 style={{ fontWeight: "lighter" }}>
                    List of all the students
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="row row__ms pt-2">
                <div className="col-12" style={{ textAlign: "-webkit-center" }}>
                  <img
                    src={editimg}
                    onClick={openDialog}
                    className="avatar avatar__ms d-block d-block__ms"
                    alt=""
                  />
                </div>
              </div>
              <div className="row row__ms pt-2">
                <div className="col-12" style={{ textAlignLast: "center" }}>
                  <h6>{facultyCurrent}</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row row1 row__ms row1__ms">
            <div className="col-9">
              <div className="table_card__ms main_table__ms main_table">
                <table className="table table__ms table-hover__ms table-hover">
                  <thead>
                    <tr>
                      <th scope="col col__ms">S.No.</th>
                      <th scope="col col__ms">Name</th>
                      <th scope="col col__ms">Roll No.</th>
                      <th scope="col col__ms">Branch</th>
                      <th scope="col col__ms">Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading && (
                      <tr>
                        <td colSpan="5">
                          <div
                            className="spin spin__ms"
                            style={{ margin: "auto", width: "fit-content" }}
                          >
                            <span className="spinner-border"></span>
                            {/* <mat-spinner diameter="50"></mat-spinner> */}
                          </div>
                        </td>
                      </tr>
                    )}

                    {!isLoading &&
                      students.map((data, i) => {
                        return (
                          <tr key={i}>
                            <td>{i}</td>
                            <td>{data.full_name}</td>
                            <td>{data.roll_no}</td>
                            <td>{data.branch}</td>
                            <td>{data.year}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
                <br />
                <div className="page page__ms">
                  <pagination-controls></pagination-controls>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="subcard__ms">
                <h3
                  style={{
                    color: "black",
                    textAlign: "center",
                    fontWeight: "550",
                    fontSize: "1.55rem",
                  }}
                >
                  Filter
                </h3>
                <div className="card card__ms w-90 sub sub__ms">
                  <div className="card-body card-body__ms">
                    <form>
                      <div className="row row__ms">
                        <div className="col-5" style={{ lineHeight: "2.5" }}>
                          <p
                            style={{
                              color: "black",
                              fontWeight: "550",
                              float: "left",
                            }}
                          >
                            YEAR
                          </p>
                        </div>
                        <div className="col-7" style={{ lineHeight: "2.5" }}>
                          <select
                            id="inputCourse"
                            className="form-control form-control__ms"
                            name="year"
                            style={{
                              backgroundColor: "#065b9a",
                              borderRadius: "20px",
                              color: "white",
                            }}
                          >
                            <option value=""></option>
                            <option value="1">1st</option>
                            <option value="2">2nd</option>
                            <option value="3">3rd</option>
                            <option value="4">4th</option>
                          </select>
                        </div>
                      </div>
                      <div className="row row__ms">
                        <div className="col-5" style={{ lineHeight: "2.5" }}>
                          <p
                            style={{
                              color: "black",
                              fontWeight: "550",
                              float: "left",
                            }}
                          >
                            BRANCH
                          </p>
                        </div>
                        <div className="col-7" style={{ lineHeight: "2.5" }}>
                          <select
                            id="inputCourse"
                            className="form-control form-control__ms"
                            name="branch"
                            style={{
                              backgroundColor: "#065b9a",
                              borderRadius: "20px",
                              color: "white",
                            }}
                          >
                            <option value=""></option>
                            <option value="IT">IT</option>
                            <option value="CSE">CSE</option>
                            <option value="CSE(AIML)">CSE(AIML)</option>
                            <option value="CSE(HINDI)">CSE(HINDI)</option>
                            <option value="ECE">ECE</option>
                            <option value="EN">EN</option>
                            <option value="CE">CE</option>
                            <option value="AIML">AIML</option>
                            <option value="ME">ME</option>
                            <option value="CSE(DS)">CSE(DS)</option>
                          </select>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn__ms btn-primary btn-lg"
                        style={{
                          backgroundColor: "#065b9a",
                          borderRadius: "18px",
                          fontSize: "0.9rem",
                          width: "80%",
                          marginLeft: "10%",
                          marginRight: "10%",
                        }}
                      >
                        APPLY
                      </button>
                    </form>
                  </div>
                </div>

                <h3
                  style={{
                    color: "black",
                    textAlign: "center",
                    fontWeight: "550",
                    marginTop: "10%",
                    fontSize: "1.55rem",
                  }}
                >
                  Options
                </h3>
                <div className="card card__ms w-90 sub sub__ms">
                  <div className="card-body card-body__ms">
                    <Link
                      to="/facultypage/create-lib-due"
                      // routerLinkActive="active"
                    >
                      <button
                        type="button"
                        className="btn btn__ms btn-primary btn-lg"
                        style={{
                          backgroundColor: "#065b9a",
                          borderRadius: "18px",
                          fontSize: "11px",
                          width: "98%",
                          marginLeft: "1%",
                          marginRight: "1%",
                        }}
                      >
                        Create Lib. Due
                      </button>
                    </Link>
                    <Link
                      to="/facultypage/clear-lib-due"
                      // routerLinkActive="active"
                    >
                      <button
                        type="button"
                        className="btn btn__ms btn-primary btn-lg"
                        style={{
                          backgroundColor: "#065b9a",
                          borderRadius: "18px",
                          fontSize: "11px",
                          width: "98%",
                          marginLeft: "1%",
                          marginRight: "1%",
                          marginTop: "0.6em",
                        }}
                      >
                        Clear Lib. Due
                      </button>
                    </Link>
                    <Link
                      to="/facultypage/update-student"
                      // routerLinkActive="active"
                    >
                      <button
                        type="button"
                        className="btn btn__ms btn-primary btn-lg"
                        style={{
                          backgroundColor: "#065b9a",
                          borderRadius: "18px",
                          fontSize: "11px",
                          width: "98%",
                          marginLeft: "1%",
                          marginRight: "1%",
                          marginTop: "0.6em",
                        }}
                      >
                        Update Student
                      </button>
                    </Link>
                    <Link
                      to="/facultypage/delete-student"
                      // routerLinkActive="active"
                    >
                      <button
                        type="button"
                        className="btn btn__ms btn-primary btn-lg"
                        style={{
                          backgroundColor: "#065b9a",
                          borderRadius: "18px",
                          fontSize: "11px",
                          width: "98%",
                          marginLeft: "1%",
                          marginRight: "1%",
                          marginTop: "0.6em",
                        }}
                      >
                        Delete Student
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageStudent;
