import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

//posting PrincipalPublishNotice data to database
export const PrincipalNoticePublish = createAsyncThunk(
  'Principal/PublishNotice',
  async (data) => {
    console.log('hitted slice', data)
    const response = await fetch('http://localhost:5000/publisNotice',{
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(data)
    }).then(res=> res.json()).catch(error => {
      // Swal.fire(
      //     '!',
      //     'Error!',
      //     'error'
      //   )
  });
    return response
  }
)

const initialState = {
  value: 0,
  notice: []
}

export const PrincipalReducer = createSlice({
  name: 'Principal',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
 
    extraReducers: (builder) => {
      builder.addCase(PrincipalNoticePublish.fulfilled, (state, action) => {
        alert('Notice Pulish successfully')
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment } = PrincipalReducer.actions

export default PrincipalReducer.reducer