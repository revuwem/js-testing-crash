import React from "react";

const User = ({ user, onDelete }) => {
  return (
    <div name="user-item">
      {user.name}
      <button id="user-delete" onClick={() => onDelete(user.id)}>
        delete
      </button>
    </div>
  );
};

export default User;
