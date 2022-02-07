import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrincipalDashboard from "./Pages/PrincipalPanel/PrincipalDashboard/PrincipalDashboard";
import PrincipalHome from "./Pages/PrincipalPanel/PrincipalHome/PrincipalHome";
import PrincipalPublishNotice from "./Pages/PrincipalPanel/PrincipalPublishNotice/.PrincipalPublishNotice";
import TeachersPanelSideBar from "./Pages/TeachersPanel/TeachersPanelSideBar/TeachersPanelSideBar";
import TeachersPanel from "./TeachersPanel/TeachersPanel/TeachersPanel";
import TeachersPanelBody from "./TeachersPanel/TeachersPanelBody/TeachersPanelBody";

function App() {
    return (
        <div className="">
            <BrowserRouter>
                <Routes>

                     {/* --------------All User Homepage Routes Start--------------- */}
                   <Route path="/" element={<HomePage/>}></Route>

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
                    </Route>

                    {/* --------------Principal Routes End--------------- */}

                    {/* --------------Teacher Routes Start */}
                    <Route
                        path="/TeachersDashboard"
                        element={<TeachersPanel />}
                    >
                        <Route
                            path="/TeachersDashboard"
                            element={<TeachersPanelBody />}
                        ></Route>
                    </Route>
                    {/* --------------Teacher Routes End-------------- */}
                </Routes>
            </BrowserRouter>
        </div>
    );


export default App;
