import React from 'react';
import { useForm } from 'react-hook-form';

const RequestCare = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div className="flex align-center justify-center">
            <div>
            <h1 className="text-4xl text-center"> Request Special Care</h1>
                <form className="w-[55vw] mx-auto border-2 px-5 py-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex justify-center items-center">
                        <input className="w-1/3 border-2 rounded-md px-3 py-2" placeholder="First Name" {...register("firstName", { required: true, maxLength: 20 })} />
                        <input className="w-1/3 ml-2 mr-2 border-2 rounded-md px-3 py-2" placeholder="Middle Name" {...register("middleName", { required: true, maxLength: 20 })} />
                        <input className="w-1/3 border-2 rounded-md px-3 py-2" placeholder="Last Name" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                    </div>
                    <br/>
                    <input className="w-1/2" placeholder="" type="number" {...register("age", { min: 18, max: 99 })} />
                    <input className="w-1/2" placeholder="" type="date" {...register("date")} />
                    <input className="w-" placeholder="" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default RequestCare;