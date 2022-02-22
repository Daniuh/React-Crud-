import React from 'react'

const UserTable = (props) => {
    console.log(props.users)
    //Creación de la tabla
    return ( 
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    /*If es una linea*/
                    props.users.length > 0 ?
                    /*Agregamos llave y además relacionamos con app */
                    //Respuesta positiva
                    props.users.map(user => (
                        <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                            <button className="button muted-button">Edit</button>
                            <button className="button muted-button">Delete</button>
                        </td>
                    </tr>
                    )) : (
                        //Respuesta negativa
                        <tr>
                            <td colSpan={3}>No users</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
     );
}
 
export default UserTable;