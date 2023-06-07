import React from 'react'

function DisplayHooks (props){

    const render=({dataRestaurant})=>{
        if(dataRestaurant){
        return dataRestaurant.map((item)=>{
            return (
            <div key={item._id}>
                {item.restaurant_name}
            </div>
            )}
        )}
    }

    return(
        <>
        <center>
        <h2>DisplayHooks</h2>
        {render(props)}
        </center>
        </>
    )
}
export default DisplayHooks