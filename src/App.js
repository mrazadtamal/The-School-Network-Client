import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrincipalDashboard from "./Pages/PrincipalPanel/PrincipalDashboard/PrincipalDashboard";
import PrincipalHome from "./Pages/PrincipalPanel/PrincipalHome/PrincipalHome";
import PrincipalPublishNotice from "./Pages/PrincipalPanel/PrincipalPublishNotice/.PrincipalPublishNotice";
import TeachersPanel from "./Pages/TeachersPanel/TeachersPanel/TeachersPanel";
import HomePage from "./Pages/AllUser/HomePageComponents/HomePage";
import LogInPage from "./Pages/AllUser/Login/LogInPage";
import PrincipalAnnouncement from "./Pages/PrincipalPanel/PrincipalAnnouncement/PrincipalAnnouncement";
import PrincipalManageTeacher from "./Pages/PrincipalPanel/PrincipalManageTeacher/PrincipalManageTeacher";
import TeachersPanelHome from "./Pages/TeachersPanel/TeachersPanelHome/TeachersPanelHome";
import TeachersNoticePublish from "./Pages/TeachersPanel/TeachersNoticePublish/TeachersNoticePublish";
import AdmissionPolicy from "./Pages/AllUser/Admission/AdmissionPoliciy";
import HowToApply from "./Pages/AllUser/Admission/HowToApply";
import AdmissionForm from "./Pages/AllUser/Admission/AdmissionForm";
import TeachersClassRoutine from "./Pages/TeachersPanel/TeachersClassRoutine/TeachersClassRoutine";
import TeachersExamRoutine from "./Pages/TeachersPanel/TeachersExamRoutine/TeachersExamRoutine";

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
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/admissionPolicy" element={<AdmissionPolicy />} />
          <Route path="/howtoapply" element={<HowToApply />} />
          <Route path="/admissionForm" element={<AdmissionForm />} />
          AdmissionForm
          {/* --------------All User Homepage Routes End--------------- */}

          {/* --------------Principal Routes Start-------------- */}

          <Route path="/PrincipalDashboard" element={<PrincipalDashboard />}>
            <Route path="/PrincipalDashboard" element={<PrincipalHome />} />
            <Route
              path="/PrincipalDashboard/PrincipalPublishNotice"
              element={<PrincipalPublishNotice />}
            />
            <Route
              path="/PrincipalDashboard/PrincipalAnnouncement"
              element={<PrincipalAnnouncement />}
            />
            <Route
              path="/PrincipalDashboard/PrincipalManageTeacher"
              element={<PrincipalManageTeacher />}
            />
          </Route>
          {/* --------------Principal Routes End--------------- */}
          {/* --------------Teacher Routes Start */}
          <Route path="/TeachersDashboard" element={<TeachersPanel />}>
            <Route path="/TeachersDashboard" element={<TeachersPanelHome />} />
            <Route
              path="/TeachersDashboard/NoticePublish"
              element={<TeachersNoticePublish />}
            />
            <Route
              path="/TeachersDashboard/ClassRoutine"
              element={<TeachersClassRoutine />}
            />
            <Route
              path="/TeachersDashboard/ExamRoutine"
              element={<TeachersExamRoutine />}
            />
          </Route>
          {/* --------------Teacher Routes End-------------- */}
          {/* --------------------student route start-----------------------*/}
          <Route path="/StudentDashboard" element={<StudentDashboard />}>
            <Route path="/StudentDashboard" element={<StudentHome />} />
            <Route
              path="/StudentDashboard/RequestCare"
              element={<RequestCare />}
            />
          </Route>
          {/* --------------------student route end-------------------------*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;