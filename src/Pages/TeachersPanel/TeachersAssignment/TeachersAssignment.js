import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { assignmentPublish, DeleteAssignment, GetingPreviosuAssignment, PublishImageAssing} from '../../../SchoolRedux/TeacherSlice';
import'./Teacherpanel.css'
const TeachersAssignment = () => {
   const dispatch = useDispatch();
   const [img, setImg] = useState("");

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
   
      dispatch(assignmentPublish(data))
      reset()
      console.log(data)
    }
    const SubmitHandler = (e) => {
      e.preventDefault()

    
              const fd = new FormData();
              fd.append('noticeImage', img)
              dispatch(PublishImageAssing(fd))
              e.target.reset()
    }
    useEffect(() => {
      dispatch(GetingPreviosuAssignment())
  }, [dispatch]);
  
  const assignment = useSelector(
    (state) => state.teacherStore.assignments
);
console.log(assignment)

const handleAssignmentDeleteBtn = (id) => {
  dispatch(DeleteAssignment(id));
};

    return (
        <div>
               <div className='text-center w-full m-auto mt-5'>
            <div className='w-2/4 mx-auto container teacher-side p-5 '>
            <p class='text-3xl text-sky-400/100'>Published Assignment</p>

                  
               <form className='flex' onSubmit={SubmitHandler}>
               <label class="block mx-2">
                        <span class="sr-only">Choose File</span>
                        <input 
                        type="file" 
                        onBlur={(e) => setImg(e.target.files[0])}
                        class="block w-full text-sm text-slate-500
                             file:mr-4 file:py-2 file:px-4
                             file:rounded-full file:border-0
                             file:text-sm file:font-semibold
                             file:bg-violet-50 file:text-violet-700
                             hover:file:bg-violet-100
                             "/>
                      </label>
                      <input 
                    className="block  my-3 px-5 
                      py-1 bg-cyan-500 hover:bg-cyan-600
                       rounded-lg text-gray-900 font-medium"
                     type="submit" />
               </form>
                     
                      
            <form onSubmit={handleSubmit(onSubmit)}>
                        {/* <label class="block mx-2">
                        <span class="sr-only">Choose File</span>
                        <input 
                        type="file" 
                        {...register("img")}
                        class="block w-full text-sm text-slate-500
                             file:mr-4 file:py-2 file:px-4
                             file:rounded-full file:border-0
                             file:text-sm file:font-semibold
                             file:bg-violet-50 file:text-violet-700
                             hover:file:bg-violet-100
                             "/>
                      </label> */}
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
               
                <select className='block' {...register("class")} placeholder='Choose Class'>
        <option value={1}>Class 1</option>
        <option value={2}>Class 2</option>
        <option value={3}>Class 3</option>
        <option value={4}>Class 4</option>
        <option value={5}>Class 5</option>
      </select>
                   <br />
              <input 
                    className="block  my-3 px-5 
                      py-1 bg-cyan-500 hover:bg-cyan-600
                       rounded-lg text-gray-900 font-medium"
                     type="submit" />
        </form>
        
          </div>
        <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pt-5 gap-5 mb-5">
        {
           assignment?.map((assi)=>(
             <div className='container teacher-side p-5' key={assi._id}>
                <div>
                                <img
                                    src={`data:image/jpeg;base64,${assi?.img}`}
                                    alt=""
                                    className="w-full"
                                />
                            </div>
               <h1 className='text-2xl text-blue-800 font-bold'>{assi?.title}</h1>
               <h1 className='text-sm'>{assi?.description?.slice(0,250)}</h1>
               <button
                onClick={() =>
                  handleAssignmentDeleteBtn(assi._id)
              }
               className="block mt-5 my-3 px-5 
                      py-1 bg-red-500 hover:bg-green-500
                       rounded-lg text-gray-900 font-medium">Remove</button>
             </div>
           ))
         }
        </div>
        </div>
      
        </div>
    );
};

export default TeachersAssignment;