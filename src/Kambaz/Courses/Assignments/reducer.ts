import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
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
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter((item: any) => item._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((item: any) =>
        item._id === assignment._id ? assignment : item
      ) as any;
    },
  },
});

export const {deleteAssignment, setAssignments } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
