import assignments from "../../Database/assignments.json";

// Action types
export const ADD_ASSIGNMENT = "ADD_ASSIGNMENT";
export const DELETE_ASSIGNMENT = "DELETE_ASSIGNMENT";
export const UPDATE_ASSIGNMENT = "UPDATE_ASSIGNMENT";

// Interface for Assignment
export interface Assignment {
  _id: string;
  title: string;
  course: string;
  description?: string;
  dueDate: string;
  points: number;
}

// Action creators
export const addAssignment = (assignment: Assignment) => ({
  type: ADD_ASSIGNMENT,
  payload: assignment,
});

export const deleteAssignment = (id: string) => ({
  type: DELETE_ASSIGNMENT,
  payload: { id },
});

export const updateAssignment = (assignment: Assignment) => ({
  type: UPDATE_ASSIGNMENT,
  payload: assignment,
});

// Reducer
const assignmentsReducer = (state = assignments, action: any) => {
  switch (action.type) {
    case ADD_ASSIGNMENT:
      return [...state, action.payload];
    
    case DELETE_ASSIGNMENT:
      return state.filter((assignment) => assignment._id !== action.payload.id);
    
    case UPDATE_ASSIGNMENT:
      return state.map((assignment) => 
        assignment._id === action.payload._id ? action.payload : assignment
      );
    
    default:
      return state;
  }
};

export default assignmentsReducer;
