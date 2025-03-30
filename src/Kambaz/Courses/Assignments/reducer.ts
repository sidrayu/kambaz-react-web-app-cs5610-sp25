import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as courseClient from "../client";
export const addAssignment = createAsyncThunk(
  "assignments/addAssignment",
  async (assignment: any) => {
    return await courseClient.createAssignmentForCourse(
      assignment.courseId,
      assignment
    );
  }
);

export const updateAssignment = createAsyncThunk(
  "assignments/updateAssignment",
  async (assignment: any) => {
    return await courseClient.updateAssignment(assignment);
  }
);

export const deleteAssignment = createAsyncThunk(
  "assignments/deleteAssignment",
  async (assignmentId: string) => {
    return await courseClient.deleteAssignment(assignmentId);
  }
);

const initialState = {
  assignments: [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((item: any) =>
        item._id === assignment._id ? assignment : item
      ) as any;
    },
  },
});

export const { setAssignments } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
