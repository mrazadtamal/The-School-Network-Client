import React, { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { IndividualAdmissionForm } from '../../../SchoolRedux/PrincipalSlice';

const IndividualForms = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(IndividualAdmissionForm(id))
    }, [dispatch, id]);
    const admissionForm = useSelector((state) => state.principalStore.admissionForm);

    return (
    <div className='container'>
        <div className='details_addmission_form mx-auto mt-4'>
            <h1 className='text-center font-bold my-4 text-blue-900 text-3xl'>The School Network Admission Form</h1>
            <div className='form_colam_pc grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-8 mt-8'>
                <div className='mt-auto'>
                    <h4 className='text-lg text-gray-900 font-bold'>First Name: <span className='text-blue-500'>{admissionForm.firstName}</span></h4>
                </div>
                <div className='mt-auto'> 
                    <h4 className='text-lg text-gray-900 font-bold'>Last Name: <span className='text-blue-500'>{admissionForm.lastName}</span></h4>
                </div>
                <div>
                    <img src={`data:image/jpeg;base64,${admissionForm?.img}`}  alt="" />
                </div>
            </div>

            <div className='form_colam_mobile grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 mt-8'>
                 <div>
                    <img src={`data:image/jpeg;base64,${admissionForm?.img}`}  alt="" />
                </div>
                <div className='mt-auto'>
                    <h4 className='text-lg text-gray-900 font-bold'>First Name: <span className='text-blue-500'>{admissionForm.firstName}</span></h4>
                </div>
                <div className='mt-auto'> 
                    <h4 className='text-lg text-gray-900 font-bold'>Last Name: <span className='text-blue-500'>{admissionForm.lastName}</span></h4>
                </div>
            </div>
            <hr />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-8'>
                <div>
                    <h4 className='text-lg text-gray-900 font-bold'>Admission To Class: <span className='text-blue-500'>{admissionForm.admitClass}</span></h4>
                </div>
                <div>
                    <h4 className='text-lg text-gray-900 font-bold'>Shift: <span className='text-blue-500'>{admissionForm.shift}</span></h4>
                </div>
            </div>
            
            <hr />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-8'>
                <div>
                    <h4 className='text-lg text-gray-900 font-bold'>Father Name: <span className='text-blue-500'>{admissionForm.fatherName}</span></h4>
                </div>
                <div>
                    <h4 className='text-lg text-gray-900 font-bold'>Father Profession: <span className='text-blue-500'>{admissionForm.fatherProfession}</span></h4>
                </div>
            </div>

            <hr />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-8'>
                <div>
                    <h4 className='text-lg text-gray-900 font-bold'>Mother Name: <span className='text-blue-500'>{admissionForm.motherName}</span></h4>
                </div>
                <div>
                    <h4 className='text-lg text-gray-900 font-bold'>Mother Profession: <span className='text-blue-500'>{admissionForm.motherProfession}</span></h4>
                </div>
            </div>
            
            <hr />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8'>
                <div>
                    <h4 className='text-lg text-gray-900 font-bold'>Gender: <span className='text-blue-500'>{admissionForm.gender}</span></h4>
                </div>
                <div>
                    <h4 className='text-lg text-gray-900 font-bold'>Birth Date: <span className='text-blue-500'>{admissionForm.birthDate}</span></h4>
                </div>
                <div>
                    <h4 className='text-lg text-gray-900 font-bold'>Phone: <span className='text-blue-500'>{admissionForm.phoneNumber}</span></h4>
                </div>
            </div>

            <hr />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8'>
                <div>
                    <h4 className='text-lg text-gray-900 font-bold'>Birth Certificate No: <span className='text-blue-500'>{admissionForm.birthCertificateNo}</span></h4>
                </div>
                <div>
                    <h4 className='text-lg text-gray-900 font-bold'>Post Office: <span className='text-blue-500'>{admissionForm.postOffice}</span></h4>
                </div>
                <div>
                    <h4 className='text-lg text-gray-900 font-bold'>District: <span className='text-blue-500'>{admissionForm.district}</span></h4>
                </div>
            </div>
            
            <hr />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-8'>
                <div>
                    <h4 className='text-lg text-gray-900 font-bold'>Permanent Address: <span className='text-blue-500'>{admissionForm.permanentAddress}</span></h4>
                </div>
                <div>
                    <h4 className='text-lg text-gray-900 font-bold'>Present Address: <span className='text-blue-500'>{admissionForm.presentAddress}</span></h4>
                </div>

            </div>

        </div>
    </div>
    );
};

export default IndividualForms;