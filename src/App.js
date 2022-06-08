import  React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import Api from './Api';

const App = () =>{
  const[fullName,setFullName]=useState({
    fname:' ',
    lname:' ',
    email:' ',
  });
  
  const inputEvent =(event) =>{
    console.log(event.target.value);
    console.log(event.target.name);

    const value=event.target.value; 
     const name=event.target.name;
    

    setFullName((prevalue)=>{
      return{
        ...prevalue,
        [name]:value,
      }
  //    if(name === "fName"){
  //      return{
  //        fname:value,
  //        lname:prevalue.lname, 
  //        email:prevalue.email,
  //      }
  //    }else if(name === "lName"){
  //       return{
  //         fname:prevalue.fname,
  //         lname:value, 
  //         email:prevalue.email,
  //       }
      

  //   }
  //   else if(name === "Email"){
  //     return{
  //       fname:prevalue.fname,
  //       lname:prevalue.lname, 
  //       email:value,
  //     }
    

  // }

   });
    
  }
  const onSubmits =(event) =>{
    event.preventDefault();
    // alert("form submitted");
    
  }
  
  
  
  return(
    <>
    <form onSubmit={onSubmits} >
    {/* <h1>Hello i m {fullName.fname}</h1>
    <h2>my password is {fullName.lname} </h2> */}
    <input type="text" placeholder="Enter your name" name="fname" onChange={inputEvent} 
     Value={fullName.fname} /> <br />
    <input type="text" placeholder="Enter your password" name="lname" onChange={inputEvent} 
     Value={fullName.lname} /> <br />
     <input type="email" placeholder="Enter your email" name="email" onChange={inputEvent} 
     Value={fullName.email} /> <br />

    <button type="submit">Click Me</button>
    </form>
    <table> <tr>
      <th>name</th>
      <th>lastenmae</th>
      <th>email</th>
      </tr>
      <tr>
      <td>{fullName.fname}</td>
      <td>{fullName.lname}</td>
      <td>{fullName.email}</td>
      </tr>
    </table>
    </>
  )
}

export default App;
