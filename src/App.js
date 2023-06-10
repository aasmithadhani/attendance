
import "./App.css";
import Login from "./Login";

import Class from "./Pages/Class";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import TeacherNewData from "./Pages/TeacherNewData";
import ForgotPassword from "./Pages/ForgotPassword";

import ProfileNew from "./Pages/ProfileNew";
import AttendanceNew from "./Pages/AttendanceNew";
import MyCalender from "./Pages/MyCalender";

function App() {
  // const [superSearch,setSuperSearch] = useState({});
  // const [selectedNews, setSelectedNews] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        {/* <Route exact path='/teacher' element={<Teacher/>}></Route> */}{" "}
        {/*orignal */}
        {/* <Route exact path='/teacher' element={<TeacherNew setSelectedNews={setSelectedNews}/>}></Route>  new */}
        <Route exact path="/teacher" element={<TeacherNewData />}></Route>
        <Route exact path="/calendar" element={<MyCalender/>}></Route>
       
        <Route exact path="/class/:publishedAt" element={<Class />}></Route>
        <Route exact path="/profile" element={<ProfileNew />}></Route>
        <Route exact path="/attendance" element={<AttendanceNew />}></Route>
        <Route
          exact
          path="/forgotPassword"
          element={<ForgotPassword />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
