import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiMessageAltCheck } from "react-icons/bi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { ConcessionFormData } from "../../../SchoolRedux/PrincipalSlice";
import { useNavigate } from "react-router-dom";

const ConcessionForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(ConcessionFormData());
  }, [dispatch]);

  const data = useSelector((state) => state.principalStore.ConcessionData);

  console.log(data);

  return (
    <>
      <div>
        <h1 className="text-center mt-12 text-5xl font-bold">
          Concession Form All Data
        </h1>

        <div className="container mt-12 text-white">
          {data?.map((item) => (
            <div className="ml-4 mt-10 mr-4 md:ml-28 md:mr-28 bg-white pt-2 pb-2 text-black border-4 border-b-8 border-green-500">
              <div className="ml-4 text-2xl mr-4">
                Request For Fee Reduction By {item?.name}
                <div className="bottom">
                  <div className="hold flex space-x-2 border-t p-3 mt-3">
                    <div
                      onClick={() =>
                        navigate(`/PrincipalDashboard/SingleData/${item._id}`)
                      }
                      className="border-green-600 rounded text-white bg-green-600 text-base cursor-pointer border border-b-4 p-1 px-3 font-bold"
                    >
                      View
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="extra_care_section mt-8">
        {data?.map((item) => (
          <div key={item._id} className="extra_care_div mx-auto p-4 ">
            <h4 className="font-bold text-xl care_student_title">
              <BiMessageAltCheck
                className="react__button_icons care_icons"
                size={40}
              />{" "}
              Concession Request by {item?.name}
            </h4>
            <p
              onClick={() =>
                navigate(`/PrincipalDashboard/SingleData/${item._id}`)
              }
              className="care_view_btn"
            >
              VIEW
              <FaArrowAltCircleRight
                className="react__button_icons ml-2"
                size={25}
              />
            </p>
          </div>
        ))}
      </div> */}
      </div>
    </>
  );
};

export default ConcessionForm;
