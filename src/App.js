import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { Route, Routes } from "react-router";

import Faculty from "./components/Faculty/Faculty";
import Home from "./components/Home/Home";
import { BrowserRouter as Router } from "react-router-dom";
import CreateStudent from "./components/CreateStudent/CreateStudent";
import Student from "./components/Student/Student";
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
          <Route path="faculty" element={<Faculty />} />
          <Route path="faculty/createStudent" element={<CreateStudent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
