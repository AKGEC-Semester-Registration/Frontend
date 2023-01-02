import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { Route, Routes } from "react-router";

import ClearLibraryDue from "./components/ClearLibraryDue/ClearLibraryDue";
import CreateFaculty from "./components/CreateFaculty/CreateFaculty";
import CreateLibraryDue from "./components/CreateLibraryDue/CreateLibraryDue";
import CreateStudent from "./components/CreateStudent/CreateStudent";
import Dashboard from "./components/Dashboard/Dashboard";
import Faculty from "./components/Faculty/Faculty";
import Form from "./components/Form/Form";
import Home from "./components/Home/Home";
import ManageStudent from "./components/ManageStudent/ManageStudent";
import Proceed from "./components/Proceed/Proceed";
import RegisteredStudent from "./components/RegisteredStudent/RegisteredStudent";
import { BrowserRouter as Router } from "react-router-dom";
import Student from "./components/Student/Student";
import Summary from "./components/Summary/Summary";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="student" element={<Student />} />
          <Route path="proceed" element={<Proceed />} />
          <Route path="proceed/form" element={<Form />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="facultypage/dashboard" element={<Dashboard />} />
          <Route path="facultypage/createfaculty" element={<CreateFaculty />} />
          <Route path="facultypage/managestudent" element={<ManageStudent />} />
          <Route
            path="facultypage/create-lib-due"
            element={<CreateLibraryDue />}
          />
          <Route
            path="facultypage/clear-lib-due"
            element={<ClearLibraryDue />}
          />
          <Route path="facultypage/createstd" element={<CreateStudent />} />
          <Route path="facultypage/summary" element={<Summary />} />
          <Route
            path="facultypage/registeredstd"
            element={<RegisteredStudent />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
