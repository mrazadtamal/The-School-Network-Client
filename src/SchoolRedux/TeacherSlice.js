import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: 0,
  notice: []
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
 
    extraReducers: (builder) => {
    //   builder.addCase(PrincipalNoticePublish.fulfilled, (state, action) => {
    //     alert('Notice Pulish successfully')
    //   })
    //   builder.addCase(GetNotice.fulfilled, (state, action) => {
    //     state.notice = action.payload
    //   })
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, } = TeeacherReducer.actions

export default TeeacherReducer.reducer