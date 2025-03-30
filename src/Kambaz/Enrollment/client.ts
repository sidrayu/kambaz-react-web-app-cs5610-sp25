import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
//const axiosWithCredentials = axios.create({ withCredentials: true });


export const enrollCourse = async (courseId: string, userId: string) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/users/${userId}/enrollments`
  );
  return response.data;
};
export const unenrollCourse = async (courseId: string, userId: string) => {
  const response = await axios.delete(
    `${COURSES_API}/${courseId}/users/${userId}/enrollments`
  );
  return response.data;
};
export const findEnrollmentsForUser = async (userId: string) => {
  const response = await axios.get(
    `${COURSES_API}/users/${userId}/enrollments`
  );
  return response.data;
};
