import "./ManageStudent.css";

import { React, useEffect, useForm, useState } from "react";

import Api from "../../Api";
import { Dialog } from "@mui/material";
import FacultyPopup from "./../FacultyPopup/FacultyPopup";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Spinner from "react-spinner-material";
import axios from "axios";
import editimg from "../../assets/edit.png";
import jwt_decode from "jwt-decode";

const ManageStudent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [totalRecords, setTotalRecords] = useState("");
  const [open, setOpen] = useState(false);
  const [createStd, setCreateStd] = useState({
    branch: "",
    year: "",
  });
  const [facultyCurrent, setFacultyCurrent] = useState("");
  const [students, setStudents] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 8;
  const pagesVisited = pageNumber * usersPerPage;
  const displayStudents = students
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((data, i) => {
      return (
        <tr key={usersPerPage * pageNumber + i + 1}>
          <td>{usersPerPage * pageNumber + i + 1}</td>
          <td>{data.full_name}</td>
          <td>{data.roll_no}</td>
          <td>{data.branch}</td>
          <td>{data.year}</td>
        </tr>
      );
    });

  const pageCount = Math.ceil(students.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const getFilteredStd = async (branch, year) => {
    var url = "";
    if (branch === "" && year === "") {
      url = Api.filterstdUrl;
    } else if (branch === "" && year !== "") {
      url = Api.filterstdUrl + "year=" + year;
    } else if (branch !== "" && year === "") {
      url = Api.filterstdUrl + "branch=" + branch;
    } else {
      url = Api.filterstdUrl + "year=" + year + "&branch=" + branch;
    }
    const res = await axios
      .get(url, {
        headers: { Authorization: `${localStorage.facultyToken}` },
      })
      .catch((err) => console.log(err));
    if (res) {
      setStudents(res.data.data);
      console.log(res.data.data);
      setTotalRecords(res.data.data.length);
    }
  };

  const getStd = async () => {
    const res = await axios
      .get(Api.getstdUrl, {
        headers: { Authorization: `${localStorage.facultyToken}` },
      })
      .catch((err) => console.log(err));
    if (res) {
      setStudents(res.data.data);
      setTotalRecords(res.data.data.length);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);

    setFacultyCurrent(localStorage.getItem("facultyName"));

    // getStudents();
    getStd();
    setIsLoading(false);
  }, []);

  const handleFilterFunc = (e) => {
    e.preventDefault();
    setPageNumber(0);
    getFilteredStd(createStd.branch, createStd.year);
  };

  const openDialog = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const successfulCloseHandler = (res) => {
    if (res) setOpen(false);
  };
  return (
    <>
      <section>
        <Dialog open={open} onClose={handleClose} maxWidth={"xs"}>
          <FacultyPopup onSuccessfulClose={successfulCloseHandler} />
        </Dialog>
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

                    {!isLoading && displayStudents}
                  </tbody>
                </table>
                <br />
                <div className="page page__ms">
                  <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                  ></ReactPaginate>
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
                    <form onSubmit={handleFilterFunc}>
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
                            value={createStd.year}
                            onChange={(e) =>
                              setCreateStd({
                                ...createStd,
                                year: e.target.value,
                              })
                            }
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
                            value={createStd.branch}
                            onChange={(e) =>
                              setCreateStd({
                                ...createStd,
                                branch: e.target.value,
                              })
                            }
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
