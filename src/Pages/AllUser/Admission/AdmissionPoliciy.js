import React from 'react';
import AllUserNavbar from "../AllUserNavbar/AllUserNavbar";
import Foooter from "../HomePageComponents/Foooter";

const AdmissionPolicy = () => {
    return (
        <div>
            <AllUserNavbar/>
              <div className="container pl-20">
                 <div className="p-5 bg-green-500	 drop-shadow-lg  rounded-lg mt-5 mb-10">
                     <h2 className="text-center text-3xl text-white">Admission Procedure and Policy</h2>
                 </div>

                  <hr/>

               <div className="">
                   <li>Parent(s) will initially collect the Admission Test Form(s) from the school office.</li>
                   <li>Parent(s) should submit the filled in form(s) within the given date(s) and collect the Admit</li>
                   <li>On the submission of filled in Admission Test Form(s) parent(s)must submit the BirthCertificate(s) issued by City Corporation /Union Council/Clinic/Hospital Vaccination Card etcand two (02) stamp size photographs of the applicant(s) and the photocopy of last exam’s Report Card(s) (if possible).</li>
                   <li>Applicant(s) must face both written and viva. No written test will be held for play GroupStudent(s).</li>
                   <li>Applicant(s) approved for admission will be notified through the school office Notice Board.</li>
                   <li>Applicant(s) eligible for admission will be asked to collect main Application Form(s) from</li>
                   <li>Admission Form(s) and other form(s) must be duly and completely filled in by the parents.
                       Admission should be taken within the given date(s) from the school office.Four(04) stampsize photographs of student(s) and one(01) stamp size, one(01) passport size photographs
                       of each of the parents or guardians must be submitted to the school office during admission.</li>
                   <li>The name of the Candidate(s) will be registered during the issuance of Application Form(s).</li>
                   <li>Enrollment of New Student(s) should be completed as per schedule given from the office.</li>
                   <li>New admission is considered on the basis of previous school record(s), personal interview(s)
                       and the result(s) of the Admission test.</li>
               </div>



              </div>
            <Foooter/>
            
        </div>
    );
};

export default AdmissionPolicy;
