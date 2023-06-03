import React,{Component} from "react";
import Axios from "axios";
import DisplayOrder from "./displayOrder"

const url="http://localhost:3500/orders";

class ViewOrder extends Component{
    constructor(){
        super()
        this.state={
            orders:''
        }
    }
    render(){
        return(
            <DisplayOrder orderData={this.state.orders}/>
        )
    }

    componentDidMount(){
    Axios.get(url).then((res)=>{this.setState({orders:res.data})})
    }    
}

export default ViewOrder