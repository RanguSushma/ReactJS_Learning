import React, { Component } from "react";
import axios from "axios";

const url="http://3.17.216.66:4000/filter"

class CostFilter extends Component{
    
    costFilter=(event)=>{
        let mealId=this.props.mealId;
        let costId=(event.target.value).split('-');
        let lcost=costId[0];
        let hcost=costId[1];
        let costUrl="";
        if(costId === ""){
            costUrl=`${url}/${mealId}`
        }else{
            costUrl=`${url}/${mealId}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(costUrl).then((res)=>this.props.restPerCost(res.data))
    }

    render(){
        return(
            <>
            <center><h3>Cost Filter</h3></center>
            <div style={{marginLeft:"30px"}} onChange={this.costFilter}>
            <label className="radio">
                <input type="radio" name="cuisine" value=""/>All
            </label>
            <label className="radio">
                <input type="radio" name="cuisine" value="0-300"/>0-300
            </label>
            <label className="radio">
                <input type="radio" name="cuisine" value="301-600"/>301-600
            </label>
            <label className="radio">
                <input type="radio" name="cuisine" value="601-800"/>601-800
            </label>
            <label className="radio">
                <input type="radio" name="cuisine" value="801-1000"/>801-1000
            </label>
            <label className="radio">
                <input type="radio" name="cuisine" value="1001-1300"/>1001-1300
            </label>
            </div>
            </>

        )
    }
}

export default CostFilter