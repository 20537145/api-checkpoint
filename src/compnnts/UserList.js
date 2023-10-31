import axios from 'axios'
import React, { useEffect, useState } from 'react'
import User from './User'

function UserList() {
    const [userList,setUserList]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((ref)=>{
            console.log(ref.data)
            setUserList(ref.data)
        }).catch((err)=>console.log(err))
    },[])
  return (
    <div className='usersList-container'>
     {userList.map((e,key)=><User userList={e} key={e.id}/>)}
    </div>
  )
}

export default UserList