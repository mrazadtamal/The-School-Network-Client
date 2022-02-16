import React from 'react';
import { useForm } from 'react-hook-form';
import'./Teacherpanel.css'
const TeachersAssignment = () => {
    
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        console.log(data)
        reset()
    }
    return (
        <div>
               <div className='text-center w-full m-auto mt-5'>
            
               <div className='w-2/4 mx-auto container teacher-side p-5 '>
            
  
                   <p class='text-3xl text-sky-400/100'>Published Assignment</p>
                  
            <form onSubmit={handleSubmit(onSubmit)}>
                        <label class="block mx-2">
                        <span class="sr-only">Choose File</span>
                        <input 
                        type="file" 
                        class="block w-full text-sm text-slate-500
                             file:mr-4 file:py-2 file:px-4
                             file:rounded-full file:border-0
                             file:text-sm file:font-semibold
                             file:bg-violet-50 file:text-violet-700
                             hover:file:bg-violet-100
                             "/>
                      </label>
             <p className='mb-4'>Or</p>

                      <label class="relative block mt-5 mb-2">

                   <input 
                   className="placeholder:italic
                    placeholder:text-slate-400 block bg-white
                     w-full border border-slate-300 rounded-md
                      py-2 pl-9 pr-3 shadow-sm focus:outline-none
                    focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    {...register("title")} placeholder="Title"/>
                    </label> <br />
                <textarea
                rows="5"
                className="placeholder:italic
                placeholder:text-slate-400 block bg-white
                 w-full border border-slate-300 rounded-md
                  py-2 pl-9 pr-3 shadow-sm focus:outline-none
                 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                type="text"
                 {...register("description")} placeholder="Assignment Description"/> <br />


                    <input 
                    className="block  my-3 px-5 
                      py-1 bg-cyan-500 hover:bg-cyan-600
                       rounded-lg text-gray-900 font-medium"
                     type="submit" />
        </form>
          </div>
        </div>
        </div>
    );
};

export default TeachersAssignment;