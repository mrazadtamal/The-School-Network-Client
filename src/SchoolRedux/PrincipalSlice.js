import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

//Principal Publisshing Text notice
export const PrincipalNoticePublish = createAsyncThunk(
  "Principal/PublishNotice",
  async (data) => {

    const response = await fetch('https://blooming-citadel-14218.herokuapp.com/publisNotice',{
      method: 'POST',
      headers:{
        'content-type':'application/json',
        
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
);
//Principal Publisshing image notice
export const PublishImageNotice = createAsyncThunk(
  "Principal/PublishImageNotice",
  async (fd) => {
    const response = await fetch('https://blooming-citadel-14218.herokuapp.com/PublishImageNotice',{
      method: 'POST',
      
      body: fd
    }).then(res=> res.json()).catch(error => {
      Swal.fire(
          '!',
          'Error!',
          'error'
        )
  });
    return response
  }
);
//principal geting all previous notices
export const GetingPreviousNotice = createAsyncThunk(
  "Principal/getPreviousNotice",
  async () => {
    const response = await fetch('https://blooming-citadel-14218.herokuapp.com/PreviousNotice',).then(res=> res.json())
    return  response;
   
  }
);
//Principal Deleting  Notice
export const DeleteNotice = createAsyncThunk(
  "Principal/DeleteNotice",
  async (id) => {
    const response = await fetch(`https://blooming-citadel-14218.herokuapp.com/DeleteNotice/${id}`,{
      method: 'DELETE' ,}).then(res=> res.json()).catch(error => {
      Swal.fire(
          '!',
          'Error!',
          'error'
        )
  });
    return response
  }
);

//Principal put edit  Notice
export const PutEditNotice = createAsyncThunk(
  "Principal/PutEditNotice",
  async (data) => {
    console.log('hitted slice', data)
    const response = await fetch(`https://blooming-citadel-14218.herokuapp.com/PutEditNotice/${data._id}`,{
    method: 'PUT',
    headers:{
      'content-type':'application/json',
      
    },
    body: JSON.stringify(data)
    }).then(res=> res.json()).catch(error => {
      console.log(error)
  });
    return response
  }
);
//Principal Publisshing Text Announcement
export const PrincipalAnnouncementPublish = createAsyncThunk(
  "Principal/PublishAnnouncement",
  async (data) => {
    console.log('hitted slice', data)
    const response = await fetch('https://blooming-citadel-14218.herokuapp.com/publisAnnouncement',{
      method: 'POST',
      headers:{
        'content-type':'application/json',
        
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
);
//Principal Publisshing image Announcement
export const PublishImageAnnouncement = createAsyncThunk(
  "Principal/PublishImageAnnouncement",
  async (fd) => {
    console.log('hitted img')
    const response = await fetch('https://blooming-citadel-14218.herokuapp.com/PublishImageAnnouncement',{
      method: 'POST',
      body: fd
    }).then(res=> res.json()).catch(error => {
      Swal.fire(
          '!',
          'Error!',
          'error'
        )
  });
    return response
  }
);
//principal geting all previous Announcement
export const GetingPreviousAnnouncement = createAsyncThunk(
  "Principal/getPreviousAnnouncement",
  async () => {
    const response = await fetch('https://blooming-citadel-14218.herokuapp.com/PreviousAnnouncement').then(res=> res.json())
    return  response;
   
  }
);
//Principal Deleting  Announcement
export const DeleteAnnouncement = createAsyncThunk(
  "Principal/DeleteAnnouncement",
  async (id) => {
    const response = await fetch(`https://blooming-citadel-14218.herokuapp.com/DeleteAnnouncement/${id}`,{
      method: 'DELETE'}).then(res=> res.json()).catch(error => {
      Swal.fire(
          '!',
          'Error!',
          'error'
        )
  });
    return response
  }
);
//Principal put edit  Announcement
export const PutEditAnnouncement = createAsyncThunk(
  "Principal/PutEditAnnouncement",
  async (data) => {
    console.log('hitted slice', data)
    const response = await fetch(`https://blooming-citadel-14218.herokuapp.com/PutEditAnnouncement/${data._id}`,{
    method: 'PUT',
    headers:{
      'content-type':'application/json',
      
    },
    body: JSON.stringify(data)
    }).then(res=> res.json()).catch(error => {
      console.log(error)
  });
    return response
  }
);
//principal geting all previous Announcement
export const GetAllStudents = createAsyncThunk(
  "Principal/GetAllStudents",
  async (stduentclass) => {
    const response = await fetch(`https://blooming-citadel-14218.herokuapp.com/GetAllStudents?studentclass=${stduentclass}`).then(res=> res.json())
    return  response;
   
  }
);
//principal and teacher geting individual performance of student
export const IndividualPerformance = createAsyncThunk(
  "Principal/IndividualPerformance",
  async (id) => {
    const response = await fetch(`https://blooming-citadel-14218.herokuapp.com/IndividualPerformance/${id}`).then(res=> res.json())
    return  response;
   
  }
);
//principal submitting payment
export const UploadMonthlyPayment = createAsyncThunk(
  "Principal/UploadMonthlyPayment",
  async (data) => {
    console.log('payment', data)
    const response = await fetch('https://blooming-citadel-14218.herokuapp.com/UploadMonthlyPayment',{
      method: 'POST',
      headers:{
        'content-type':'application/json',
        
      },
      body: JSON.stringify(data)
    }).then(res=> res.json())
    return  response;
   
  }
);
//principal Geting all teachers list
export const GetAllTeachers = createAsyncThunk(
  "Principal/GetAllTeachers",
  async (data) => {
    const response = await fetch('https://blooming-citadel-14218.herokuapp.com/GetAllTeachers',).then(res=> res.json())
    return  response;
   
  }
);
//principal submitting payment
export const PostAdmissionData = createAsyncThunk(
  "Principal/PostAdmissionData",
  async (data) => {
   
    const response = await fetch('https://blooming-citadel-14218.herokuapp.com/addmissionpayment',{
      method: 'POST',
      
      body: data
    }).then(res=> res.json())
    return  response;
   
  }
);
//principal getting individual  payment details
export const GetlPaymentDetails = createAsyncThunk(
  "Principal/GetlPaymentDetails",
  async (email) => {
    
    const response = await fetch(`https://blooming-citadel-14218.herokuapp.com/GetlPaymentDetails?email=${email}`).then(res=> res.json())
    return  response;
   
  }
);
//principal getting individual  payment details
export const GetAdmissionForms = createAsyncThunk(
  "Principal/GetAdmissionForms",
  async () => {
    const response = await fetch('https://blooming-citadel-14218.herokuapp.com/GetAdmissionForms').then(res=> res.json())
    return  response;
   
  }
);
//principal getting individual  payment details
export const IndividualAdmissionForm = createAsyncThunk(
  "Principal/IndividualAdmissionForm",
  async (id) => {

    const response = await fetch(`https://blooming-citadel-14218.herokuapp.com/IndividualAdmissionForm/${id}`).then(res=> res.json())
    return  response;
   
  }
);

//principal getting individual  payment details
export const RemoveTeacher = createAsyncThunk(
  "Principal/RemoveTeacher",
  async (id) => {

    const response = await fetch(`https://blooming-citadel-14218.herokuapp.com/RemoveTeacher/${id}`,{
      method: 'DELETE'
    }).then(res=> res.json())
    return  response;
   
  }
);
//Get Individual ConcessionForm data
export const GetSingleData = createAsyncThunk(
  "Principal/GetSingleData",
  async (id) => {
    const response = await fetch(`http://localhost:5000/GetSingleData/${id}`)
      .then((res) => res.json())
      .catch((error) => {
        Swal.fire("!", "Error!", "error");
      });
    return response;
  }
);

//principal Gating all ConcessionForm data
export const ConcessionFormData = createAsyncThunk(
  "Principal/ConcessionFormData",
  async (data) => {
    const response = await fetch(
      "http://localhost:5000/ConcessionFormData"
    ).then((res) => res.json());
    return response;
  }
);

export const PrincipalReducer = createSlice({
  name: "Principal",
  initialState: {
    value: 0,
    notices: [],
    announcement: [],
    Allstudents: [],
    performances: [],
    allTeachers: [],
    PaymentDetails: [],
    admissionForms: [],
    admissionForm: {},
    ConcessionData: [],
    SingleData: {},
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PrincipalNoticePublish.fulfilled, (state, action) => {
      Swal.fire("Success", "Notice Publish Successfull", "success");
    });
    builder.addCase(PublishImageNotice.fulfilled, (state, action) => {
      Swal.fire("Success", "Notice Publish Successfull", "success");
    });
    builder.addCase(GetingPreviousNotice.fulfilled, (state, action) => {
      state.notices = action.payload;
    });
    builder.addCase(DeleteNotice.fulfilled, (state, action) => {
      Swal.fire("Success", "Notice Deleted Successfull", "success");
    });
    builder.addCase(PutEditNotice.fulfilled, (state, action) => {
      Swal.fire("Success", "Notice Edited Successfully", "success");
    });
    builder.addCase(PrincipalAnnouncementPublish.fulfilled, (state, action) => {
      Swal.fire("Success", "Announcement Publish Successfull", "success");
    });
    builder.addCase(PublishImageAnnouncement.fulfilled, (state, action) => {
      Swal.fire("Success", "Announcement Publish Successfull", "success");
    });
    builder.addCase(GetingPreviousAnnouncement.fulfilled, (state, action) => {
      state.announcement = action.payload;
    });
    builder.addCase(DeleteAnnouncement.fulfilled, (state, action) => {
      Swal.fire("Success", "Announcement Deleted Successfull", "success");
    });
    builder.addCase(PutEditAnnouncement.fulfilled, (state, action) => {
      Swal.fire("Success", "Announcement Edited Successfully", "success");
    });
    builder.addCase(GetAllStudents.fulfilled, (state, action) => {
      state.Allstudents = action.payload;
    });
    builder.addCase(IndividualPerformance.fulfilled, (state, action) => {
      state.performances = action.payload;
      console.log("result from redux", action.payload);
    });
    builder.addCase(UploadMonthlyPayment.fulfilled, (state, action) => {
      Swal.fire("Success", "Payment Upload Successfully", "success");
    });
    builder.addCase(GetAllTeachers.fulfilled, (state, action) => {
      state.allTeachers = action.payload;
    });
    builder.addCase(PostAdmissionData.fulfilled, (state, action) => {
      window.location.replace(action.payload);
    });
    builder.addCase(GetlPaymentDetails.fulfilled, (state, action) => {
      state.PaymentDetails = action.payload;
    });
    builder.addCase(GetAdmissionForms.fulfilled, (state, action) => {
      state.admissionForms = action.payload;
    });
    builder.addCase(IndividualAdmissionForm.fulfilled, (state, action) => {
      state.admissionForm = action.payload;
    });
    builder.addCase(RemoveTeacher.fulfilled, (state, action) => {
      Swal.fire("Success", "Teacher Removed Successfully", "success");
    });
    builder.addCase(ConcessionFormData.fulfilled, (state, action) => {
      state.ConcessionData = action.payload;
    });

    builder.addCase(GetSingleData.fulfilled, (state, action) => {
      state.SingleData = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment } = PrincipalReducer.actions;

export default PrincipalReducer.reducer;
