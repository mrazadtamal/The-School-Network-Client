import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrincipalDashboard from "./Pages/PrincipalPanel/PrincipalDashboard/PrincipalDashboard";
import PrincipalHome from "./Pages/PrincipalPanel/PrincipalHome/PrincipalHome";
import PrincipalPublishNotice from "./Pages/PrincipalPanel/PrincipalPublishNotice/PrincipalPublishNotice";
import TeachersPanel from "./Pages/TeachersPanel/TeachersPanel/TeachersPanel";
import HomePage from "./Pages/AllUser/HomePageComponents/HomePage";
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
import StudentMyDocuments from "./Pages/StudentPanel/StudentDashboard/StudentMyDocuments/StudentMyDocuments";
import StudentPay from "./Pages/StudentPanel/StudentPay/StudentPay";
import StAnalytics from "./Pages/StudentPanel/StudentDashboard/StAnalytics/StAnalytics";
import SeeResult from "./Pages/StudentPanel/StudentDashboard/SeeResult/SeeResult";
import Transcript from "./Pages/StudentPanel/StudentDashboard/Transcript/Transcript";
import TeachersAssignment from "./Pages/TeachersPanel/TeachersAssignment/TeachersAssignment";
import RegisterStudent from "./Pages/Shared/RegisterStudent/RegisterStudent";
import CheckPaymentStatus from "./Pages/PrincipalPanel/CheckPaymentStatus/CheckPaymentStatus";
import TeachersManageStudent from "./Pages/TeachersPanel/TeachersManageStudent/TeachersManageStudent";
import SeeExtraRequestPage from "./Pages/TeachersPanel/SeeExtraRequestPage/SeeExtraRequestPage";
import Contact from "./Pages/AllUser/Contact/Contact";
import ClassFive from "./Pages/Shared/ResultAdd/ClassFive";
import ClassOneToTwo from "./Pages/Shared/ResultAdd/ClassOneToTwo";
import ClassThreeAndFour from "./Pages/Shared/ResultAdd/ClassThreeAndFour";
import ViewStudentsPerformance from "./Pages/Shared/ViewStudentsPerformance/ViewStudentsPerformance";
import StudentProfile from "./Pages/StudentPanel/StudentProfile/StudentProfile";
import SecondSemester from "./Pages/StudentPanel/StudentDashboard/SeeResult/SecondSemester";

function App() {
  return (
    <div>
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
          <Route path="/canteen" element={<Canteen />} />
          <Route path="/library" element={<Library />} />
          <Route path="/auditoriam" element={<Auditoraim />} />
          <Route path="/games" element={<Games />} />
          <Route path="/contact" element={<Contact />} />
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
              path="/PrincipalDashboard/RegisterStudent"
              element={<RegisterStudent />}
            />
            <Route
              path="/PrincipalDashboard/CheckPaymentStatus"
              element={<CheckPaymentStatus />}
            />
            <Route
              path="/PrincipalDashboard/ClassFive"
              element={<ClassFive />}
            />
            <Route
              path="/PrincipalDashboard/ClassOneToTwo"
              element={<ClassOneToTwo />}
            />
            <Route
              path="/PrincipalDashboard/ClassThreeAndFour"
              element={<ClassThreeAndFour />}
            />
            <Route
              path="/PrincipalDashboard/ViewStudentsPerformance/:id"
              element={<ViewStudentsPerformance />}
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
              element={<RegisterStudent />}
            />
            <Route
              path="/TeachersDashboard/publishAssignment"
              element={<TeachersAssignment />}
            />
            <Route
              path="/TeachersDashboard/ManageStudents"
              element={<TeachersManageStudent />}
            />
            <Route
              path="/TeachersDashboard/SeeExtraRequestPage"
              element={<SeeExtraRequestPage />}
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
            <Route path="/StudentDashboard/seeResult" element={<SeeResult />} />
            <Route
              path="/StudentDashboard/transcript"
              element={<Transcript />}
            />
            <Route
              path="/StudentDashboard/StudentAnalytics"
              element={<StAnalytics />}
            />
            <Route
              path="/StudentDashboard/StudentProfile"
              element={<StudentProfile />}
            />
            <Route
              path="/StudentDashboard/secondSemester"
              element={<SecondSemester />}
            />
          </Route>
          {/* --------------------student route end-------------------------*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
