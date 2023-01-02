import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { Route, Routes } from "react-router";

import Faculty from "./components/Faculty/Faculty";
import Home from "./components/Home/Home";
import { BrowserRouter as Router } from "react-router-dom";
import Student from "./components/Student/Student";
import { ToastContainer } from "react-toastify";
import CreateStudent from "./components/CreateStudent/CreateStudent";
import Dashboard from "./components/Dashboard/Dashboard";
import CreateFaculty from "./components/CreateFaculty/CreateFaculty";
import RegisteredStudent from "./components/RegisteredStudent/RegisteredStudent";
import ManageStudent from "./components/ManageStudent/ManageStudent";
import CreateLibraryDue from "./components/CreateLibraryDue/CreateLibraryDue";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="student" element={<Student />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="facultypage/dashboard" element={<Dashboard />} />
          <Route path="facultypage/createfaculty" element={<CreateFaculty />} />
          <Route path="facultypage/createstd" element={<CreateStudent />} />
          <Route
            path="facultypage/registeredstd"
            element={<RegisteredStudent />}
          />
          <Route path="facultypage/managestudent" element={<ManageStudent />} />
          <Route
            path="/facultypage/create-lib-due"
            element={<CreateLibraryDue />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
