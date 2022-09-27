import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [data, setData] = useState([]);

  const getUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setData(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {data.map((user) => (
        <div key={user.id} data-testid="user-item">
          {user.name}
        </div>
      ))}
    </div>
  );
};

export default Users;
