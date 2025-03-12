import { assignments }    from "../../Database";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state,  { payload: module }) => {
      const newAssignment: any = {
        _id: uuidv4(),
        title: module.title,
        course: module.course,
        description: module.description,
        dueDate: module.dueDate,
        points: module.points,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter((item: any) => item._id !== assignmentId);
    },
    updateAssignment: (state,  { payload: assignment }) => {
      state.assignments = state.assignments.map((item: any) =>
        item._id === assignment._id ? assignment : item
      ) as any;
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
