import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as userClient from "../Account/client";
import * as courseClient from "../Courses/client";

export const addCourse = createAsyncThunk(
  "courses/addCourse",
  async (course: any) => {
    return await userClient.createCourse(course);
  }
);

export const deleteCourse = createAsyncThunk(
  "courses/deleteCourse",
  async (courseId: string) => {
    return await courseClient.deleteCourse(courseId);
  }
);

export const updateCourse = createAsyncThunk(
  "courses/updateCourse",
  async (course: any) => {
    return await courseClient.updateCourse(course);
  }
);


const initialState: {
  courses: any[];
} = {
  courses: [],
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
    // deleteCourse: (state, { payload: courseId }) => {
    //   state.courses = state.courses.filter(
    //     (c: any) => c._id !== courseId);
    // },
    // updateCourse: (state, { payload: course }) => {
    //   state.courses = state.courses.map((c: any) =>
    //     c._id === course._id ? course : c
    //   );
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(addCourse.fulfilled, (state, { payload }) => {
      state.courses.push(payload);
    });
    builder.addCase(deleteCourse.fulfilled, (state, { payload }) => {
      state.courses = state.courses.filter((c: any) => c._id !== payload._id);
    });
    builder.addCase(updateCourse.fulfilled, (state, { payload }) => {
      state.courses = state.courses.map((c: any) =>
        c._id === payload._id ? payload : c
      );
    });
  },
});

export const { setCourses } =
  coursesSlice.actions;
export default coursesSlice.reducer;