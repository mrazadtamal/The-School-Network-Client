import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

//Teacher getting all request from student
export const GetExtraCareRequest = createAsyncThunk(
  "Teacher/getExtraCareRequest",
  async () => {
    const response = await fetch("http://localhost:5000/requestCare").then(
      (res) => res.json()
    );
    return response;
  }
);

// Publish notice from teachers
export const noticePublishFromTeacher = createAsyncThunk(
  "Teacher/PublishNotice",
  async (data) => {
    const response = await fetch("http://localhost:5000/PublishNotice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((error) => {
        Swal.fire("!", "Error!", "error");
      });
    return response;
  }
);

// Get the current teacher
export const getTeacherInfo = createAsyncThunk(
  "Teacher/TeacherProfile",
  async (email) => {
    const response = await fetch(
      `http://localhost:5000/TeacherProfile?email=${email}`
    ).then((res) => res.json());
    return response;
  }
);

// Update profile picture
export const updateTeacherDP = createAsyncThunk(
  "Teacher/UpdateTeacherDP",
  async (data) => {
    console.log("Hitted", data);
    const response = await fetch(
      `http://localhost:5000/UpdateTeacherDP?email=${data.email}`,
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
  extraCares: [],
  teacherInfo: {},
};

export const TeacherReducer = createSlice({
  name: "Teacher",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetExtraCareRequest.fulfilled, (state, action) => {
      state.extraCares = action.payload;
    });
    builder.addCase(noticePublishFromTeacher.fulfilled, (state, action) => {
      Swal.fire("Success", "Notice Published Successfully", "success");
    });
    builder.addCase(getTeacherInfo.fulfilled, (state, action) => {
      state.teacherInfo = action.payload;
    });
    builder.addCase(updateTeacherDP.fulfilled, (state, action) => {
      Swal.fire("Success", "Notice Publish Successfull", "success");
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } =
  TeacherReducer.actions;

export default TeacherReducer.reducer;
