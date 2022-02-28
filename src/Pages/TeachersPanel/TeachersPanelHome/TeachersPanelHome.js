import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import teachersHomePageImg from "../../../img/teachershomepageimg.jpg";
import { GetingPreviousNotice } from "../../../SchoolRedux/PrincipalSlice";

const TeachersPanelHome = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(GetingPreviousNotice())
    }, [dispatch]);

    const TeacherNotcie = useSelector((state) => state.principalStore.notices);

    return (
        <div>
            <h1 className="text-center text-5xl text-blue-800 my-5">
                The School Network
            </h1>
            <h2 className="text-center text-2xl text-blue-600">
                Teachers Panel Body
            </h2>
            <div className="flex flex-col">
                {/* <div className="grow-1">
                <img className="w-1/2 mx-auto" src={teachersHomePageImg} alt="" />
                </div> */}
                <div className="">
                <h1 className='text-center mt-8 text-3xl font-bold mb-8'> Notice From Principal</h1>
                    <div className="Teacher_notice_section">
                        {
                            TeacherNotcie?.map(notice => 
                                <div className='previous_notice_div'>
                                    <h4 className='text-xl font-bold text-center text-blue-900'>{notice?.title}</h4>
                                    <p className=''>{notice?.description}</p>
                                    {
                                        notice.img &&  <img className="notice_img" src={`data:image/jpeg;base64,${notice?.img}`} alt=""/>

                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeachersPanelHome;
