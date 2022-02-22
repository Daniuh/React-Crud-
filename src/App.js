import React, { useState } from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import { v4 as uuidv4 } from 'uuid';

function App() {

  //Creació de array con la información que se quiere
  const usersData = [
    { id:  uuidv4(), name: 'Daniel', username: 'Daniel777' },
    { id:  uuidv4(), name: 'Jeison', username: 'MasterPro' },
    { id:  uuidv4(), name: 'Sandra', username: 'Sandritaxd' },
  ]

  //state
  const [users, setUsers] = useState(usersData);

  //Agregar usuarios
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  //Maquetación
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser}/>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users}/>
        </div>
      </div>
    </div>
  );
}

export default App;
