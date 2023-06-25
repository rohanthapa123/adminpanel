import React, { useEffect, useState } from 'react'
import { deleteUserById, editUserById, getUser } from '../services/axios.services';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'

const Users = () => {
  const [users, setUsers] = useState([]);
  const getUsers = () =>{
    getUser().then((resp)=>{
      setUsers(resp.data);
    });
  }
  useEffect(()=>{
    getUsers()
  },[])
  const editUser = (e, id,user) =>{
    e.preventDefault();
    editUserById(id,{
      email: user.email,
      username: user.username,
      password: user.password,
      name: {
        firstname: user.name.firstname,
        lastname: user.name.lastname
      },
      address: {
        city: user.address.city,
        street: user.address.street,
        number: user.address.number,
        zipcode: user.address.zipcode,
        geolocation: {
          lat: user.address.geolocation.lat,
          long: user.address.geolocation.long
        }
      },
      phone: user.phone
    }).then((resp)=>{
      console.log(resp)
    })
    
    // console.log(user)
  }
  const deleteUser = (e, id) =>{
    e.preventDefault()
    deleteUserById(id).then((resp)=>{
      console.log(resp)
      getUsers();
    })

    console.log("User delted")
  }
  useEffect(()=>{

  },[users])

  return (
    <>
      <h1 className='text-center font-bold text-2xl'>Users</h1>
      <div>
        <table className=''>
          <thead className='font-bold'>
            <tr className=''>
              <td>Full Name</td>
              <td>Email</td>
              <td>Username</td>
              <td>City</td>
              <td>Phone No</td>
            </tr>
          </thead>
          <tbody>
            {
              users?.map((user)=>{
                return <tr key={user.id}>
                  <td className='font-semibold'>{user.name.firstname} {user.name.lastname}</td>
                  
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td className='font-bold'>{user.address.city}</td>
                  <td>{user.phone}</td>
                  <td className='cursor-pointer m-auto' onClick={(e)=>{editUser(e,user.id, user)}}>
                    <button className='bg-green-500 p-2 rounded-xl'>
                      <AiFillEdit/>
                    </button>
                  </td>
                  <td className='cursor-pointer m-auto ' onClick={(e)=>{deleteUser(e,user.id)}}>
                    <button className='bg-red-500 p-2 rounded-xl'>
                      <AiFillDelete/>
                    </button>
                  </td>
                </tr>
              })
            }
            
          </tbody>
        </table>
      </div></>
  )
}

export default Users