import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <div className="wd-assignment-percent-lable">40% of Total</div>
      <BsPlus className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>);
}

