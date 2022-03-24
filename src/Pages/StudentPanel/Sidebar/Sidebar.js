import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaHome, FaUser, FaWpforms } from "react-icons/fa";
import { MdMessage, MdPayments } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";

import { AiOutlineNotification } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { FcDocument } from "react-icons/fc";
import { CgTranscript } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";

import { SiSimpleanalytics } from "react-icons/si";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./Sidebar.css";
import SidebarMenu from "./SidebarMenu";
import useFirebase from "../../Shared/Authentication/Authentication";


const routes = [
  {
    path: "/StudentDashboard",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/StudentDashboard/StudentProfile",
    name: "Student Profile",
    icon: <FaUser />,
  },
  {
    path: "/StudentDashboard/RequestCare",
    name: " Request Extra Care",
    icon: <MdMessage />,
  },
  {
    path: "/StudentDashboard/SubmitDocuments",
    name: "Submit Documents",
    icon: <FcDocument />,
  },
  {
    path: "/StudentDashboard/StudentAnalytics",
    name: " Student Analytics",
    icon: <SiSimpleanalytics />,
  },
  {
    path: "/StudentDashboard/seeResult",
    name: "Result",
    icon: <BiAnalyse />,
  },
  {
    path: "/StudentDashboard/transcript",
    name: "Transcript",
    icon: <CgTranscript />,
  },
  {
    path: "/StudentDashboard/concessionForm",
    name: "Concession Form",
    icon: <FaWpforms />,
  },
  {
    path: "/StudentDashboard/NoticBoard",
    name: "Notice",
    icon: <AiOutlineNotification />,
  },
  {
    path: "/StudentDashboard/MonthlyPayment",
    name: "Payment",
    icon: <MdPayments />,
  },
  {
    path: "/StudentDashboard/LibraryBooks",
    name: "Library",
    icon: <BsBook />,
  },
  {
    path: "/StudentDashboard/videos",
    name: "My Videos",
    icon: <BsBook />,
  },
  // ----------------------
];

const SideBar = ({ children }) => {
  const { user, LogOutUser } = useFirebase();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="st-main-container">
        <motion.div
          animate={{
            width: isOpen ? "400px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`st-sidebar `}
        >
          <div className="st-top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="st-logo  "
                >
                  Student
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="st-bars">
              <FaBars onClick={toggle} />
            </div>
          </div>

          <section className="st-routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <>
                  <NavLink
                    to={route.path}
                    key={index}
                    className="st-link"
                    activeClassName="st-active"
                  >
                    <div className="">{route.icon}</div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="st-link_text"
                        >
                          {route.name}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </NavLink>
                </>
              );
            })}

            <button
              onClick={() => {
                LogOutUser(navigate);
              }}
              className="my-5"
            >
              <span className=" bg-red-400 w-20 h-10 text-white hover:bg-red-500 ">
                <FiLogOut className=" ml-3" />
              </span>
            </button>
          </section>
        </motion.div>

        <main className="st-main">{children}</main>
      </div>
    </>
  );
};

export default SideBar;