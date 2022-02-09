import React from "react";

const TeachersNoticePublish = () => {
    return (
        <div className="text-center">
            <h2 className="text-5xl text-gray-600 font-bold my-5 mt-16">
                Publish notice
            </h2>
            <div>
                <div>
                    <h2 className="text-2xl text-blue-500 font-medium">
                        Add local files
                    </h2>
                    <input type="file" className="my-3" />
                </div>
                <div className="my-3">
                    <p className="text-gray-500">Or</p>
                </div>
                <div>
                    <h2 className="text-2xl text-blue-500 font-medium mb-5">
                        Write notice
                    </h2>
                    <form action="">
                        <p className="text-lg font-medium">
                            Write Title of the notice
                        </p>
                        <input
                            type="text"
                            className="border border-gray-500 rounded-lg w-64"
                        />
                        <p>Write description</p>
                        <textarea
                            name=""
                            id=""
                            cols="50"
                            rows="5"
                            className="border border-gray-500 rounded-lg w-64"
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
