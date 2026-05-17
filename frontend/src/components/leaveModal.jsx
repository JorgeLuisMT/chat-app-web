import React from "react";

const LeaveModal = ({ setIsLeaveModalOpen }) => {
  const handleclick = () => {
    setIsLeaveModalOpen((isLeaveModalOpen) => !isLeaveModalOpen);
  };
  return (
    <div className="leave-modal-container">
      <div className="leave-modal-bg"></div>
      <div className="leave-modal-interaction">
        <p>Are you sure you want to leave this chat?</p>
        <div className="leave-modal-options">
          <div className="modal-options-cancel" onClick={handleclick}>
            Cancel
          </div>
          <div className="modal-options-leave" onClick={handleclick}>
            Leave
          </div>
        </div>
      </div>
    </div>
  );
};

export { LeaveModal };
