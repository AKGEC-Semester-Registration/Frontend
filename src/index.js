import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import { Route, Routes } from "react-router";

import ClearLibraryDue from "./components/ClearLibraryDue/ClearLibraryDue";
import CreateFaculty from "./components/CreateFaculty/CreateFaculty";
import CreateLibraryDue from "./components/CreateLibraryDue/CreateLibraryDue";
import CreateStudent from "./components/CreateStudent/CreateStudent";
import Dashboard from "./components/Dashboard/Dashboard";
import DeleteStudent from "./components/DeleteStudent/DeleteStudent";
import Faculty from "./components/Faculty/Faculty";
import FacultyApp from "./FacultyApp";
import FacultyProtectedRoute from "./util/FacultyProtectedRoute";
import Form from "./components/Form/Form";
import Home from "./components/Home/Home";
import Logout from "./components/Logout/Logout";
import ManageStudent from "./components/ManageStudent/ManageStudent";
import Proceed from "./components/Proceed/Proceed";
import React from "react";
import ReactDOM from "react-dom/client";
import RegisteredStudent from "./components/RegisteredStudent/RegisteredStudent";
import { BrowserRouter as Router } from "react-router-dom";
import Student from "./components/Student/Student";
import StudentApp from "./StudentApp";
import StudentProtectedRoute from "./util/StudentProtectedRoute";
import Submitted from "./components/Submitted/Submitted";
import Summary from "./components/Summary/Summary";
import { ToastContainer } from "react-toastify";
import UpdateFaculty from "./components/UpdateFaculty/UpdateFaculty";
import UpdatePassword from "./components/UpdatePassword/UpdatePassword";
import UpdateStudent from "./components/UpdateStudent/UpdateStudent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ToastContainer />
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="student" element={<Student />} />

        <Route path="faculty" element={<Faculty />} />
        <Route path="/" element={<StudentApp />}>
          <Route
            path="proceed"
            element={
              <StudentProtectedRoute>
                <Proceed />
              </StudentProtectedRoute>
            }
          />
          <Route
            path="submitted"
            element={
              <StudentProtectedRoute>
                <Submitted />
              </StudentProtectedRoute>
            }
          />
          <Route
            path="proceed/form"
            element={
              <StudentProtectedRoute>
                <Form />
              </StudentProtectedRoute>
            }
          />
        </Route>
        <Route path="/" element={<FacultyApp />}>
          <Route
            path="facultypage/dashboard"
            element={
              <FacultyProtectedRoute>
                <Dashboard />
              </FacultyProtectedRoute>
            }
          />
          <Route
            path="facultypage/createfaculty"
            element={
              <FacultyProtectedRoute>
                <CreateFaculty />
              </FacultyProtectedRoute>
            }
          />
          <Route
            path="facultypage/managestudent"
            element={
              <FacultyProtectedRoute>
                <ManageStudent />
              </FacultyProtectedRoute>
            }
          />
          <Route
            path="facultypage/create-lib-due"
            element={
              <FacultyProtectedRoute>
                <CreateLibraryDue />
              </FacultyProtectedRoute>
            }
          />
          <Route
            path="facultypage/clear-lib-due"
            element={
              <FacultyProtectedRoute>
                <ClearLibraryDue />
              </FacultyProtectedRoute>
            }
          />
          <Route
            path="facultypage/update-student"
            element={
              <FacultyProtectedRoute>
                <UpdateStudent />
              </FacultyProtectedRoute>
            }
          />
          <Route
            path="facultypage/delete-student"
            element={
              <FacultyProtectedRoute>
                <DeleteStudent />
              </FacultyProtectedRoute>
            }
          />
          <Route
            path="facultypage/createstd"
            element={
              <FacultyProtectedRoute>
                <CreateStudent />
              </FacultyProtectedRoute>
            }
          />
          <Route
            path="facultypage/summary"
            element={
              <FacultyProtectedRoute>
                <Summary />
              </FacultyProtectedRoute>
            }
          />
          <Route
            path="facultypage/registeredstd"
            element={
              <FacultyProtectedRoute>
                <RegisteredStudent />
              </FacultyProtectedRoute>
            }
          />
          <Route
            path="facultypage/update-faculty"
            element={
              <FacultyProtectedRoute>
                <UpdateFaculty />
              </FacultyProtectedRoute>
            }
          />
          <Route
            path="facultypage/update-password"
            element={
              <FacultyProtectedRoute>
                <UpdatePassword />
              </FacultyProtectedRoute>
            }
          />
          <Route
            path="facultypage/logout"
            element={
              <FacultyProtectedRoute>
                <Logout />
              </FacultyProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  </>
);
