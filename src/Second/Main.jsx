
import React, { useState } from 'react';
import data from './data'
import Maap from './Maap';
import './maap.css';
const Main = () => {
    const[people,setPeople]=useState(data);
    // const [readmore,setReadmore]=useState(false);
    // const reedmore=(id)=>{
    //     setReadmore(!readmore)
    // }

    const remove= (id)=>{
        const newpeople=people.filter((person)=>person.id !==id);
        setPeople(newpeople);
    }
   

  return( <div> 
    <main>
        <h3> {people.length} Birthday Today</h3>
        <section className='container'>
         {/* <h3> {people.length} Birthday Today</h3> */}
         <Maap people={people} remove={remove} />
         {/* <button onClick={()=>setPeople([])}>Clear all</button> */}
        </section>
        <button onClick={()=>setPeople([])}>Clear all</button>
    </main>
  </div>);
};

export default Main;

