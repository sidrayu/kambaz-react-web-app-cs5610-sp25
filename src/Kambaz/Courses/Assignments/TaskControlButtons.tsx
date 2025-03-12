import { useState } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function TaskControlButtons({assignmentId, deleteAssignment }: { assignmentId: string, deleteAssignment: Function }) {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleShowDialog = () => {
    setShowConfirmDialog(true);
  };

  const handleCloseDialog = () => {
    setShowConfirmDialog(false);
  };

  const handleConfirmDelete = () => {
    if (assignmentId) {
      deleteAssignment(assignmentId);
    }
    setShowConfirmDialog(false);
  };

  return (
    <div className="float-end">
      <GreenCheckmark />
      <FaTrash 
        className="text-danger me-2 mb-1"
        onClick={handleShowDialog}
      />
      <IoEllipsisVertical className="fs-4" />

      {/* Confirmation Dialog */}
      <Modal show={showConfirmDialog} onHide={handleCloseDialog}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to remove this assignment?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDialog}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
