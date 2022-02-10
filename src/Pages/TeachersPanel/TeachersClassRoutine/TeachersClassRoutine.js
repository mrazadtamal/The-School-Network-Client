import React from "react";

const TeachersClassRoutine = () => {
    return (
        <div className="text-center">
            <h1 className="text-5xl text-blue-900 my-10 font-bold">
                Publish Class Routine
            </h1>
            <div className="border-2 border-blue-600 rounded-lg w-fit mx-auto px-20 py-10">
                <p className="text-xl text-gray-700 font-medium mb-5">
                    Add files
                </p>
                <form action="">
                    <input type="file" className="" />
                    <input
                        type="submit"
                        value="Publish"
                        className="block mx-auto mt-5 px-5 py-1 bg-blue-500 rounded-lg text-gray-900 font-medium"
                    />
                </form>
            </div>
        </div>
    );
};

export default TeachersClassRoutine;
