import React, {useState} from "react";
import { Link } from "react-router-dom";
import { HiSpeakerphone } from 'react-icons/hi';
import { GiTeacher } from 'react-icons/gi';
import { FaChalkboardTeacher, FaUserGraduate , FaRegAddressCard} from 'react-icons/fa';
import { SiSamsungpay} from 'react-icons/si';
import { IoIosArrowDown} from 'react-icons/io';

const PrincipalSidebar = () => {
  const [shown1, setShown1] = useState(false)
  const [shown2, setShown2] = useState(false)

  return (
    <div className="">
      <h1 className="mt-8 text-center">
        <span className="text-5xl font-bold text-white ">P</span>
        <span className="text-base font-bold text-white ">
          rincipal Dashboard
        </span>
      </h1>

        <Link to="/PrincipalDashboard"> 
          <p className='principal_sidebar_link   text-white mt-12'><i className="fas fa-home principal_sidebar_icon"></i>Home</p>
        </Link>

        <Link to="/PrincipalDashboard/PrincipalPublishNotice">
          <p className='principal_sidebar_link   text-white mt-4'><i className="fas fa-sticky-note principal_sidebar_icon"></i>Publish Notice</p>
        </Link>

        <Link to="/PrincipalDashboard/PrincipalAnnouncement">
          <p className='principal_sidebar_link   text-white mt-4'> <HiSpeakerphone className='principal_react_icons'/> Announcement</p>
        </Link>

        <Link to="/PrincipalDashboard/PrincipalManageTeacher">
          <p className='principal_sidebar_link   text-white mt-4'>  <GiTeacher className='principal_react_icons' /> Manage Teachers</p>
        </Link>

        <Link to="/PrincipalDashboard/RegisterTeacher">
          <p className='principal_sidebar_link   text-white mt-4'> <FaChalkboardTeacher className='principal_react_icons' /> Register Teachers</p>
        </Link>
        
        <button onClick={() => setShown2(!shown2)} className="drop_dwon_btn"><span> + Manage Students <IoIosArrowDown className="principal_react_icons"/> </span></button>
            {
              shown2 && <ul className="drop_link">
              <li className="class_text"><Link to="/PrincipalDashboard/ResultAdd">Class One</Link></li> 
              <li className="class_text"><Link to="/PrincipalDashboard/ResultAdd"><a href="#">Class Two</a> </Link></li>
              <li className="class_text"><a href="#">Class Three</a></li>
              <li className="class_text"><a href="#">Class Four</a></li>
            </ul>
            }

        
            <button onClick={() => setShown1(!shown1)} className="drop_dwon_btn"><span><FaUserGraduate className='principal_react_icons'/>Manage Students <IoIosArrowDown className="principal_react_icons"/></span></button>
            {
              shown1 && <ul className="drop_link">
              <li className="class_text"><Link to="/PrincipalDashboard/PrincipalManageStudent">Class One</Link></li> 
              <li className="class_text"><Link to="/PrincipalDashboard/PrincipalManageStudent"><a href="#">Class Two</a> </Link></li>
              <li className="class_text"><a href="#">Class Three</a></li>
              <li className="class_text"><a href="#">Class Four</a></li>
            </ul>
            }
        
        <Link to="/PrincipalDashboard/RegisterStudent">
          <p className='principal_sidebar_link   text-white mt-4'> <FaRegAddressCard className='principal_react_icons' />Register Student</p>
        </Link>

        <Link to="/PrincipalDashboard/UploadPayment">
          <p className='principal_sidebar_link   text-white mt-4'> <SiSamsungpay className='principal_react_icons' />Upload Payment</p>
        </Link>

        <Link to="/PrincipalDashboard/CheckPaymentStatus">
          <p className='principal_sidebar_link   text-white mt-4'> <SiSamsungpay className='principal_react_icons' />Check Payment Status</p>
        </Link>

    </div>
  );
};

export default PrincipalSidebar;
