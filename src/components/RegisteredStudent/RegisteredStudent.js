import "./RegisteredStudent.css";

import { useEffect, useState } from "react";

import Api from "../../Api";
import { Dialog } from "@mui/material";
import FacultyPopup from "../FacultyPopup/FacultyPopup";
import ReactPaginate from "react-paginate";
import Spinner from "react-spinner-material";
import axios from "axios";
import edit_img from "../../assets/edit.png";
import jwt_decode from "jwt-decode";

const RegisteredStudent = () => {
  const [loader, setLoader] = useState(false);
  const [createStd, setCreateStd] = useState({
    branch: "",
    year: "",
  });
  const [faculty_current, setFacultyCurrent] = useState("");
  const [students, setStudents] = useState([]);
  const [totalRecords, setTotalRecords] = useState("");
  const [open, setOpen] = useState(false);

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 8;
  const pagesVisited = pageNumber * usersPerPage;
  const displayStudents = students
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((data, i) => {
      return (
        <tr key={data._id}>
          <th scope="row">{usersPerPage * pageNumber + i + 1}</th>
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

  const getFilterRegUrl = async (branch, year) => {
    var url = "";
    if (branch === "" && year === "") {
      url = Api.filterrgstUrl;
    } else if (branch === "" && year !== "") {
      url = Api.filterrgstUrl + "year=" + year;
    } else if (branch !== "" && year === "") {
      url = Api.filterrgstUrl + "branch=" + branch;
    } else {
      url = Api.filterrgstUrl + "year=" + year + "&branch=" + branch;
    }
    const res = await axios
      .get(url, {
        headers: { Authorization: `${localStorage.facultyToken}` },
      })
      .catch((err) => console.log(err));
    if (res) {
      setStudents(res.data.data);
    }
  };

  const func2 = (e) => {
    e.preventDefault();
    setPageNumber(0);
    getFilterRegUrl(createStd.branch, createStd.year);
  };

  const getRegStd = async () => {
    const res = await axios
      .get(Api.getregstdUrl, {
        headers: { Authorization: `${localStorage.facultyToken}` },
      })
      .catch((err) => console.log(err));
    if (res) {
      console.log(res.data);
      setStudents(res.data.data);
      setTotalRecords(res.data.data.length);
      setLoader(false);
    }
  };

  useEffect(() => {
    setLoader(true);
    var token = localStorage.getItem("facultyToken");
    var decoded = jwt_decode(token);
    localStorage.setItem("facultyName", decoded.name);
    setFacultyCurrent(decoded.name);
    console.warn(faculty_current);
    getRegStd();
    setLoader(false);
  }, []);

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
    <section>
      <Dialog open={open} onClose={handleClose} maxWidth={"xs"}>
        <FacultyPopup onSuccessfulClose={successfulCloseHandler} />
      </Dialog>
      <div className="container container__rs">
        <div
          className="row row__rs m-3 p-3"
          style={{
            backgroundColor: "#065b9a",
            color: "white",
            borderRadius: "20px",
          }}
        >
          <div className="col-10 col-10__rs m-auto">
            <div className="row row__rs">
              <div className="col-12 col-12__rs">
                <h2 style={{ textAlign: "left" }} className="h2__rs">
                  Registered Students
                </h2>
              </div>
            </div>
            <div className="row row__rs">
              <div className="col-12 col-12__rs">
                <h4 style={{ fontWeight: "lighter" }} className="h4__rs">
                  List of all the students
                </h4>
              </div>
            </div>
          </div>
          <div className="col-2 col-2__rs">
            <div className="row row__rs pt-2">
              <div
                className="col-12 col-12__rs"
                style={{ textAlign: "-webkit-center" }}
              >
                <img
                  src={edit_img}
                  onClick={openDialog}
                  className="avatar avatar__rs d-block d-block__rs"
                  alt=""
                />
              </div>
            </div>
            <div className="row row__rs pt-2">
              <div
                className="col-12 col-12__rs"
                style={{ textAlignLast: "center" }}
              >
                <h6 className="h6__rs">{faculty_current}</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="row row__rs row1 row__rs">
          <div className="col-9 col-9__rs">
            <div className="table_card table_card__rs">
              <table className="table table__rs table-hover table-hover__rs">
                <thead>
                  <tr>
                    <th scope="col col__rs">S.No.</th>
                    <th scope="col col__rs">Name</th>
                    <th scope="col col__rs">Roll No.</th>
                    <th scope="col col__rs">Branch</th>
                    <th scope="col col__rs">Year</th>
                  </tr>
                </thead>
                <tbody>
                  {loader && (
                    <tr>
                      <td colSpan="5">
                        <div
                          className="spin spin__rs"
                          style={{ margin: "auto", width: "fit-content" }}
                        >
                          <Spinner
                            radius={30}
                            color={"blue"}
                            stroke={3}
                            visible={true}
                          ></Spinner>
                        </div>
                      </td>
                    </tr>
                  )}
                  {displayStudents}
                </tbody>
              </table>
              <div className="pg__rs">
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
          <div className="col-3 col-3__rs">
            <div className="subcard subcard__rs" style={{ height: "280px" }}>
              <h3
                className="h3__rs"
                style={{
                  color: "black",
                  textAlign: "center",
                  fontWeight: "550",
                }}
              >
                Filter
              </h3>
              <div className="card w-90 card__rs">
                <div className="card-body card-body__rs">
                  <form onSubmit={func2}>
                    <div className="row row__rs">
                      <div
                        className="col-5 col-5__rs"
                        style={{ lineHeight: "2.5" }}
                      >
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
                      <div
                        className="col-7 col-7__rs"
                        style={{ lineHeight: "2.5" }}
                      >
                        <select
                          id="inputCourse"
                          className="form-control form-control__rs"
                          name="year"
                          value={createStd.year}
                          onChange={(e) =>
                            setCreateStd({ ...createStd, year: e.target.value })
                          }
                          style={{
                            backgroundColor: "#065b9a",
                            borderRadius: "20px",
                            color: "white",
                          }}
                        >
                          <option value={""}></option>
                          <option value={"1"}>1st</option>
                          <option value={"2"}>2nd</option>
                          <option value={"3"}>3rd</option>
                          <option value={"4"}>4th</option>
                        </select>
                      </div>
                    </div>
                    <div className="row row__rs">
                      <div
                        className="col-5 col-5__rs"
                        style={{ lineHeight: "2.5" }}
                      >
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
                      <div
                        className="col-7 col-7__rs"
                        style={{ lineHeight: "2.5" }}
                      >
                        <select
                          id="inputCourse"
                          className="form-control form-control__rs"
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
                          <option value={""}></option>
                          <option value={"IT"}>IT</option>
                          <option value={"CSE"}>CSE</option>
                          <option value={"CS"}>CS</option>
                          <option value={"ECE"}>ECE</option>
                          <option value={"EN"}>EN</option>
                          <option value={"CE"}>CE</option>
                          <option value={"ME"}>ME</option>
                          <option value={"EI"}>EI</option>
                        </select>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn__rs btn-primary btn-primary__rs btn-lg btn-lg__rs"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisteredStudent;
