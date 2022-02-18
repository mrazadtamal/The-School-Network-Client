import React from 'react';
import { useForm } from 'react-hook-form';

const RequestCare = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div className="flex align-center justify-center">
            <div>
            <h1 className="text-4xl text-center font-bold py-5"> Request Special Care</h1>
                <form className="w-[55vw] mx-auto border-2 px-5 py-5 rounded-lg shadow-lg" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex justify-center items-center">
                        <input className="w-1/3 border-2 rounded-md px-3 py-2" placeholder="First Name" {...register("firstName", { required: true, maxLength: 20 })} />
                        <input className="w-1/3 ml-2 mr-2 border-2 rounded-md px-3 py-2" placeholder="Middle Name" {...register("middleName", { required: true, maxLength: 20 })} />
                        <input className="w-1/3 border-2 rounded-md px-3 py-2" placeholder="Last Name" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                    </div>
                    <br />
                    <div>
                        <input className="w-[48%] border-2 rounded-md px-3 py-2 ml-2 mr-2" placeholder="Your Class" type="number" {...register("age", { min: 1, max: 10 })} />
                        <input className="w-[48%] border-2 rounded-md px-3 py-2 ml-2 mr-2" placeholder="issue date" type="date" {...register("request_date")} />
                    </div>
                    <br />
                    <div>
                        <input className="w-[48%] border-2 rounded-md px-3 py-2 ml-2 mr-2" placeholder="Your Email" type="email" {...register("email")} />
                        <input className="w-[48%] border-2 rounded-md px-3 py-2 ml-2 mr-2" placeholder="Course Name" type="text" {...register("course_name")} />
                    </div>
                    <br />
                    <div>
                        <input className="w-[48%] border-2 rounded-md px-3 py-2 ml-2 mr-2" placeholder="Class Teacher Name" type="text" {...register("class_teacher")} />
                        <input className="w-[48%] border-2 rounded-md px-3 py-2 ml-2 mr-2" placeholder="Section" type="text" {...register("section")} />
                    </div>
                    <br />
                    <div>
                        <textarea className="w-full border-2 rounded-md px-3 py-2" placeholder="Why do you think you need this?" {...register("description")} />
                    </div>
                    <div className="flex justify-center items-center my-5">
                       <input className="w-1/3 border-2 bg-green-300 hover:bg-green-400 hover:cursor-pointer rounded-md px-3 py-2"  value="Make Request" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RequestCare;