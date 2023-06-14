import React, { useState, setState, useEffect } from "react";
import "./QuickSearch.css";
import QuickDisplay from "./QuickDisplay";

const base_url = "http://3.17.216.66:4000";

function QuickSearch() {
    const [mealType, setMealType] = useState();
    useEffect(() => {
        fetch(`${base_url}/quicksearch`, { method: 'GET' })
            .then((response) => response.json())
            .then((data) => { setMealType(data) })
    },[])
    return (
        <div className="subsearch">
            <span id="quicksearch">Quick Search</span>
            <span id="quicksubsearch">Find Resturent by Meal Type</span>
            <div>
                <QuickDisplay mealData={mealType} />
            </div>
        </div>
    )
}

export default QuickSearch

