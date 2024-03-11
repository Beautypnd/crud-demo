import React, { useEffect, useState } from "react";
import style from "./home.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
export const EditPage = () => {
  let [name, setName] = useState("");
  let [company, setCompany] = useState("");
  let [salary, setSalary] = useState("");

  let obj = useParams();
  console.log(obj);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/employees/${obj.id}`)
      .then((res) => {
        setName(res.data.empName);
        setCompany(res.data.empCompany);
        setSalary(res.data.empSalary);
      })
      .catch(() => {
        console.log("error");
      });
  },[]);
  let getName = (e) => {
    setName(e.target.value);
  }
  let getCompany = (e) => {
    setCompany(e.target.value);
  }
  let getSalary = (e) => {
    setSalary(e.target.value);
  }

  let formHandle=()=>{
    let payload={
      empName:name,
      empCompany:company,
      empSalary:salary
    }
    axios.put(`http://localhost:3000/employees/${obj.id}`,payload)
    .then(()=>{
      console.log("data updated");
    })
    .catch(()=>{
      console.log("error");
    })
  }
  return (
    <section id={style.myForm}>
      <form action="">
        <h1>Edit User</h1>
        <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={getName} />
        <label htmlFor="">Company</label>
        <input type="text" value={company}  onChange={getCompany}/>
        <label htmlFor="">Salary</label>
        <input type="text" value={salary} onChange={getSalary} />
        <button onClick={formHandle}>Update</button>
      </form>
    </section>
  );
};
export default EditPage;
