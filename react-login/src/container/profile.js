import React, { Component } from "react";
import {Link} from "react-router-dom";

const url="http://3.17.216.66:5000/api/auth/userinfo"

class Profile extends Component{
    constructor(){
        super()
        this.state={
             user:''
        }
    }

    handleLogOut = () =>{
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('rtk')
        this.props.history.push('/')

    }

    conditionalRender=()=>{
        if(this.state.user.role){
        if(this.state.user.role === "Admin"){ //condition if user role is admin only display the user button
                        return(
            <Link to="/users" className="btn btn-success"> 
            {/* if name:nidhi@gmail.com password=12345678 admin */}
                Users
            </Link>
            )
        }
    }
}
    
    render(){
    return(
        <>
        <div className="container">
        <div className="panel panel-danger">
            <div className="panel-heading">
              <h3>Profile</h3>
            </div>
            <div className="panel-body">
                <h2>Hi {this.state.user.name}</h2>
                <h3>Your  email id is {this.state.user.email}</h3>
                <h3>Your phone number is {this.state.user.phone}</h3>
                <h3>Your role is {this.state.user.role}</h3>
                {this.conditionalRender()} &nbsp;
                <button className="btn btn-danger" onClick={this.handleLogOut}>Logout</button>
            </div>
        </div>
        </div>
        </>
    )}
    componentDidMount(){
        fetch(url,{
            method: 'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
    })
            
            .then((res)=>res.json())
            .then((data)=>{
                this.setState({
                    user:data
                })
            })
        }
}

export default Profile