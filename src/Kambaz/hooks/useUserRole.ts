import { useSelector } from "react-redux";

export const useUserRole = () => {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  const isFaculty = () => {
    return currentUser?.role === "FACULTY";
  };

  return { isFaculty };
};
