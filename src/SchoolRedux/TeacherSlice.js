import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2';

//Teacher geting all requst from student
export const GetExtraCareRequest = createAsyncThunk(
  'Teacher/getExtraCareRequest',
  async () => {
    const response = await fetch('https://blooming-citadel-14218.herokuapp.com/requestCare').then(res=> res.json())
    return  response;
   
  }
)
//Result Publish For Student
export const PublishResult = createAsyncThunk(
  'Teacher/PublishResult',
  async (data) => {
    console.log('hitted result', data)
    const response = await fetch('http://localhost:5000/PublishResult',{
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(data)
    }).then(res=> res.json()).catch(error => {
      Swal.fire(
          '!',
          'Error!',
          'error'
        )
  });
    return response
  }
)


const initialState = {
  value: 0,
  extraCares: [],
}

export const TeeacherReducer = createSlice({
  name: 'Teahcer',
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
      builder.addCase(PublishResult.fulfilled, (state, action) => {
        Swal.fire(
          'Success',
          'Result Publish Success',
          'success'
        )
      })

    },

})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, } = TeeacherReducer.actions

export default TeeacherReducer.reducer