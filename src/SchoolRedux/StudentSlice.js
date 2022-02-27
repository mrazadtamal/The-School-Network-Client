import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  value: 0,
  notice: [],
};

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

export const StudentReducer = createSlice({
  name: "Student",
  initialState: {
    value: 0,
    results: [],
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  // this is where the payload is set to the result array or initial state
  extraReducers: (builder) => {
    builder.addCase(GetResult.fulfilled, (state, action) => {
      state.results = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment } = StudentReducer.actions;

export default StudentReducer.reducer;
