import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { Route, Routes } from "react-router";

import Faculty from "./components/Faculty/Faculty";
import Home from "./components/Home/Home";
import { BrowserRouter as Router } from "react-router-dom";
import Student from "./components/Student/Student";
import { ToastContainer } from "react-toastify";
import CreateStudent from "./components/CreateStudent/CreateStudent";

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
          <Route path="facultypage/createstd" element={<CreateStudent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
