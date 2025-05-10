import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as enrollmentClient from "./client";

export const enrollCourse = createAsyncThunk(
  "enrollments/enrollCourse",
  async (enrollment: { courseId: string; userId: string }) => {
    return await enrollmentClient.enrollCourse(
      enrollment.courseId,
      enrollment.userId,
    );
  }
);

export const unenrollCourse = createAsyncThunk(
  "enrollments/unenrollCourse",
  async (enrollment: { courseId: string; userId: string }) => {
    return await enrollmentClient.unenrollCourse(
      enrollment.courseId,
      enrollment.userId,
    );
  }
);
export const findEnrollmentsForUser = createAsyncThunk(
  "enrollments/findEnrollmentsForUser",
  async (userId: string) => {
    return await enrollmentClient.findEnrollmentsForUser(userId);
  }
);

const initialState = {
  enrollments: [],
};

// const storedEnrollments = JSON.parse(localStorage.getItem("enrollments") || "[]");

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    setEnrollments: (state, { payload }) => {
      state.enrollments = payload;
    },
  },
});

export const { setEnrollments } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;