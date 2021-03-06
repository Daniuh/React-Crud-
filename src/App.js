import React, { useState } from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
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

  //Eliminar usuario 
  const deleteUser = (id) => {

    const arrayFiltrado = users.filter(user => user.id !== id)

    setUsers(arrayFiltrado)
  }

  //Editar Usuarios
  const [editing, setEditing] = useState(false);

  const[currentUser, setcurrentUser] = useState({
    id: null, name: '', username: ''
  })

  const editRow = (user) => {
    setEditing(true);
    setcurrentUser({
      id: user.id, name: user.name, username: user.username
    })
  }

  //Actualizar
  const updateUser = (id, updateUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updateUser : user)))

  }


  //Maquetación
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm 
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
              </div>
            )
          }
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable 
          users={users} 
          deleteUser={deleteUser} 
          editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
