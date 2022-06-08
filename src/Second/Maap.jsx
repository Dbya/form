import React, { useState } from 'react';
import './maap.css';

const Maap = ({people,remove}) => {
    // const [readmore,setReadmore]=useState(false);
    // const reedmore=(id)=>{
    //     setReadmore(!readmore)
    // }
      var showMoreList=[1,3];
    const setReadmore =(id)=>{
        showMoreList.includes(id)?showMoreList.splice():showMoreList.push(id);
    }
    
    
  return (<div>
      {people.map((person)=>{
    const{id,name,age,image,p}=person;
    return <section key={id}>
        <img src={image} alt=""/>
        <div>
            <h2>{name}</h2>
            <span className='year' >{age}years</span>
            <br />
           <div>
            <p>{showMoreList.includes(id)?p:`${p.substring(0,100)}...`}
            <span onClick={()=>setReadmore(id)}>{showMoreList.includes(id)?'show less':'readmore'}</span>
            {/* <span onClick={()=>reedmore(id)}>dbuya</span> */}
             </p> <br />
            </div>
             <br />
            <button onClick={()=>remove(id)}>i dont wanna wish her</button>
        </div>
        
    </section>
      })}
  </div>);
};

export default Maap;
