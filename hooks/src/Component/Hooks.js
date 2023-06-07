import React, { useState,useEffect } from 'react'

import DisplayHooks from './DisplayHooks';

const url = "http://3.17.216.66:4000/restaurant";

function Hooks() {
    const [name] = useState('Sushuuuuu')
    const [Likes] = useState(0)
    const [Likes1, setLike] = useState(0)
    const [Likes2, setLike2] = useState(0)
    const [restaurant, setRestaurant] = useState()

    const likeNumber = () => {
        setLike(Likes1 + 1)
    }

    useEffect(()=>{
        fetch(url,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{setRestaurant(data)})
    })
     
    return (
        <>
            <h2>Hooks</h2>

            {name}

            <div>
                <h2>{Likes}</h2>

                <h2>{Likes1}</h2>
                <button onClick={likeNumber}>
                    {/* writing function above return */}
                    LikeCount
                </button>


                <h2>{Likes2}</h2>
                <button onClick={() => { setLike2(Likes2 + 1) }}>
                    {/* writing function in the jsx only two ways are possible */}
                    ClickLike
                </button>

                <DisplayHooks dataRestaurant={restaurant}/>

            </div>

        </>
    )
}
export default Hooks