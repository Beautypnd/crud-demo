import React, { useState } from 'react'
import style from "./home.module.css"
import axios from 'axios'
import {useNavigate } from 'react-router-dom'
const CreateUsers = () => {
    let [name,setName]=useState()
    let [company,setCompany]=useState()
    let [salary,setSalary]=useState()

    let navigate=useNavigate()

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let companyData=(e)=>{
        setCompany(e.target.value)
    }
    let salaryData=(e)=>{
        setSalary(e.target.value)
    }

let formHandle=(e)=>{
    e.preventDefault()

    let payload={
      empName:name,
      empCompany:company,
      empSalary:salary

    }
    axios.post("http://localhost:3000/employees",payload)
    .then(()=>{console.log("data sent");})
    .catch(()=>{console.log("error code");})
    //it is use for navigate createUser page to Users when we save the employee
    navigate("/users")
}

  return (
    <section id={style.myForm}>
        <form action="">
        <h1>Create User</h1>
          <label htmlFor="">Name</label>
          <input type="text" value={name} onChange={nameData} />
          <label htmlFor="">Company</label>
          <input type="text" value={company} onChange={companyData}/>
          <label htmlFor="">Salary</label>
          <input type="text"  value={salary} onChange={salaryData}/>
          <button onClick={formHandle}>Submit</button>
        </form>
    </section>
  )
}

export default CreateUsers