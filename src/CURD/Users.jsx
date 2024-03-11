import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from "./home.module.css"
import { Link } from 'react-router-dom'
const Users = () => {
let [content,setContent]=useState([])
    useEffect(()=>{
      axios.get("http://localhost:3000/employees")
      .then((res)=>{setContent(res.data);})
      .catch(()=>{console.log("error code");})
    },[])

    let deleteUser=(id)=>{
      axios.delete(`http://localhost:3000/employees/${id}`)
      window.location.assign("/users")
    }
    

  return (
    <div id={style.usersPage}>
      {content.map((x)=>{
        return(
          <div>
          <table>
            <tr>
              <th colSpan="2">Employee {x.id}</th>
            </tr>
            <tr>
              <td>Name</td>
              <td>:{x.empName}</td>
            </tr>
            <tr>
              <td>Company</td>
              <td>:{x.empCompany}</td>
            </tr>
            <tr>
              <td>Salary</td>
              <td>:{x.empSalary}</td>
            </tr>
            <tr>
              <td><button><Link to={`/edit/${x.id}`}>Edit</Link></button></td>
              <td><button onClick={()=>{deleteUser(x.id)}}>Delete</button></td>
            </tr>
          </table>
          </div>
        )
      })}
    </div>
  )
}

export default Users