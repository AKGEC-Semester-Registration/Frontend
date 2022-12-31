import "./RegisteredStudent.css";
import edit_img from "../../assets/edit.png";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Avatar from "react-avatar";
import Api from "../../Api";

const RegisteredStudent = () => {
  const [loader, setLoader] = useState(false);
  const [createStd, setCreateStd] = useState({
    branch: "",
    year: "",
  });
  const [faculty_current, setFacultyCurrent] = useState("");
  const [students, setStudents] = useState();
  const [totalRecords, setTotalRecords] = useState("");

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

  const func2 = () => {
    getFilterRegUrl(createStd.branch, createStd.year);
  };

  const getRegStd = async () => {
    const res = await axios
      .get(Api.getregstdUrl, {
        headers: { Authorization: `${localStorage.facultyToken}` },
      })
      .catch((err) => console.log(err));
    if (res) {
      console.log(res);
      setStudents(res.data.data);
      setTotalRecords(res.data.length);
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
  }, []);

  const openDialog = () => {
    
  }

  return (
    <section>
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
                <h2>Registered Students</h2>
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
                <Avatar
                  src={edit_img}
                  onClick={openDialog}
                  className="avatar d-block"
                />
              </div>
            </div>
            <div className="row pt-2">
              <div className="col-12" style={{ textAlignLast: "center" }}>
                <h6>{ faculty_current }</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="row row1">
          <div className="col-9">
            <mat-card className="table_card">
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
                  {loader && (
                    <tr>
                      <td colSpan="5">
                        <div
                          className="spin"
                          style={{ margin: "auto", width: "fit-content" }}
                        >
                          <mat-spinner diameter="50"></mat-spinner>
                        </div>
                      </td>
                    </tr>
                  )}
                  {/* <tr *ngFor="
                  let data of students
                    | paginate
                      : {
                          id: 'pagination',
                          itemsPerPage: 8,
                          currentPage: page,
                          totalItems: totalRecords
                        };
                  let i = index
                ">
                                <th scope="row">{{ i + 1 }}</th>
                                <td>{{ data.full_name }}</td>
                                <td>{{ data.roll_no }}</td>
                                <td>{{ data.branch }}</td>
                                <td>{{ data.year }}</td>
                            </tr> */}
                </tbody>
              </table>
              <div className="page">
                <pagination-controls
                  id="pagination"
                  maxSize="4"
                ></pagination-controls>
              </div>
            </mat-card>
          </div>
          <div className="col-3">
            <mat-card className="subcard" style={{ height: "280px" }}>
              <h3
                style={{
                  color: "black",
                  textAlign: "center",
                  fontWeight: "550",
                }}
              >
                Filter
              </h3>
              <div className="card w-90">
                <div className="card-body">
                  <form onSubmit={func2}>
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
                          value={createStd.year}
                          onChange={e=>setCreateStd({...createStd, year: e.target.value})}
                          style={{
                            backgroundColor: "#065b9a",
                            borderRadius: "20px",
                            color: "white",
                          }}
                        >
                          <option value={""}></option>
                          <option value={"1"}>
                            1st
                          </option>
                          <option value={"2"}>2nd</option>
                          <option value={"3"}>3rd</option>
                          <option value={"4"}>4th</option>
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
                          value={createStd.branch}
                          onChange={e=>setCreateStd({...createStd, branch:e.target.value})}
                          style={{
                            backgroundColor: "#065b9a",
                            borderRadius: "20px",
                            color: "white",
                          }}
                        >
                          <option value={""}></option>
                          <option value={"IT"}>
                            IT
                          </option>
                          <option value={"CSE"}>CSE</option>
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
            </mat-card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisteredStudent;
