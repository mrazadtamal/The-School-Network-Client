import { configureStore } from "@reduxjs/toolkit";
import PrincipalReducer from "./PrincipalSlice";
import StudentReducer from "./StudentSlice";
import TeeacherReducer from "./TeacherSlice";
export const store = configureStore({
  reducer: {
    principalStore: PrincipalReducer,
    teacherStore: TeeacherReducer,
    studentStore: StudentReducer,
  },
});
