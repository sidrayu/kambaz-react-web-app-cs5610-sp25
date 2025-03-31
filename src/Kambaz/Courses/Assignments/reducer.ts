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
  assignments: [] as any[],
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
  extraReducers: (builder) => {
    builder.addCase(addAssignment.fulfilled, (state, { payload }) => {
      state.assignments.push(payload);
    });
    builder.addCase(deleteAssignment.fulfilled, (state, { payload }) => {
      state.assignments = state.assignments.filter(
        (assignment: any) => assignment._id !== payload
      );
    });
  }
});

export const { setAssignments } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
