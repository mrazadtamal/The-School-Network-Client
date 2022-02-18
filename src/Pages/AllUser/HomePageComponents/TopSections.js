<<<<<<< HEAD
import React from 'react';
import { FaEdit,FaMoneyCheckAlt ,FaBook,FaScroll} from "react-icons/fa";
const iconbg={
height:"33px",
width:"33px",
marginLeft:"132px"
}
const TopSections = () => {
    return (
        <div>
            <div className="pt-20 pb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  grid-gap-2 sm:place-content-center sm:place-items-center  text-center overflow-hidden ">

                <div className="text-center  bg-sky-900		text-white p-10  hover:scale-105 cursor-pointer	 ">
                    <FaEdit style={iconbg}/>
                    <h2 className="text-3xl">Admission</h2>
                    <p>
                        We have students coming from different backgrounds, cultures, and nationalities as well. More than 500 international students are enrolled in various programs.


                    </p>
                </div>

                <div className="text-center  bg-indigo-900 	text-white p-10  hover:scale-105 cursor-pointer	">
                    <FaBook className="h-10 w-10 ml-32"/>
                    <h2 className="text-3xl">Programs</h2>
                    <p>
                        We are offering 36 undergraduate and graduate programs under 25 departments. Our curriculum is designed to help the students to develop the skills required for 21st-century employment.With World Best Teachers.




                    </p>
                </div>


                <div className="text-center  bg-sky-900	 	text-white p-10 hover:scale-105 cursor-pointer	">
                    <FaMoneyCheckAlt className="h-10 w-10 ml-32"/>
                    <h2 className="text-3xl">Tuition Fees</h2>
                    <p>
                        We offer affordable tuition fees for students with the option to pay them in multiple installments to create convenience for students.




                    </p>
                </div>

                <div className="text-center  bg-indigo-900 	text-white p-10 hover:scale-105 cursor-pointer	 ">
                    <FaScroll className="h-10 w-10 ml-32"/>
                    <h2 className="text-3xl">Scholarship</h2>
                    <p>
                        We make sure all our students get the help they need to complete the degree. Scholarships are available for students with excellent academic results as well as for the students who are struggling financially.


                    </p>
                </div>
            </div>

        </div>
    );
=======
import React from "react";
import { FaEdit, FaMoneyCheckAlt, FaBook, FaScroll } from "react-icons/fa";
const iconbg = {
  height: "33px",
  width: "33px",
  marginLeft: "132px",
};
const TopSections = () => {
  return (
    <div data-aos="fade-right">
      <div className="pt-20 pb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  grid-gap-2 sm:place-content-center sm:place-items-center  text-center overflow-hidden ">
        <div className="text-center  bg-sky-900		text-white p-10  hover:scale-105 cursor-pointer	 ">
          <FaEdit style={iconbg} />
          <h2 className="text-3xl">Admission</h2>
          <p>
            We have students coming from different backgrounds, cultures, and
            nationalities as well. More than 500 international students are
            enrolled in various programs.
          </p>
        </div>

        <div className="text-center  bg-indigo-900 	text-white p-10  hover:scale-105 cursor-pointer	">
          <FaBook className="h-10 w-10 ml-32" />
          <h2 className="text-3xl">Programs</h2>
          <p>
            We are offering 36 undergraduate and graduate programs under 25
            departments. Our curriculum is designed to help the students to
            develop the skills required for 21st-century employment.With World
            Best Teachers.
          </p>
        </div>

        <div className="text-center  bg-sky-900	 	text-white p-10 hover:scale-105 cursor-pointer	">
          <FaMoneyCheckAlt className="h-10 w-10 ml-32" />
          <h2 className="text-3xl">Tuition Fees</h2>
          <p>
            We offer affordable tuition fees for students with the option to pay
            them in multiple installments to create convenience for students.
          </p>
        </div>

        <div className="text-center  bg-indigo-900 	text-white p-10 hover:scale-105 cursor-pointer	 ">
          <FaScroll className="h-10 w-10 ml-32" />
          <h2 className="text-3xl">Scholarship</h2>
          <p>
            We make sure all our students get the help they need to complete the
            degree. Scholarships are available for students with excellent
            academic results as well as for the students who are struggling
            financially.
          </p>
        </div>
      </div>
    </div>
  );
>>>>>>> a3fb3398f70c09fdc74910e5d4a8ab4dec7aeabc
};

export default TopSections;
