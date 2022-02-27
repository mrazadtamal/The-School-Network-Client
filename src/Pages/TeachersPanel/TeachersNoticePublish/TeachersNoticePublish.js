import React, { useState } from "react";


const TeachersNoticePublish = () => {

    return (
        <div className="w-10/12 sm:9/12 md:w-5/6 lg:w-4/6 mx-auto">
            <h2 className="text-5xl text-gray-600 font-bold my-10 text-center">
                Publish notice
            </h2>
            <div>
                <div className="text-center">
                    <h2 className="text-2xl text-blue-500 font-medium">
                        Add local files
                    </h2>
                    <input type="file" className="my-3" />
                </div>
                <div className="my-3">
                    <p className="text-gray-500 text-center">Or</p>
                </div>
                <div>
                    <h2 className="text-2xl text-blue-500 font-medium mb-5 text-center">
                        Write notice
                    </h2>
                    <form >
                        <p className="text-lg font-medium">Title</p>
                        <input
                            type="text"
                            className="border border-gray-500 rounded w-full"
                        />
                        <p className="text-lg font-medium mt-3">Description</p>
                        <textarea
                            name=""
                            id=""
                            rows="5"
                            className="border border-gray-500 rounded w-full"
                        ></textarea>
                        <input
                            type="submit"
                            value="Publish"
                            className="block mx-auto my-3 px-5 py-1 bg-blue-500 rounded-lg text-gray-900 font-medium"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TeachersNoticePublish;
