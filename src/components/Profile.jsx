import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user);
  //   const users = useSelector((state) => state.user);
  const themeColor = useSelector((state) => state.theme.value);
  return (
    <div style={{ color: themeColor }}>
      <h1>Profile Page</h1>
      <p>Name: {user}</p>
      <p>Age: {user}</p>
      <p>Email: {user}</p>
      {console.log(user)}
    </div>
  );
}

export default Profile;
