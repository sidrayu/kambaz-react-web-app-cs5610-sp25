import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { courses } from "../Database";
import * as userClient from "../Account/client";

export const addCourse = createAsyncThunk(
  "courses/addCourse",
  async (course: any) => {
    return await userClient.createCourse(course);
  }
);

const initialState = {
  courses: courses,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, { payload }) => {
      state.courses = payload;
    },
    // remove or comment out the old addCourse
    // addCourse: (state, { payload: course }) => {
    //     const newCourse = await userClient.createCourse(course);
    //     state.courses = [...state.courses, newCourse] as any;
    // },
    deleteCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.filter(
        (c: any) => c._id !== courseId);
    },
    updateCourse: (state, { payload: course }) => {
      state.courses = state.courses.map((c: any) =>
        c._id === course._id ? course : c
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCourse.fulfilled, (state, { payload }) => {
      state.courses.push(payload);
    });
  },
});

export const { setCourses, deleteCourse, updateCourse } =
  coursesSlice.actions;
export default coursesSlice.reducer;