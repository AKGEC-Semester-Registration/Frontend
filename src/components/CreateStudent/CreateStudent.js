import { useState } from "react";
import { toast } from "react-toastify";
import Api from "../../Api";
import "./CreateStudent.css";

const CreateStudent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [createStudent, setCreateStudent] = useState({
    full_name: "",
    roll_no: "",
    student_no: "",
    course: "",
    branch: "",
    year: "",
    mobile: "",
    email: "",
    semester: "",
    father_name: "",
  });
  const handleChange = (event) => {
    setCreateStudent({
      ...createStudent,
      [event.target.name]: event.target.value,
    });
    // console.log(event.target.value);
  }

const handleSubmit = (e) => {
  e.preventDefault();
  // console.log(e.target);
  if (
    createStudent.full_name === "" ||
    createStudent.roll_no === "" ||
    createStudent.student_no === "" ||
    createStudent.course === "" ||
    createStudent.branch === "" ||
    createStudent.year === "" ||
    createStudent.mobile === "" ||
    createStudent.email === "" ||
    createStudent.semester === "" ||
    createStudent.father_name === "" 

  ) {
    toast.warning("Please fill all fields first!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    return;
  }

  setIsLoading(true);
  // api call
}



  return (
    <>
      <div class="container">

<div class="card card-01">
    {/* <!-- <button (click)="create.facultyLogout()" type="submit" class="btn px-3 mr-4" style="width:fit-content; border-radius: 13px;background-color: rgb(204, 45, 45);color: white;right: 0;position: absolute;">
            <h5>Logout</h5>
        </button> --> */}
    <h2>Create Student</h2><br />
    <div>

        <h4 style={{ width: "fit-content", margin: "auto" }}>Add a new student</h4>

    </div>
</div>
<div class="card card-02">
    <form onSubmit={handleSubmit}>
        <div class="form-row">
            <div class="form-group col-md-7">
                <label for="inputName">Full Name :</label>
                <input type="text" class="form-control" id="inputName" name="full_name" onChange={handleChange} value={createStudent.full_name} />
            </div>
            <div class="form-group col-md-5">
                <label for="inputRollno">Roll No. :</label>
                <input type="number" class="form-control" id="inputRollno" name="roll_no" onChange={handleChange} value={createStudent.roll_no} />
            </div>
        </div>

        <div class="form-row">
            <div class="form-group col-md-4">
                <label for="inputStdno">Student No. :</label>
                <input type="text" class="form-control" id="inputStdno" name="student_no" onChange={handleChange} value={createStudent.student_no} />
            </div>
            <div class="form-group col-md-3">
                <label for="inputCourse">Course :</label>
                <select id="inputCourse" class="form-control" name="course" onChange={handleChange} value={createStudent.course}>
              <option selected>Course</option>
              <option>B.Tech</option>
              <option>MCA</option>
              <option>MBA</option>  
            </select>
            </div>
            <div class="form-group col-md-3">
                <label for="inputBranch">Branch :</label>
                <select id="inputBranch" class="form-control" name="branch" onChange={handleChange} value={createStudent.branch}>
              <option selected>Branch</option>
              <option>CSE</option>
              <option>IT</option>
              <option>ECE</option>
              <option>CE</option>
              <option>ME</option>
              <option>EI</option>
            </select>
            </div>
            <div class="form-group col-md-2">
                <label for="inputYear">Year :</label>
                <select id="inputYear" class="form-control" name="year" onChange={handleChange} value={createStudent.year}>
              <option selected>Year</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-5">
                <label for="inputPhone">Phone No. :</label>
                <input type="number" class="form-control" id="inputPhone" name="mobile" onChange={handleChange} value={createStudent.mobile} />
            </div>
            <div class="form-group col-md-5">
                <label for="inputEmail">Email :</label>
                <input type="email" class="form-control" id="inputEmail" name="email" onChange={handleChange} value={createStudent.email} />
            </div>
            <div class="form-group col-md-2">
                <label for="inputSem">Sem :</label>
                <select id="inputSem" class="form-control" name="semester" onChange={handleChange} value={createStudent.semester}>
              <option selected>Semester</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </select>
            </div>

        </div>
        <div class="form-row">
            <div class="form-group col-md-7">
                <label for="inputfather">Father's Name :</label>
                <input type="text" class="form-control" id="inputfather" name="father_name" onChange={handleChange} value={createStudent.father_name} />
            </div>

            <div class=" col-md-5">
                <label style={{ color: "transparent" }}>submit</label>
                <div class="form-group grp">
                  {!isLoading && (<button type="submit" class="btn btn-blue px-5 py-1">SUBMIT</button>)}
                  {isLoading && (<button type="submit" class="btn btn-blue px-5 py-1"><span class="spinner-border "></span></button>)}
                </div>
            </div>
        </div>

    </form>
</div>
</div>
    </>
  );
};

export default CreateStudent;
