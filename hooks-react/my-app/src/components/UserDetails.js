import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <div>
      <h3>User Details</h3>
      <p>Name: {user.Name}</p>
      <p>Email: {user.Email}</p>
      <p>Contact No: {user.ContactNo}</p>
      <p>Age: {user.Age}</p>
    </div>
  );
};

export default UserDetails;
