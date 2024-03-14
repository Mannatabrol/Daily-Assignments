
import React, { useState } from 'react';
import UserSearchForm from './components/UserSearchForm';
import UserDetails from './components/UserDetails';
import users from './data/users';

function App() {
  const [searchedUserId, setSearchedUserId] = useState(null);

  const handleSearch = (userId) => {
    setSearchedUserId(userId);
  };

  const foundUser = users.find(user => user.Id === parseInt(searchedUserId));


  return (
    <div className="App">
      <h1>My App</h1>
      <UserSearchForm onSearch={handleSearch} />
      {searchedUserId && foundUser && <UserDetails user={foundUser} />}
      {searchedUserId && !foundUser && <p>No user found with ID: {searchedUserId}</p>}
    </div>
  );
}

export default App;
