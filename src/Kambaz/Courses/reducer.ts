import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as courseClient from "../Courses/client";

export const addCourse = createAsyncThunk(
  "courses/addCourse",
  async (course: any) => {
    return await courseClient.createCourse(course);
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

export const fetchAllCourses = createAsyncThunk(
  "courses/fetchAllCourses",
  async () => {
    return await courseClient.fetchAllCourses();
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
    setCourses: (state, action ) => {
      console.log("CourseReducer.setCourses", action.payload);
      state.courses = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCourse.fulfilled, (state, { payload }) => {
      state.courses.push(payload);
    });
    builder.addCase(deleteCourse.fulfilled, (state, { payload }) => {
      
      state.courses = state.courses.filter((c: any) => c._id !== payload);
    });
    builder.addCase(updateCourse.fulfilled, (state, { payload }) => {
      state.courses = state.courses.map((c: any) =>
        c._id === payload._id ? payload : c
      );
    });
    builder.addCase(fetchAllCourses.fulfilled, (state, { payload }) => {
      state.courses = payload;
    });
  },
});

export const { setCourses } =
  coursesSlice.actions;
export default coursesSlice.reducer;
