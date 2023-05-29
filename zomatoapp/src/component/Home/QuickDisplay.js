import React from "react";
import { Link } from 'react-router-dom';

const QuickDisplay = (props) => {

    const listMeal = ({ mealData }) => {
        if (mealData) {
            return mealData.map((item) => {
                return (
                    <Link to={`/listing/${item.mealtype_id}`} key={item.mealtype_id}>
                        {/*use backtick for api url binding */}
                        <div className="container">
                            <div className="containerone"> <img src={item.meal_image} /></div>
                            <div className="conatinertwo">
                                <div className="containertwoheading1">{item.mealtype}</div>
                                <div className="containertwoheading2">{item.content}</div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }
    return (    
    <>
     {listMeal(props)}
     </>
    )

}

export default QuickDisplay