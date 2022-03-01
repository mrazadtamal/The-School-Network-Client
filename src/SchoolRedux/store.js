import { configureStore } from "@reduxjs/toolkit";
import PrincipalReducer from "./PrincipalSlice";
import TeeacherReducer from "./TeacherSlice";
import StudentReducer from "./StudentSlice";
export const store = configureStore({
  reducer: {
    principalStore: PrincipalReducer,
    teacherStore: TeeacherReducer,
    studentStore: StudentReducer,
  },
});
