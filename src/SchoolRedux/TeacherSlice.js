import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

//Teacher getting all request from student
export const GetExtraCareRequest = createAsyncThunk(
  "Teacher/getExtraCareRequest",
  async (teacherclass) => {
    const response = await fetch(
      `http://localhost:5000/requestCare?teacherclass=${teacherclass}`
    ).then((res) => res.json());
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

// Add teachers information
export const addTeacherInfo = createAsyncThunk(
  "Teacher/AddTeacherInfo",
  async (data) => {
    const response = await fetch(
      `http://localhost:5000/AddTeacherInfo?email=${data.email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .catch((err) => console.log(err));
    return response;
  }
);

//Result Publish For Student
export const PublishResult = createAsyncThunk(
  "Teacher/PublishResult",
  async (data) => {
    console.log("hitted result", data);
    const response = await fetch("http://localhost:5000/PublishResult", {
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

//Get Individual Care of Student
export const GetIndividualCare = createAsyncThunk(
  "Teacher/GetIndividualCare",
  async (id) => {
    const response = await fetch(
      `http://localhost:5000/GetIndividualCare/${id}`
    )
      .then((res) => res.json())
      .catch((error) => {
        Swal.fire("!", "Error!", "error");
      });
    return response;
  }
);
const initialState = {
  value: 0,
  extraCares: [],
  teacherInfo: {},
  IndividualCare: {},
};

export const TeacherReducer = createSlice({
  name: "Teacher",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
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
        Swal.fire("Success", "Profile Picture Updated Successfully", "success");
      });
      builder.addCase(addTeacherInfo.fulfilled, (state, action) => {
        Swal.fire("Success", "Information Updated Successfully", "success");
      });
      builder.addCase(PublishResult.fulfilled, (state, action) => {
        Swal.fire("Success", "Result Publish Success", "success");
      });
      builder.addCase(GetIndividualCare.fulfilled, (state, action) => {
        state.IndividualCare = action.payload;
      });
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
