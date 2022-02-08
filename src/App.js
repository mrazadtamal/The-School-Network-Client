import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/AllUser/HomePageComponents/HomePage";
import PrincipalDashboard from "./Pages/PrincipalPanel/PrincipalDashboard/PrincipalDashboard";
import PrincipalHome from "./Pages/PrincipalPanel/PrincipalHome/PrincipalHome";
import PrincipalPublishNotice from "./Pages/PrincipalPanel/PrincipalPublishNotice/.PrincipalPublishNotice";
import TeachersPanel from "./Pages/TeachersPanel/TeachersPanel/TeachersPanel";
import TeachersPanelBody from "./Pages/TeachersPanel/TeachersPanelBody/TeachersPanelBody";
import AlluserHomePage from "./Pages/AllUser/HomePageComponents/HomePage";

function App() {
    return (
        <div className="">
            <BrowserRouter>
                <Routes>

                     {/* --------------All User Homepage Routes Start--------------- */}
                   <Route path="/" element={<AlluserHomePage/>}></Route>

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
                    {/* <Route
                        path="/TeachersDashboard"
                        element={<TeachersPanel />}
                    >
                        <Route
                            path="/TeachersDashboard"
                            element={<TeachersPanelBody />}
                        ></Route>
                    </Route> */}
                    {/* --------------Teacher Routes End-------------- */}
                </Routes>
            </BrowserRouter>
        </div>
    );

    }
export default App;
