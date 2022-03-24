import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
            <div className="ml-4 mt-6 mr-4 md:ml-28 md:mr-28 bg-white pt-2 pb-2 text-black border-4 border-b-8 border-green-500">
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
      </div>
    </>
  );
};

export default ConcessionForm;
