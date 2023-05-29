import React, { Component } from "react";
import "./QuickSearch.css";
import QuickDisplay from "./QuickDisplay";

const base_url = "http://3.17.216.66:4000";

class QuickSearch extends Component {
    constructor(){
        super()
         this.state={
             mealType:'',    
        }
    }
    render() {
        return (
            <div className="subsearch">
                <span id="quicksearch">Quick Search</span>
                <span id="quicksubsearch">Find Resturent by Meal Type</span>
                <div>
                 <QuickDisplay mealData={this.state.mealType}/>
                </div>
            </div>
            )
    }

    componentDidMount(){
        fetch(`${base_url}/quicksearch`,{method:'GET'})
        .then((response)=>response.json())
        .then((data)=>{
            this.setState({mealType:data})
        })
    }
}

export default QuickSearch