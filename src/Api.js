const url = "https://akgec-sem-reg-backend.onrender.com/";

const Api = {
  loginStd: url + "student/studentLogin",
  getStdDetails: url + "student/studentDetails",
  facultyLogin: url + "faculty/facultyLogin",
  createstdUrl: url + "faculty/createStudent",
  getstdUrl: url + "faculty/getAllStudents",
  countUrl: url + "faculty/count",
  getregstdUrl: url + "faculty/getAllRegistered",
  registerUrl: url + "student/semesterRegister",
  createlibdueUrl: url + "faculty/createLibDue",
  createfacultyUrl: url + "faculty/createFaculty",
  logoutstdUrl: url + "student/logout",
  filterstdUrl: url + "faculty/getFilteredStudents?",
  filterrgstUrl: url + "faculty/getFilteredRegistered?",
  logoutfacultyUrl: url + "faculty/logout",
  getSummary: url + "faculty/summery",
  getStdlist: url + "faculty/getAllStudents",
  createLibDue: url + "faculty/createLibDue",
};

export default Api;
