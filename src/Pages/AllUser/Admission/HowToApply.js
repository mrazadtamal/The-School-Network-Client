import React from 'react';
import AllUserNavbar from "../AllUserNavbar/AllUserNavbar";
import Foooter from "../HomePageComponents/Foooter";

const HowToApply = () => {
    return (
        <div>
            <AllUserNavbar/>
            <div className="container pl-20">
                <div className="p-5 bg-green-500	 drop-shadow-lg  rounded-lg mt-5 mb-10">
                    <h2 className="text-center text-3xl text-white">How To Apply</h2>
                </div>

                <hr/>

                <div className="">
                    <p>1. Parent(s) will initially collect the Admission Form(s) from the School Office/ online</p>
                    <p>2. Parent(s) should submit the filled in form(s) at MEMS office within the given date(s).</p>
                    <p>3. Applicant has to face both written Test and Viva.</p>
                    <p>4. Play Group student(s) and parents have to face an interview with the Principal on scheduled date.</p>
                    <p>5. Admission Forms are available at MEMS School office and web site of Methodist English Medium School. (www.mems.edu.bd Admission Online Admission)</p>


                    <h5 className='fw-bold'>Necessary Documents for the Applicants:</h5>
                    <li>On the submission of the filled in Admission Form(s), parents must submit the following documents.</li>
                    <li>Photocopy of the last Exam’s Report Card (Academic Transcript)</li>
                    <li>Birth Certificate of the Applicant (issued by City Corporation/Union Council/Clinic/Hospital/vaccination Program).</li>
                    <li>Photocopy of the NID (Parents)</li>
                    <li>TIN Certificate (Parents)</li>

                </div>



            </div>
            <Foooter/>

        </div>
    );
};

export default HowToApply;
