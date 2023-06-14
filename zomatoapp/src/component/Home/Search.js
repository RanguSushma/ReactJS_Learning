import React, { useState,useEffect } from "react";
import "./Search.css";

const base_url = "http://3.17.216.66:4000";

function Search(){
    const [location,setLocation]=useState()
    const [restaurant,setRestaurant]=useState()

    useEffect(()=>{
        fetch(`${base_url}/location`, { method: 'GET' })
        .then((res) => res.json()) //response will pass to json method
        .then((data)=>{
            
            setLocation(data)})
    })

    const handleCity=(event)=>{
        console.log(event.target.value)
        //here target.value is equal to item.state_id in above option tag  
        let stateId = event.target.value; //this target.value which means state_id will got to the option tage in above and check for the and check for the tAargetvalue in option tag and then city got selected 
        fetch(`${base_url}/restaurant?stateId=${stateId}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setRestaurant(data)
            })

    }

    const renderCity=(data)=>{
        if(data){
            return data.map((item)=>{
                return (
                    <option value={item.state_id} key={item._id}>{item.state}</option>
                )
            })
        }
    }
    const renderRestaurent=(data)=>{
        if (data) {
            return data.map((item) => {
                return (
                    <option value={item.restaurant_id} key={item.restaurant_id}>{item.restaurant_name} | {item.address}</option>
                    //here we are getting state_id and that corresponding restaurent is displayed in 55 line
                )
            })
        }
    }
    return(
        <div className="search">
        <div id="logo">
            <span>D!</span>
        </div>
        <div id="heading">
            Search Place Near You
        </div>
        <div id="dropdown">
            <select name="city" className="options" onChange={handleCity}>
                <option>--Select City--</option>
                {renderCity(location)}
                 { /*this.state.location here location has four objects from get api data*/ }
            </select>
            <select name="resturent" className="options">
                <option>--Select Restaurent--</option>
                {renderRestaurent(restaurant)}
            </select>
        </div>
    </div>
        
    )

}
export default Search