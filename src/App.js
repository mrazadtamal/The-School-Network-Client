import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrincipalDashboard from "./Pages/PrincipalPanel/PrincipalDashboard/PrincipalDashboard";
import PrincipalHome from "./Pages/PrincipalPanel/PrincipalHome/PrincipalHome";
import PrincipalPublishNotice from "./Pages/PrincipalPanel/PrincipalPublishNotice/.PrincipalPublishNotice";
import TeachersPanel from "./Pages/TeachersPanel/TeachersPanel/TeachersPanel";
import TeachersPanelBody from "./Pages/TeachersPanel/TeachersPanelBody/TeachersPanelBody";
import HomePage from "./Pages/AllUser/HomePageComponents/HomePage";
import LogInPage from "./Pages/AllUser/Login/LogInPage";
// student imports
import StudentDashboard from "./Pages/StudentPanel/StudentDashboard/StudentDashboard";
import StudentHome from "./Pages/StudentPanel/StudentHome/StudentHome";
import RequestCare from "./Pages/StudentPanel/RequestCare/RequestCare";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* --------------All User Homepage Routes Start--------------- */}

          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={<LogInPage/>}/>

          {/* --------------All User Homepage Routes End--------------- */}
          {/* --------------Principal Routes Start--------------- */}

          <Route path="/PrincipalDashboard" element={<PrincipalDashboard />}>
            <Route path="/PrincipalDashboard" element={<PrincipalHome />} />
            <Route
              path="/PrincipalDashboard/PrincipalPublishNotice"
              element={<PrincipalPublishNotice />}
            />
          </Route>

          {/* --------------Principal Routes End--------------- */}

          {/* --------------Teacher Routes Start */}
          <Route path="/TeachersDashboard" element={<TeachersPanel />}>
            <Route
              path="/TeachersDashboard"
              element={<TeachersPanel />}
            ></Route>
          </Route>
          {/* --------------Teacher Routes End-------------- */}
          {/* --------------------student route start-----------------------*/}
          <Route path="/StudentDashboard" element={<StudentDashboard />}>
            <Route path="/StudentDashboard" element={<StudentHome />}/>
            <Route path="/StudentDashboard/RequestCare" element={<RequestCare />}/>
          </Route>
          {/* --------------------student route end-------------------------*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
