import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { enrollments } from "../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  enrollments: enrollments,
};

// const storedEnrollments = JSON.parse(localStorage.getItem("enrollments") || "[]");

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    enrollCourse(state, action: PayloadAction<{ userId: string; courseId: string }>) {
      console.log("enrollCourse", action.payload);
      state.enrollments.push({_id: uuidv4(), user: action.payload.userId, course: action.payload.courseId });
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
    },
    unenrollCourse(state, action: PayloadAction<{ userId: string; courseId: string }>) {
      console.log("unenrollCourse", action.payload);
      state.enrollments = state.enrollments.filter(
        e => !(e.user === action.payload.userId && e.course === action.payload.courseId)
      );
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
    },
  },
});

export const { enrollCourse, unenrollCourse } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;