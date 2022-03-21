import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { studentConcessionForm } from "../../../SchoolRedux/StudentSlice";
import useFirebase from "../../Shared/Authentication/Authentication";

const ConcessionForm = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useFirebase();
  const dispatch = useDispatch();

  const onSubmit = (data, e) => {
    e.preventDefault();
    const newData = { ...data, email: user.email };
    console.log(newData);
    dispatch(studentConcessionForm(newData));
  };

  return (
    <div>
      <div>
        <h2 className="text-center text-4xl text-blue-900 font-bold mt-3 mb-8">
          Concession Form
        </h2>
      </div>
      <div className="px-3 mb-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-12 gap-5 "
        >
          {/*--------- Class ---------*/}
          <div className="col-span-4">
            <label htmlFor="class" className="block font-bold">
              Class
            </label>
            <select
              className="border border-gray-700 rounded p-1 w-full"
              id="class"
              name="studentclass"
              {...register("class", { required: "true" })}
            >
              <option value="class-one">Class One</option>
              <option value="class-two">Class Two</option>
              <option value="class-three">Class Three</option>
              <option value="class-four">Class Four</option>
              <option value="class-five">Class Five</option>
            </select>
          </div>

          {/*--------- Section ---------*/}
          <div className="col-span-4">
            <label htmlFor="section" className="block font-bold">
              Section
            </label>
            <select
              className="border border-gray-700 rounded p-1 w-full"
              id="section"
              name="studentsection"
              {...register("section", { required: true })}
            >
              <option value="section-a">Section-A</option>
              <option value="section-b">Section-B</option>
            </select>
          </div>

          {/*--------- Roll ---------*/}
          <div className="col-span-4">
            <label htmlFor="roll" className="block font-bold">
              Student Roll
            </label>
            <input
              type="number"
              id="roll"
              name="roll"
              className="border border-gray-700 rounded p-1 w-full"
              {...register("roll", { required: true })}
            />
          </div>

          {/*--------- Name ---------*/}
          <div className="col-span-6">
            <label htmlFor="name" className="block font-bold">
              Student Full Name
            </label>
            <input
              type="text"
              id="name"
              name="studentname"
              className="border border-gray-700 rounded p-1 w-full"
              {...register("name", { required: true })}
            />
          </div>

          {/*--------- Phone number ---------*/}
          <div className="col-span-6">
            <label htmlFor="phone" className="block font-bold">
              Phone Number
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              className="border border-gray-700 rounded p-1 w-full"
              {...register("phone", { required: true })}
            />
          </div>

          {/*--------- Email ---------*/}
          <div className="col-span-6">
            <label htmlFor="email" className="block font-bold">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-700 rounded p-1 w-full"
              {...register("email", { required: true })}
            />
          </div>

          {/*--------- Father name ---------*/}
          <div className="col-span-6">
            <label htmlFor="fatherName" className="block font-bold">
              Father Name
            </label>
            <input
              type="text"
              id="fatherName"
              name="fatherName"
              className="border border-gray-700 rounded p-1 w-full"
              {...register("fatherName", { required: true })}
            />
          </div>

          {/*--------- Mother name ---------*/}
          <div className="col-span-6">
            <label htmlFor="motherName" className="block font-bold">
              Mother Name
            </label>
            <input
              type="text"
              id="motherName"
              name="motherName"
              className="border border-gray-700 rounded p-1 w-full"
              {...register("motherName", { required: true })}
            />
          </div>

          {/*---------  Father Occupation ---------*/}
          <div className="col-span-6">
            <label htmlFor="fatherOccupation" className="block font-bold">
              Father Occupation
            </label>
            <input
              type="text"
              id="fatherOccupation"
              name="fatherOccupation"
              className="border border-gray-700 rounded p-1 w-full"
              {...register("fatherOccupation", { required: true })}
            />
          </div>

          {/*---------  Father Monthly Income---------*/}
          <div className="col-span-6">
            <label htmlFor="fatherMonthlyIncome" className="block font-bold">
              Father Monthly Income
            </label>
            <input
              type="number"
              id="fatherMonthlyIncome"
              name="fatherMonthlyIncome"
              className="border border-gray-700 rounded p-1 w-full"
              {...register("fatherMonthlyIncome", { required: true })}
            />
          </div>

          {/*---------   Father Contact No :  ---------*/}
          <div className="col-span-6">
            <label htmlFor="fatherContactNo" className="block font-bold">
              Father Contact No :
            </label>
            <input
              type="number"
              id="fatherContactNo"
              name="fatherContactNo"
              className="border border-gray-700 rounded p-1 w-full"
              {...register("fatherContactNo", { required: true })}
            />
          </div>

          {/*---------  Details ---------*/}
          <div className="col-span-12">
            <label htmlFor="details" className="block font-bold">
              Details :
            </label>
            <textarea
              type="text"
              id="details"
              name="details"
              className="border border-gray-700 rounded p-1 w-full"
              {...register("details", { required: true })}
            />
          </div>

          <div className="col-span-12">
            <div className="flex justify-center">
              <input
                className="w-1/4 border-2 bg-green-300 hover:bg-green-400 hover:cursor-pointer rounded-md px-3 py-2"
                value="Request"
                type="submit"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConcessionForm;
