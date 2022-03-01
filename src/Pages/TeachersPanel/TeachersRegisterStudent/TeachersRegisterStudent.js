import React from "react";
import { useForm } from "react-hook-form";

const TeachersRegisterStudent = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className=" h-screen overflow-scroll">
            <div>
                <h2 className="text-center text-4xl text-blue-900 font-bold mt-3 mb-8">
                    Register A new student
                </h2>
            </div>
            <div className="px-3 mb-2">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-cols-12 gap-5"
                >
                    {/*--------- Class ---------*/}
                    <div className="col-span-4">
                        <label htmlFor="class" className="block font-bold">
                            Class
                        </label>
                        <select
                            className="border border-gray-700 rounded p-1 w-full"
                            id="class"
                            name="class"
                            {...register("class", { required: "true" })}
                        >
                            <option value="kg">KG</option>
                            <option value="nursery">Nursery</option>
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
                            name="section"
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
                            Student Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="border border-gray-700 rounded p-1 w-full"
                            {...register("name", { required: true })}
                        />
                    </div>
                    {/*--------- Blood Group ---------*/}
                    <div className="col-span-3">
                        <label htmlFor="bloodGroup" className="block font-bold">
                            Blood Group
                        </label>
                        <select
                            id="bloodGroup"
                            name="bloodGroup"
                            className="border border-gray-700 rounded p-1 w-full"
                            {...register("bloodGroup", { required: true })}
                        >
                            <option value="a+">A+</option>
                            <option value="a-">A-</option>
                            <option value="b+">B+</option>
                            <option value="b-">B-</option>
                            <option value="ab+">AB+</option>
                            <option value="ab-">AB-</option>
                            <option value="o+">O+</option>
                            <option value="o-">O-</option>
                        </select>
                    </div>
                    {/*--------- Age ---------*/}
                    <div className="col-span-3">
                        <label htmlFor="age" className="block font-bold">
                            Age
                        </label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            className="border border-gray-700 rounded p-1 w-full"
                            {...register("age", { required: true })}
                        />
                    </div>
                    {/*--------- Email ---------*/}
                    <div className="col-span-6">
                        <label htmlFor="email" className="block font-bold">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="border border-gray-700 rounded p-1 w-full"
                            {...register("email", { required: true })}
                        />
                    </div>
                    {/*--------- Password ---------*/}
                    <div className="col-span-6">
                        <label htmlFor="password" className="block font-bold">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="border border-gray-700 rounded p-1 w-full"
                            {...register("password", { required: true })}
                        />
                    </div>
                    {/*--------- Birth certificate number ---------*/}
                    <div className="col-span-4">
                        <label
                            htmlFor="birthCertificateNo"
                            className="block font-bold"
                        >
                            Birth Certificate No
                        </label>
                        <input
                            type="number"
                            id="birthCertificateNo"
                            name="birthCertificateNo"
                            className="border border-gray-700 rounded p-1 w-full"
                            {...register("birthCertificateNo", {
                                required: true,
                            })}
                        />
                    </div>
                    {/*--------- Phone number ---------*/}
                    <div className="col-span-4">
                        <label htmlFor="phone" className="block font-bold">
                            Phone
                        </label>
                        <input
                            type="number"
                            id="phone"
                            name="phone"
                            className="border border-gray-700 rounded p-1 w-full"
                            {...register("phone", { required: true })}
                        />
                    </div>
                    {/*--------- Date of birth ---------*/}
                    <div className="col-span-4">
                        <label htmlFor="birthDate" className="block font-bold">
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            id="birthDate"
                            name="birthDate"
                            className="border border-gray-700 rounded p-1 w-full"
                            {...register("birthDate", { required: true })}
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
                    {/*--------- Address ---------*/}
                    <div className="col-span-12">
                        <label htmlFor="address" className="block font-bold">
                            Address
                        </label>
                        <textarea
                            type="text"
                            id="address"
                            name="address"
                            className="border border-gray-700 rounded p-1 w-full"
                            {...register("address", { required: true })}
                        />
                    </div>
                    <div className="col-span-12">
                        <div className="flex justify-center">
                            <input
                                type="submit"
                                value="Register"
                                className="block bg-blue-500 px-5 py-2 rounded text-gray-900 font-bold"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TeachersRegisterStudent;
