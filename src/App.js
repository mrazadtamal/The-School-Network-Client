import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrincipalDashboard from "./Pages/PrincipalPanel/PrincipalDashboard/PrincipalDashboard";
import PrincipalHome from "./Pages/PrincipalPanel/PrincipalHome/PrincipalHome";
import PrincipalPublishNotice from "./Pages/PrincipalPanel/PrincipalPublishNotice/PrincipalPublishNotice";
import TeachersPanel from "./Pages/TeachersPanel/TeachersPanel/TeachersPanel";
import HomePage from "./Pages/AllUser/HomePageComponents/HomePage";
import AllNotices from "./Pages/AllUser/HomePageComponents/AllNotices";
import LogInPage from "./Pages/AllUser/Login/LogInPage";
import PrincipalAnnouncement from "./Pages/PrincipalPanel/PrincipalAnnouncement/PrincipalAnnouncement";
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
import PrincipalManageTeacher from "./Pages/PrincipalPanel/PrincipalManageTeacher/PrincipalManageTeacher";
import RegisterTeacher from "./Pages/PrincipalPanel/RegisterTeacher/RegisterTeacher";
import PrincipalManageStudent from "./Pages/PrincipalPanel/PrincipalManageStudent/PrincipalManageStudent";
import UploadPayment from "./Pages/PrincipalPanel/UploadPayment/UploadPayment";
import Canteen from "./Pages/AllUser/Facilities/Canteen";
import Library from "./Pages/AllUser/Facilities/Library";
import Auditoraim from "./Pages/AllUser/Facilities/Auditoraim";
import Games from "./Pages/AllUser/Facilities/Games";
import AboutUsPage from "./Pages/AllUser/HomePageComponents/AboutUsPage/AboutUsPage";
import TeachersRegisterStudent from "./Pages/TeachersPanel/TeachersRegisterStudent/TeachersRegisterStudent";
import StudentMyDocuments from "./Pages/StudentPanel/StudentDashboard/StudentMyDocuments/StudentMyDocuments";
import StudentPay from "./Pages/StudentPanel/StudentPay/StudentPay";
import StAnalytics from "./Pages/StudentPanel/StudentDashboard/StAnalytics/StAnalytics";
import ResultAdd from "./Pages/Shared/ResultAdd/ResultAdd";
import TeachersAssignment from "./Pages/TeachersPanel/TeachersAssignment/TeachersAssignment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* --------------All User Homepage Routes Start--------------- */}
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/admissionPolicy" element={<AdmissionPolicy />} />
          <Route path="/howtoapply" element={<HowToApply />} />
          <Route path="/admissionForm" element={<AdmissionForm />} />

          {/* --------------All User Homepage Routes End--------------- */}

          {/* --------------All User Homepage Routes End--------------- */}

          <Route path="/canteen" element={<Canteen />} />
          <Route path="/library" element={<Library />} />
          <Route path="/auditoriam" element={<Auditoraim />} />
          <Route path="/games" element={<Games />} />
          <Route path="/allnotice" element={<AllNotices />} />
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
            <Route
              path="/PrincipalDashboard/RegisterTeacher"
              element={<RegisterTeacher />}
            />
            <Route
              path="/PrincipalDashboard/PrincipalManageStudent"
              element={<PrincipalManageStudent />}
            />
            <Route
              path="/PrincipalDashboard/UploadPayment"
              element={<UploadPayment />}
            />
            <Route
              path="/PrincipalDashboard/ResultAdd"
              element={<ResultAdd />}
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
            <Route
              path="/TeachersDashboard/RegisterStudent"
              element={<TeachersRegisterStudent />}
            />
            <Route
              path="/TeachersDashboard/publishAssignment"
              element={<TeachersAssignment />}
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
            <Route
              path="/StudentDashboard/SubmitDocuments"
              element={<StudentMyDocuments />}
            />
            <Route
              path="/StudentDashboard/StudentPay"
              element={<StudentPay />}
            />
            <Route
              path="/StudentDashboard/StudentAnalytics"
              element={<StAnalytics />}
            />
          </Route>
          {/* --------------------student route end-------------------------*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
