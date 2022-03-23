import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { StudnetAssignmentSubmit } from "../../../../SchoolRedux/StudentSlice";
import useFirebase from "../../../Shared/Authentication/Authentication";
const StudentAssignmentSubmit = () => {
    const dispatch = useDispatch();
    const { user } = useFirebase();
    const [assingmentDetails, setAssingmentDetaisl] = useState("");
    const [pdfdata, setpdfdata] = useState("");

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newuserdata = { ...assingmentDetails };
        newuserdata[field] = value;
        setAssingmentDetaisl(newuserdata);
    };

    const pdfSubmit = (e) => {
        //alert("Button clicked");
        const fd = new FormData();
        fd.append("pdf", pdfdata);
        fd.append("StudentEmail", user.email);
        console.log(fd);

        dispatch(StudnetAssignmentSubmit(fd));
        e.preventDefault();
    };
    console.log(pdfdata);
    console.log(user.email);

    return (
        <>
            <div className="relative border-2 flex justify-center  py-5 px-4 sm:px-6 lg:px-8 items-center">
                <div className="sm:max-w-lg w-full p-5 bg-white rounded-xl z-10">
                    <div className="text-center">
                        <h2 className="mt-5 text-2xl font-bold text-gray-900">
                            Assignment Submit
                        </h2>
                    </div>
                    <form
                        className="mt-8 space-y-3"
                        action="#"
                        onSubmit={pdfSubmit}
                    >
                        <div className="grid grid-cols-1 space-y-2">
                            <label className="text-sm font-bold text-gray-500 tracking-wide">
                                Attach Document
                            </label>
                            <div className="flex items-center justify-center w-full">
                                <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-40 p-10 group text-center">
                                    {/* <div className="h-full w-full text-center flex flex-col  justify-center items-center  ">
                    <p className="  cursor-pointer text-gray-500 ">
                      select a file from your computer
                   <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                    <p className="pointer-none text-gray-500 ">
                      <span className="text-sm">Drag and drop</span> files here
                      <br /> or
                      <a
                        href="/"
                        id=""
                        className="text-blue-600 hover:underline"
                      >
                        select a file
                      </a>
                      from your computer
                    </p> 
                  </div>  */}
                                </label>
                                <input
                                    type="file"
                                    placeholder="Input your Pdf File"
                                    name="pdf"
                                    onBlur={(e) =>
                                        setpdfdata(e.target.files[0])
                                    }
                                />
                            </div>
                        </div>
                        <p className="text-sm text-gray-300">
                            <span>File type: doc,pdf,types of images</span>
                        </p>
                        <div>
                            <button
                                type="submit"
                                className=" w-40 m-auto flex justify-center bg-blue-500 text-gray-100 p-3  rounded tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                            >
                                Upload
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default StudentAssignmentSubmit;
