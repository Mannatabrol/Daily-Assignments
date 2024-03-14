import React, { useState } from 'react';

const UserSearchForm = ({ onSearch }) => {
  const [searchId, setSearchId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchId);
  };

  return (
    <div>
      <h2>User Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchId">Enter User ID: </label>
        <input 
          type="text" 
          id="searchId" 
          value={searchId} 
          onChange={e => setSearchId(e.target.value)} 
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default UserSearchForm;
