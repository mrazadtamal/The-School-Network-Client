import React, { useState } from 'react';
import useFirebase from '../../Shared/Authentication/Authentication';
import Swal from 'sweetalert2'
const RegisterTeacher = () => {
    const [regdata, setRegData] = useState({})
    const {RegisterUser, setUser} = useFirebase();
    
    const OnblurHandler = e => {
        const fieldname = e.target.name;
        const fieldvalue = e.target.value;
  
        const newdata = {...regdata};
        newdata[fieldname] = fieldvalue;
        setRegData(newdata)
    }
    const AddTeacherHandler = (e) => {
      RegisterUser(regdata.email, regdata.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setUser(user);
        SaveTeacher(regdata.email, regdata.teachername, regdata.role, regdata.teacherclass, regdata.teachersection,regdata.teachernid, regdata.teacherphone, regdata.teacheraddress)

        e.target.reset()
        
    }).catch((error) => {
         
        console.log('from register user', error.message)
    });
    e.preventDefault()

    }

     //saving teacher to database
     const SaveTeacher = (email, teachername, role, teacherclass, teachersection, teachernid, teacherphone, teacheraddress) => {
     
      const teacherdata = {email, teachername, role, teacherclass, teachersection, teachernid, teacherphone, teacheraddress}

        fetch('https://blooming-citadel-14218.herokuapp.com/addUser', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(teacherdata)
        })
        .then(res => res.json())
        .then(data => {
          if(data)
          {
            Swal.fire(
                'Success',
                'Teacher Added Successfully',
                'success'
              )
          }
        })
    }
    return (
      <div className="mt-4" style={{width: '100%'}}>
            <h1 className='text-3xl font-bold text-center mt-4'>Register Teacher</h1>
            <form onSubmit={AddTeacherHandler} className='principal_register_teacher mt-8'>
                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-6'>
                    <div className="col-span-12">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Name
                        </label>
                        <input
                        type="text"
                        name="teachername"
                        onBlur={OnblurHandler}
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                </div>
                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-6 mt-4'>
                    <div className="col-span-6">
                        <label htmlFor="email-address" className="block principal_form_all_labels">
                        Email address
                        </label>
                        <input
                        type="text"
                        name="email"
                        onBlur={OnblurHandler}
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
                    <div className="col-span-6">
                        <label htmlFor="first-name" className="block principal_form_all_labels">
                            Password
                        </label>
                        <input
                        type="password"
                        name="password"
                        onBlur={OnblurHandler}
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 principal_form_all_input"
                        />
                    </div>
               
                </div>
                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-6'>
                    <div className="col-span-6 mt-8">
                    <label htmlFor="last-name" className="block principal_form_all_labels">
                        Phone No
                    </label>
                    <input
                        type="number"
                        name="teacherphone"
                        onBlur={OnblurHandler}
                        className="mt-1 principal_form_all_input"
                    />
                    </div>
                    
                    <div className="col-span-6 mt-8">
                    <label htmlFor="last-name" className="block principal_form_all_labels">
                        NID No
                    </label>
                    <input
                        type="text"
                        name="teachernid"
                        onBlur={OnblurHandler}
                        className="mt-1 principal_form_all_input"
                    />
                    </div>
                </div>
                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-6'>
                    <div className="col-span-4 mt-8">
                    <label htmlFor="country" className="block principal_form_all_labels">
                        Class Teacher Of
                    </label>
                    <select
                         name="teacherclass"
                         onBlur={OnblurHandler}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="class-one">Class One</option>
                        <option value="class-two">Class Two</option>
                        <option value="class-three">Class Three</option>
                        <option value="class-four">Class Four</option>
                        <option value="class-five">Class Five</option>
                    </select>
                    </div>
                    
                    <div className="col-span-4 mt-8">
                    <label htmlFor="country" className="block principal_form_all_labels">
                        Section
                    </label>
                    <select
                         name="teachersection"
                         onBlur={OnblurHandler}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="section-A">A</option>
                        <option value="section-B">B</option>
                    </select>
                    </div>

                    <div className="col-span-4 mt-8">
                    <label htmlFor="country" className="block principal_form_all_labels">
                        Roles
                    </label>
                    <select
                        name="role"
                        onBlur={OnblurHandler}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="Teacher">Teacher</option>
                        <option value="VicePrincipal">VicePrincipal</option>
                        <option value="Principal">Principal</option>
                    </select>
                    </div>
                </div>
                <div className='grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-12'>
                        <div className="col-span-12 mt-4">
                        <label htmlFor="street-address" className="block principal_form_all_labels">
                            Address
                        </label>
                        <textarea
                             name="teacheraddress"
                             onBlur={OnblurHandler}
                            autoComplete="street-address"
                            className="mt-1 principal_form_all_input"
                        />
                        </div>
                </div>
                <button type='submit' className='publish_btn shadow-lg shadow-indigo-500/50'>ADD TEACHER</button>  
            </form>
      </div>
    );
};

export default RegisterTeacher;