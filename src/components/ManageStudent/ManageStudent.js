import "./ManageStudent.css";
import { Link } from "react-router-dom";
import FacultyPopup from "./../FacultyPopup/FacultyPopup";
import { React, useState, useForm, useEffect } from "react";
import editimg from "../../assets/edit.png";
import jwtDecode from "jwt-decode";
import Api from "../../Api";
import axios from "axios";
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
        <div className="container">
          <div
            className="row m-3 p-3"
            style={{
              backgroundColor: "#065b9a",
              color: "white",
              borderRadius: "20px",
            }}
          >
            <div className="col-10 m-auto">
              <div className="row">
                <div className="col-12">
                  <h2>Manage Students</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <h4 style={{ fontWeight: "lighter" }}>
                    List of all the students
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="row pt-2">
                <div className="col-12" style={{ textAlign: "-webkit-center" }}>
                  <img
                    src={editimg}
                    onClick={openDialog}
                    className="avatar d-block"
                  />
                </div>
              </div>
              <div className="row pt-2">
                <div className="col-12" style={{ textAlignLast: "center" }}>
                  <h6>{facultyCurrent}</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row row1">
            <div className="col-9">
              <mat-card className="table_card main_table">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">S.No.</th>
                      <th scope="col">Name</th>
                      <th scope="col">Roll No.</th>
                      <th scope="col">Branch</th>
                      <th scope="col">Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading && (
                      <tr>
                        <td colSpan="5">
                          <div
                            className="spin"
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
                        <tr key={i}>
                          <td>{i}</td>
                          <td>{data.full_name}</td>
                          <td>{data.roll_no}</td>
                          <td>{data.branch}</td>
                          <td>{data.year}</td>
                        </tr>;
                      })}
                  </tbody>
                </table>
                <br />
                <div className="page">
                  <pagination-controls></pagination-controls>
                </div>
              </mat-card>
            </div>
            <div className="col-3">
              <mat-card className="subcard">
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
                <div className="card w-90 sub">
                  <div className="card-body">
                    <form>
                      <div className="row">
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
                            className="form-control"
                            name="year"
                            style={{
                              backgroundColor: "#065b9a",
                              borderRadius: "20px",
                              color: "white",
                            }}
                          >
                            <option value="1">1st</option>
                            <option value="2">2nd</option>
                            <option value="3">3rd</option>
                            <option value="4">4th</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
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
                            className="form-control"
                            name="branch"
                            style={{
                              backgroundColor: "#065b9a",
                              borderRadius: "20px",
                              color: "white",
                            }}
                          >
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
                        className="btn btn-primary btn-lg"
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
                <div className="card w-90 sub">
                  <div className="card-body">
                    <Link
                      to="/facultypage/create-lib-due"
                      // routerLinkActive="active"
                    >
                      <button
                        type="button"
                        className="btn btn-primary btn-lg"
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
                        className="btn btn-primary btn-lg"
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
                        className="btn btn-primary btn-lg"
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
                        className="btn btn-primary btn-lg"
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
              </mat-card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageStudent;
