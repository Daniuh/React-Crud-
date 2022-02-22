import React from 'react'
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {

    const {register, formState: { errors }, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        //console.log(data)

        props.addUser(data)

        //Limpiar campos
        e.target.reset();
    }

    return ( 
        <form onSubmit={handleSubmit(onSubmit)}> 
            <label>Name</label>
                <input type="text" {...register('name', { required: true})} />
                <div>
                <span className='text-danger text-small d-block mb-2'>
                    {errors.name && "Este campo es obligatorio"}
                </span>
                </div>
            <label>Username</label>
                <input type="text" {...register('username', { required: true })} />
                <span className='text-danger text-small d-block mb-2'>
                    {errors.username && "Este campo es obligatorio"}
                </span>
                <button>Add new user</button>
      </form>
     );
}
 
export default AddUserForm;