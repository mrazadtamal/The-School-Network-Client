import { configureStore } from "@reduxjs/toolkit";
import PrincipalReducer from "./PrincipalSlice";
import StudentReducer from "./StudentSlice";
import TeacherReducer from "./TeacherSlice";
export const store = configureStore({
  reducer: {
    principalStore: PrincipalReducer,
    teacherStore: TeacherReducer,
    studentStore: StudentReducer,
  },
});
