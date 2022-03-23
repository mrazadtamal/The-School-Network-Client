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
        const response = await fetch(
            "http://localhost:5000/student/requestCare",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data),
            }
        )
            .then((res) => res.json())
            .catch((err) => {
                console.log(err);
            });
        return response;
    }
);

// get data from the database according to email

export const GetStudent = createAsyncThunk(
    "Student/GetStudent",
    async (data) => {
        console.log("Hitted Get Student", data.email);
        const response = await fetch(
            `http://localhost:5000/student/filteredStudent?email=${data.email}&&term=${data.term}`
        )
            .then((res) => res.json())
            .catch((err) => {
                console.log(err);
            });
        console.log(response);
        if (response !== null) {
            return response;
        } else {
            return {};
        }
    }
);

// get all term result of a student
export const GetFilteredResult = createAsyncThunk(
    "Student/GetFilteredResult",
    async (email) => {
        console.log("Hitted Get Filtered Student", email);
        const response = await fetch(
            `http://localhost:5000/student/filteredResult?email=${email}`
        )
            .then((res) => res.json())
            .catch((err) => {
                console.log(err);
            });
        console.log(response);
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
// Update student profile picture
export const GetStudentNotice = createAsyncThunk(
    "Student/GetStudentNotice",
    async (studentclass) => {
        const response = await fetch(
            `http://localhost:5000/student/GetStudentNotice?studentclass=${studentclass}`
        )
            .then((res) => res.json())
            .catch((err) => console.log(err));
        return response;
    }
);
// geting monthly payment
export const getMontlyPayment = createAsyncThunk(
    "Student/getMontlyPayment",
    async (email) => {
        const response = await fetch(
            `http://localhost:5000/student/getMontlyPayment?email=${email}`
        )
            .then((res) => res.json())
            .catch((err) => console.log(err));
        return response;
    }
);
// Paying montnly payment
export const PayMonthlyPayment = createAsyncThunk(
    "Student/PayMonthlyPayment",
    async (data) => {
        const response = await fetch(
            "http://localhost:5000/PayMonthlyPayment",
            {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data),
            }
        )
            .then((res) => res.json())
            .catch((err) => console.log(err));
        return response;
    }
);

// Get all assignment related to the student
export const GetAllAssignments = createAsyncThunk(
    "Student/GetAllAssignments",
    async (data) => {
        const response = await fetch(
            `http://localhost:5000/student/GetAllAssignments?class=${data}`
        ).then((res) => res.json());
        return response;
    }
);

//student assingment submit pdf
export const StudnetAssignmentSubmit = createAsyncThunk(
    "Student/StudnetAssignmentSubmit",
    async (data) => {
        console.log("data from std", data);
        const response = await fetch(
            "https://blooming-citadel-14218.herokuapp.com/pdfUpload",
            {
                method: "POST",
                // headers: { "content-type": "application/json" },
                body: data,
            }
        )
            .then((res) => res.json())
            .catch((err) => console.log(err));
        return response;
    }
);

// -------------libraray-------------
//student submitting lented book form
export const LentBook = createAsyncThunk("Student/LentBook", async (data) => {
    console.log("slice", data);
    const response = await fetch(
        `http://localhost:5000/student/LentBook/${data.id}`,
        {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data.FullBookData),
        }
    )
        .then((res) => res.json())
        .catch((err) => console.log(err));
    return response;
});

//student submitting lented book form
export const YourLentBookList = createAsyncThunk(
    "Student/YourLentBookList",
    async (email) => {
        const response = await fetch(
            `http://localhost:5000/student/YourLentBookList?email=${email}`
        )
            .then((res) => res.json())
            .catch((err) => console.log(err));
        return response;
    }
);
//student submitting lented book form
export const ReturnBook = createAsyncThunk(
    "Student/ReturnBook",
    async (data) => {
        const response = await fetch(
            `http://localhost:5000/student/ReturnBook?bookId=${data.bookId}&&id=${data.id}`,
            {
                method: "DELETE",
            }
        )
            .then((res) => res.json())
            .catch((err) => console.log(err));
        return response;
    }
);

//student geting category book
export const GetCategoryBook = createAsyncThunk(
    "Student/GetCategoryBook",
    async (category) => {
        const response = await fetch(
            `http://localhost:5000/student/GetCategoryBook?category=${category}`
        )
            .then((res) => res.json())
            .catch((err) => console.log(err));
        return response;
    }
);

//student geting category book
export const GetNotification = createAsyncThunk(
    "Student/GetNotification",
    async (email) => {
        const response = await fetch(
            `http://localhost:5000/student/GetNotification?email=${email}`
        )
            .then((res) => res.json())
            .catch((err) => console.log(err));
        return response;
    }
);
// get all the videos available for the logged in user

export const GetVideos = createAsyncThunk("Student/GetVideos", async (data) => {
    console.log("Hitted GetVideos", data.class);
    const response = await fetch(
        `http://localhost:5000/videos?class=${data.class}`
    )
        .then((res) => res.json())
        .catch((err) => {
            console.log(err);
        });
    console.log(response);
    if (response !== null) {
        return response;
    } else {
        return {};
    }
});

// get the specific video with unique id
export const GetVideoById = createAsyncThunk(
    "Student/GetVideoById",
    async (data) => {
        console.log("Hitted GetVideoById", data.id);
        const response = await fetch(
            `http://localhost:5000/video?id=${data.id}`
        )
            .then((res) => res.json())
            .catch((err) => {
                console.log(err);
            });
        console.log(response);
        if (response !== null || undefined) {
            return response;
        } else {
            return {};
        }
    }
);

export const StudentReducer = createSlice({
    name: "Student",
    initialState: {
        value: 0,
        results: [],
        user: {},
        allResults: [],
        studentInfo: {},
        notices: [],
        montlyPayment: [],
        LentBookList: {},
        CategoryBook: [],
        Notifications: [],
        videos: [],
        video: {},
        assignments: [],
    },
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
            Swal.fire(
                "Success",
                "Application Submitted Successfully",
                "success"
            );
        });

        //get individual logged in user data promise

        builder.addCase(GetStudent.fulfilled, (state, action) => {
            state.user = action.payload;
        });

        // get filtered result for individual student
        builder.addCase(GetFilteredResult.fulfilled, (state, action) => {
            state.allResults = action.payload;
        });

        builder.addCase(getStudentInfo.fulfilled, (state, action) => {
            state.studentInfo = action.payload;
        });
        builder.addCase(updateStudentPP.fulfilled, (state, action) => {
            Swal.fire("Success", "Notice Publish Successfull", "success");
        });
        builder.addCase(GetStudentNotice.fulfilled, (state, action) => {
            state.notices = action.payload;
        });
        builder.addCase(getMontlyPayment.fulfilled, (state, action) => {
            state.montlyPayment = action.payload;
        });
        builder.addCase(PayMonthlyPayment.fulfilled, (state, action) => {
            window.location.replace(action.payload);
        });
        builder.addCase(StudnetAssignmentSubmit.fulfilled, (state, action) => {
            Swal.fire(
                "Success",
                "Assingment Published Successfully",
                "success"
            );
        });
        // --------library------------
        builder.addCase(LentBook.fulfilled, (state, action) => {
            Swal.fire("Success", "Book Lented Successfully", "success");
        });
        builder.addCase(YourLentBookList.fulfilled, (state, action) => {
            state.LentBookList = action.payload;
        });
        builder.addCase(ReturnBook.fulfilled, (state, action) => {
            Swal.fire("Success", "Book Returned Successfully", "success");
        });
        builder.addCase(GetCategoryBook.fulfilled, (state, action) => {
            state.CategoryBook = action.payload;
        });
        builder.addCase(GetNotification.fulfilled, (state, action) => {
            state.Notifications = action.payload;
        });
        // set all the videos to the state
        builder.addCase(GetVideos.fulfilled, (state, action) => {
            state.videos = action.payload;
        });
        // set the specific video to the state
        builder.addCase(GetVideoById.fulfilled, (state, action) => {
            state.video = action.payload;
        });
    },
});

// Action creators are generated for each case reducer function
export const { increment } = StudentReducer.actions;

export default StudentReducer.reducer;
