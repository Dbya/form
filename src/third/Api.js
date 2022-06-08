import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import "./Api.css"

const Api = () => {
 const [city,setCity]=useState(null);
 const [search,setSearch]=useState("butwal");

 useEffect(()=>{
     const fetchApi =async()=>{
         const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=702f79aef4d8ef5f3146697a741095fb`
         const response=await fetch (url);
        const responseJson = await response.json();
         console.log(responseJson);
        setCity(responseJson.main);
        };

        fetchApi();
 },[search]);

  return (<div>
      <div className="box">
          <div className="inputdata">
              <input type="text" onChange={(event)=>{
               setSearch(event.target.value);
              }}/>
          </div> <br /> <br />

          {!city ?( 
          <p>no data found</p> ) :(
            <div className="info">
            <h1>{search}</h1>
            <h2>{city.temp} °C</h2>
            <h4>max: {city.temp_max} °C & min:{city.temp_min} °C</h4>
            </div>

          )
          }
          
      </div>
      </div> )
};

export default Api;
