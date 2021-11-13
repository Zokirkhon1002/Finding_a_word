import React from "react";

const Notify = ({showNotification}) => {
  return (
    <div className={`notification-container ${showNotification ? 'show':''}`}>
      <p>You have already entered this letter</p>
    </div>
  );
};

export default Notify;
