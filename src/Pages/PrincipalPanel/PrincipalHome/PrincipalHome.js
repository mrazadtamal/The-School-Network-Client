import React from 'react';
import bannarimg from '../../../img/principalhomeimg.jpg';
import '../Pricipal.css';
import '../PrincipalOther.css'
const PrincipalHome = () => {
    return (
        <div className="container mx-auto ">
            <h1 className='text-6xl text-center text-blue-900 mt-4 principal_home_title'> The School Network</h1>
            <img className='rounded-lg mx-auto mt-12 principalhomeimg bg-indigo-500 shadow-lg shadow-indigo-500/50 ' src={bannarimg} alt="" />
        </div>
    );
};

export default PrincipalHome;