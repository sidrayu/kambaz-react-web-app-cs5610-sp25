import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGMENTS_API = `${REMOTE_SERVER}/api/assignments`;
export const deleteAssignment = async (assignmentId: string) => {
    const response = await axios.delete(`${ASSIGMENTS_API}/${assignmentId}`);
    return response.data; 
};

export const findAssignmentById = async (assignmentId: string) => {
    const response = await axios.get(`${ASSIGMENTS_API}/${assignmentId}`);
    return response.data; 
}
   