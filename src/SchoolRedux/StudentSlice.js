import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

// fetch the data from the database
//for fetching the data from the api and database we use asyncthunk
export const GetResult = createAsyncThunk("Student/seeResult", async () => {
  console.log("Hitted Student Slice");
  const response = await fetch("http://localhost:5000/student/results")
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
  return response;
});

// request for extra care

export const RequestExtraCare = createAsyncThunk(
  "Student/RequestCare",
  async (data) => {
    console.log("Hitted Extra Care");
    const response = await fetch("http://localhost:5000/student/requestCare", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
    return response;
  }
);

// Get the current student
export const getStudentInfo = createAsyncThunk(
  "Student/studentProfile",
  async (email) => {
    const response = await fetch(
      `http://localhost:5000/student/studentProfile?email=${email}`
    ).then((res) => res.json());
    return response;
  }
);

// Update student profile picture
export const updateStudentPP = createAsyncThunk(
  "Student/updateStudentPP",
  async (data) => {
    console.log("Hitted", data);
    const response = await fetch(
      `http://localhost:5000/student/updateStudentPP?email=${data.email}`,
      {
        method: "PUT",
        body: data.fd,
      }
    )
      .then((res) => res.json())
      .catch((err) => console.log(err));
    return response;
  }
);

const initialState = {
  value: 0,
  results: [],
  studentInfo: {},
};

export const StudentReducer = createSlice({
  name: "Student",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  // this is where the payload is set to the result array or initial state
  extraReducers: (builder) => {
    // get result promise
    builder.addCase(GetResult.fulfilled, (state, action) => {
      state.results = action.payload;
    });

    // post extra care promise

    builder.addCase(RequestExtraCare.fulfilled, (state, action) => {
      Swal.fire("Success", "Application Submitted Successfully", "success");
    });
    builder.addCase(getStudentInfo.fulfilled, (state, action) => {
      state.studentInfo = action.payload;
    });
    builder.addCase(updateStudentPP.fulfilled, (state, action) => {
      Swal.fire("Success", "Notice Publish Successfull", "success");
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment } = StudentReducer.actions;

export default StudentReducer.reducer;
