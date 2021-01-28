import React from "react";

const Notification = ({ showNotification }) => {
  if (showNotification) {
    return (
      <div className="notification-container">
        <p>You have already entered this letter</p>
      </div>
    );
  } else {
    return "";
  }
};

export default Notification;
