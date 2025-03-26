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
    // addAssignment: (state, { payload: assignment }) => {
    //   const newAssignment: any = {
    //     _id: uuidv4(),
    //     courseId: assignment.courseId,
    //     title: assignment.title,
    //     modules: assignment.modules,
    //     availableFromDate: assignment.availableFromDate,
    //     availableUtilDate: assignment.availableUtilDate,
    //     dueDate: assignment.dueDate,
    //     points: assignment.points,
    //     description: assignment.description,
    //   };
    //   state.assignments = [...state.assignments, newAssignment] as any;
    // },
    // deleteAssignment: (state, { payload: assignmentId }) => {
    //   state.assignments = state.assignments.filter((item: any) => item._id !== assignmentId);
    // },
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
