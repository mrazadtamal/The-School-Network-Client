import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeacherInfo } from "./../../../SchoolRedux/TeacherSlice";
import useFirebase from "./../../Shared/Authentication/Authentication";

const TeachersProfile = () => {
    const dispatch = useDispatch();
    const { user } = useFirebase();

    useEffect(() => {
        dispatch(getTeacherInfo(user.email));
    }, [user.email, dispatch]);

    const teachersData = useSelector((state) => state.teacherStore.teacherInfo);
    console.log(teachersData);

    return (
        <div className="lg:px-20 lg:py-10">
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-4 bg-amber-100 rounded p-4">
                    <div>
                        <div>
                            <img
                                src="https://www.kemhospitalpune.org/wp-content/uploads/2020/12/Profile_avatar_placeholder_large.png"
                                alt=""
                                className="w-full"
                            />
                        </div>
                        <div>
                            <h2 className="text-center text-xl font-bold mt-4">
                                Contact Information
                            </h2>
                            <p className="my-1">
                                <span className="font-medium">Email: </span>
                                {teachersData.email}
                            </p>
                            <p className="my-1">
                                <span className="font-medium">Phone: </span>
                                {teachersData.teacherphone}
                            </p>
                            <p className="my-1">
                                <span className="font-medium">Website: </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-8">
                    <div className="grid grid-rows-2 gap-3">
                        <div className="grid grid-cols-12 bg-amber-100 rounded p-4">
                            <div className="col-span-4">
                                <p className="font-medium my-3">Full Name</p>
                                <p className="font-medium my-3">Address</p>
                                <p className="font-medium my-3">Class</p>
                                <p className="font-medium my-3">Section</p>
                                <p className="font-medium my-3">Subject</p>
                            </div>
                            <div className="col-span-8">
                                <p className="my-3">
                                    {teachersData.teachername}
                                </p>
                                <p className="my-3">Somewhere on Earth</p>
                                <p className="my-3">
                                    {teachersData.teacherclass}
                                </p>
                                <p className="my-3">
                                    {teachersData.teachersection}
                                </p>
                                <p className="my-3">Cosmology</p>
                            </div>
                        </div>
                        <div className="bg-amber-100 rounded p-4">
                            <h4 className="font-medium">Personal Statement:</h4>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Voluptate maiores placeat
                                autem vitae vel debitis tenetur commodi tempora
                                doloremque perferendis. Lorem ipsum dolor sit
                                amet consectetur adipisicing elit. Dicta
                                dolorum, animi omnis exercitationem eveniet
                                itaque! Similique, ut sed? Quam, vel?
                            </p>
                            <h4 className="font-medium mt-4">Education:</h4>
                            <p>
                                Bangladesh University of Engineering and
                                Technology
                            </p>
                            <div className=" flex justify-end">
                                <button className="bg-blue-600 px-2 py-1 rounded mt-3">
                                    Edit profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeachersProfile;
