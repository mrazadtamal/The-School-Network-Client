import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

//Teacher geting all requst from student
export const GetExtraCareRequest = createAsyncThunk(
  'Teacher/getExtraCareRequest',
  async () => {
    const response = await fetch('http://localhost:5000/requestCare').then(res=> res.json())
    return  response;
   
  }
)

const initialState = {
  value: 0,
  extraCares: []
}

export const TeeacherReducer = createSlice({
  name: 'School',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
    extraReducers: (builder) => {
      builder.addCase(GetExtraCareRequest.fulfilled, (state, action) => {
        state.extraCares = action.payload
      })

    },

})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, } = TeeacherReducer.actions

export default TeeacherReducer.reducer