import { configureStore } from '@reduxjs/toolkit'
import PrincipalReducer from './PrincipalSlice';
import TeeacherReducer from './TeacherSlice'
export const store = configureStore({
    reducer: {
      principalStore: PrincipalReducer,
      teacherStore: TeeacherReducer,
    },
  });