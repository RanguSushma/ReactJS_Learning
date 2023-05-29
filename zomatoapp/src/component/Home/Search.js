import React,{Component} from "react";
import "./Search.css";

const base_url = "http://3.17.216.66:4000";
class Search extends Component{
    constructor(){
        super()
        console.log("inside constructor")
        this.state={
            location:'',
            restaurents:''
        }
    }

    renderCity = (data) => {
        //render is used to dipaly the data
        if(data){
        //from whole data we need to select city so we used map to get into item wise
        return data.map( (item)=>{
            //when we select city from all items {item.state} we will see that item.state_id(value) and item._id(key) of that state
            //when there is huge data we use map into items through that we get particular info. to differentiate particular info we use key to make uniquee
            return (
            <option value={item.state_id} key={item._id}>{item.state}</option>
            )
        })
       } 
    }

    handlerCity = (event) =>{
        console.log(event.target.value)
        //here target.value is equal to item.state_id in above option tag  
        let stateId=event.target.value;
        fetch(`${base_url}/restaurant?stateId=${stateId}`,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            this.setState({restaurents:data})
            //here setState we have key:retaurents and value:data where restaurent names are given dynamically
        })  
    }

    renderRestaurent = (data) =>{
        if(data){
        return data.map( (item)=>{
            return(
                <option value={item.restaurant_id} key={item.restaurant_id}>{item.restaurant_name} | {item.address}</option>
                //here we are getting state_id and that corresponding restaurent is displayed in 55 line
            )
        })
    }
    }
    
    render(){
        console.log("inside render")
    return(
        <div className="search">
            <div id="logo">
                <span>D!</span>
            </div>
            <div id="heading">
             Search Place Near You
            </div>
            <div id="dropdown">
               <select name="city" className="options" onChange={this.handlerCity}>
                <option>--Select City--</option>
                {this.renderCity(this.state.location)}
               </select>
               <select name="resturent" className="options">
                <option>--Select Restaurent--</option>
                {this.renderRestaurent(this.state.restaurents)}
               </select>
            </div>
        </div>     
    )}

    //when api calling is done/ Page load happen then we use componentDidMount
    componentDidMount(){
        console.log("inside componentDidMount")
        fetch(`${base_url}/location`, {method:'GET'})
        //fetch method in js will return the promise
        .then((res)=>res.json()) //res means response
        //return data
        .then((data)=>{
            console.log(data)
            this.setState({location:data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export default Search