import React from 'react';
import { useState } from 'react';
import'./Teacherpanel.css'
const TeachersAssinment = () => {
    const [titles,setTitles]=useState('')
    const [descript,setdescript]=useState('')
    const [files,setFiles]=useState('')
    const titleHandle=(e)=>{
        setTitles(e.target.value)
    } 
    const descriptHandle=(e)=>{
        setdescript(e.target.value)
    }
  const fileHandle=(e)=>{
     setFiles(e.target.value)
  }
    
   const handleSubmit=()=>{
       console.log(titles,descript,files)
   }
    return (
        <div className='text-center w-full m-auto mx-64  mt-5'>
            
          <div className=' w-2/4 teacher-side p-5 '>
          

          <p class='text-3xl text-sky-400/100'>Published Assinment</p>
                
                <div>       
                 
                       <label class="block mx-64">
                           <span class="sr-only">Choose File</span>
                        <input 
                        onChange={fileHandle}
                        type="file" 
                        class="block w-full text-sm text-slate-500
                             file:mr-4 file:py-2 file:px-4
                             file:rounded-full file:border-0
                             file:text-sm file:font-semibold
                             file:bg-violet-50 file:text-violet-700
                             hover:file:bg-violet-100
                             "/>
                      </label>

                       </div>
                       <p className='mb-4'>Or</p>
                  <label class="relative block mt-5 mb-2">
                    
                        <input 
                          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                          onChange={titleHandle} 
                          placeholder="Assinment Title" 
                           type="text"
                         name="title"/>
                 </label>

                        <textarea
                            name="assinmentDescription"
                            onChange={descriptHandle}
                            id=""
                            rows="5"
                            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                            placeholder="Assinment Description" 
                            type="text"
                        ></textarea>
                         
                         <button 
                          className="block  my-3 px-5   py-1 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-gray-900 font-medium"

                              onClick={handleSubmit}  
                 
                            >Publish
                          </button> 
                     
                       
                
         </div>
        </div>
    );
};

export default TeachersAssinment;