import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrincipalDashboard from "./Pages/PrincipalPanel/PrincipalDashboard/PrincipalDashboard";
import PrincipalHome from "./Pages/PrincipalPanel/PrincipalHome/PrincipalHome";
import PrincipalPublishNotice from "./Pages/PrincipalPanel/PrincipalPublishNotice/PrincipalPublishNotice";
import TeachersPanel from "./Pages/TeachersPanel/TeachersPanel/TeachersPanel";
import TeachersPanelBody from "./Pages/TeachersPanel/TeachersPanelBody/TeachersPanelBody";

import HomePage from "./Pages/AllUser/HomePageComponents/HomePage";
import LogInPage from "./Pages/AllUser/Login/LogInPage";
import PrincipalAnnouncement from "./Pages/PrincipalPanel/PrincipalAnnouncement/PrincipalAnnouncement";
import TeachersPanelHome from "./Pages/TeachersPanel/TeachersPanelHome/TeachersPanelHome";
import TeachersNoticePublish from "./Pages/TeachersPanel/TeachersNoticePublish/TeachersNoticePublish";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {/* --------------All User Homepage Routes Start--------------- */}

                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LogInPage />} />

                    {/* --------------All User Homepage Routes End--------------- */}
                    {/* --------------Principal Routes Start--------------- */}

                    <Route
                        path="/PrincipalDashboard"
                        element={<PrincipalDashboard />}
                    >
                        <Route
                            path="/PrincipalDashboard"
                            element={<PrincipalHome />}
                        />
                        <Route
                            path="/PrincipalDashboard/PrincipalPublishNotice"
                            element={<PrincipalPublishNotice />}
                        />
                        <Route
                            path="/PrincipalDashboard/PrincipalAnnouncement"
                            element={<PrincipalAnnouncement />}
                        />
                    </Route>

                    {/* --------------Principal Routes End--------------- */}

                    {/* --------------Teacher Routes Start */}
                    <Route
                        path="/TeachersDashboard"
                        element={<TeachersPanel />}
                    >
                        <Route
                            path="/TeachersDashboard"
                            element={<TeachersPanelHome />}
                        />
                        <Route
                            path="/TeachersDashboard/NoticePublish"
                            element={<TeachersNoticePublish />}
                        />
                    </Route>
                    {/* --------------Teacher Routes End-------------- */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;
