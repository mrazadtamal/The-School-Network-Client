import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFirebase from "../../Shared/Authentication/Authentication";
import { useParams } from "react-router-dom";

import { GetSingleData } from "../../../SchoolRedux/PrincipalSlice";

const SingleData = () => {
  const dispatch = useDispatch();
  const { user } = useFirebase();
  const { id } = useParams();

  useEffect(() => {
    dispatch(GetSingleData(id));
  }, [id, dispatch]);
  const data = useSelector((state) => state.principalStore.SingleData);

  return (
    <>
      <div class=" h-full flex justify-center items-center  ">
        <card class="grid grid-cols-6 max-w-5xl mx-8 rounded-xl bg-green-500  ">
          <div class="col-span-5 ">
            <h2 class="font-bold text-3xl text-white ml-10 mt-8">
              <p>Request For Fee Reduction By {data?.name}</p>
            </h2>

            <p class=" text-white font-semibold  text-lg ml-10 mt-2">
              Name : {data?.name}
            </p>
            <p class="font-semibold text-white text-lg ml-10 mt-2">
              Email : {data?.email}
            </p>
            <p class="font-semibold text-white text-lg ml-10 mt-2">
              Father Name : {data?.fatherName}
            </p>
            <p class="font-semibold text-white text-lg ml-10 mt-2">
              Mother Name : {data?.motherName}
            </p>
            <p class="font-semibold text-white text-lg ml-10 mt-2">
              Class : {data?.class}
            </p>
            <p class="font-semibold text-white text-lg ml-10 mt-2">
              Section : {data?.section}
            </p>
            <p class="font-semibold text-white text-lg ml-10 mt-2  ">
              Roll : {data?.roll}
            </p>
            <p class="font-semibold text-white text-lg ml-10 mt-2  ">
              Phone : {data?.phone}
            </p>
            <p class="font-semibold text-white text-lg ml-10 mt-2 ">
              Father Occupation : {data?.fatherOccupation}
            </p>
            <p class="font-semibold text-white text-lg ml-10 mt-2  ">
              Father Monthly Income : {data?.fatherMonthlyIncome}
            </p>
            <p class="font-semibold text-white text-lg ml-10 mt-2  ">
              Father Contact No : {data?.fatherContactNo}
            </p>
            <p class="font-semibold text-white text-lg ml-10 mt-2  mb-5">
              Details : {data?.details}
            </p>
          </div>
        </card>
      </div>
    </>
  );
};

export default SingleData;
