import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'
//Principal Publisshing Text notice
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
      Swal.fire(
          '!',
          'Error!',
          'error'
        )
  });
    return response
  }
)
//Principal Publisshing image notice
export const PublishImageNotice = createAsyncThunk(
  'Principal/PublishImageNotice',
  async (fd) => {
    console.log('hitted img')
    const response = await fetch('http://localhost:5000/PublishImageNotice',{
      method: 'POST',
      
      body: fd
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
//principal geting all previous notices
export const GetingPreviousNotice = createAsyncThunk(
  'Principal/getPreviousNotice',
  async () => {
    const response = await fetch('http://localhost:5000/PreviousNotice').then(res=> res.json())
    return  response;
   
  }
)
//Principal Deleting  Notice
export const DeleteNotice = createAsyncThunk(
  'Principal/DeleteNotice',
  async (id) => {
    const response = await fetch(`http://localhost:5000/DeleteNotice/${id}`,{
      method: 'DELETE'}).then(res=> res.json()).catch(error => {
      Swal.fire(
          '!',
          'Error!',
          'error'
        )
  });
    return response
  }
)

//Principal put edit  Notice
export const PutEditNotice = createAsyncThunk(
  'Principal/PutEditNotice',
  async (data) => {
    console.log('hitted slice', data)
    const response = await fetch(`http://localhost:5000/PutEditNotice/${data._id}`,{
    method: 'PUT',
    headers:{
      'content-type':'application/json'
    },
    body: JSON.stringify(data)
    }).then(res=> res.json()).catch(error => {
      console.log(error)
  });
    return response
  }
)
//Principal Publisshing Text Announcement
export const PrincipalAnnouncementPublish = createAsyncThunk(
  'Principal/PublishAnnouncement',
  async (data) => {
    console.log('hitted slice', data)
    const response = await fetch('http://localhost:5000/publisAnnouncement',{
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
//Principal Publisshing image Announcement
export const PublishImageAnnouncement = createAsyncThunk(
  'Principal/PublishImageAnnouncement',
  async (fd) => {
    console.log('hitted img')
    const response = await fetch('http://localhost:5000/PublishImageAnnouncement',{
      method: 'POST',
      
      body: fd
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
//principal geting all previous Announcement
export const GetingPreviousAnnouncement = createAsyncThunk(
  'Principal/getPreviousAnnouncement',
  async () => {
    const response = await fetch('http://localhost:5000/PreviousAnnouncement').then(res=> res.json())
    return  response;
   
  }
)
//Principal Deleting  Announcement
export const DeleteAnnouncement = createAsyncThunk(
  'Principal/DeleteAnnouncement',
  async (id) => {
    const response = await fetch(`http://localhost:5000/DeleteAnnouncement/${id}`,{
      method: 'DELETE'}).then(res=> res.json()).catch(error => {
      Swal.fire(
          '!',
          'Error!',
          'error'
        )
  });
    return response
  }
)
//Principal put edit  Announcement
export const PutEditAnnouncement = createAsyncThunk(
  'Principal/PutEditAnnouncement',
  async (data) => {
    console.log('hitted slice', data)
    const response = await fetch(`http://localhost:5000/PutEditAnnouncement/${data._id}`,{
    method: 'PUT',
    headers:{
      'content-type':'application/json'
    },
    body: JSON.stringify(data)
    }).then(res=> res.json()).catch(error => {
      console.log(error)
  });
    return response
  }
)
export const PrincipalReducer = createSlice({
  name: 'Principal',
  initialState:{
    value: 0,
    notices: [],
    announcement: []
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
    extraReducers: (builder) => {
      builder.addCase(PrincipalNoticePublish.fulfilled, (state, action) => {
        Swal.fire(
          'Success',
          'Notice Publish Successfull',
          'success'
        )
      })
      builder.addCase(PublishImageNotice.fulfilled, (state, action) => {
        Swal.fire(
          'Success',
          'Notice Publish Successfull',
          'success'
        )
      })
      builder.addCase(GetingPreviousNotice.fulfilled, (state, action) => {
        state.notices = action.payload
      })
      builder.addCase(DeleteNotice.fulfilled, (state, action) => {
        Swal.fire(
          'Success',
          'Notice Deleted Successfull',
          'success'
        )
      })
      builder.addCase(PutEditNotice.fulfilled, (state, action) => {
        Swal.fire(
          'Success',
          'Notice Edited Successfully',
          'success'
        )
      })
      builder.addCase(PrincipalAnnouncementPublish.fulfilled, (state, action) => {
        Swal.fire(
          'Success',
          'Announcement Publish Successfull',
          'success'
        )
      })
      builder.addCase(PublishImageAnnouncement.fulfilled, (state, action) => {
        Swal.fire(
          'Success',
          'Announcement Publish Successfull',
          'success'
        )
      })
      builder.addCase(GetingPreviousAnnouncement.fulfilled, (state, action) => {
        state.announcement = action.payload
      })
      builder.addCase(DeleteAnnouncement.fulfilled, (state, action) => {
        Swal.fire(
          'Success',
          'Announcement Deleted Successfull',
          'success'
        )
      })
      builder.addCase(PutEditAnnouncement.fulfilled, (state, action) => {
        Swal.fire(
          'Success',
          'Announcement Edited Successfully',
          'success'
        )
      })
    },

})

// Action creators are generated for each case reducer function
export const { increment } = PrincipalReducer.actions

export default PrincipalReducer.reducer