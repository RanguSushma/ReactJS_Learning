import React, { Component } from "react";

const rurl="http://3.17.216.66:5000/api/auth/register"

class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'sushma',
            password: 'sushma@20',
            email: 'sushma@gmail.com',
            phone: '9876543212'
        }
    }
    handleInput=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    submit=()=>{
        fetch(rurl,{
            method:'POST',
            headers: {
            "accept":'application/json',
            "Content-Type":'application/json'
            },
            body:JSON.stringify(this.state)
            })
            .then(this.props.history.push('/login'))
        }
    


    render() {
        return (
            <>
                <div className="container2">
                    <div className="panel panel-primary">
                        <h2 style={{color:"red"}}>{this.state.message}</h2>
                        <div className="panel-heading"><h3>Register Here!</h3></div>
                        <div className="panel-body">
                            <div className="col-md-6 form-group">
                                <label>Name</label>
                                <input className="form-control" name="name" value={this.state.name} onChange={this.handleInput}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Password</label>
                                <input className="form-control " name="password" value={this.state.password} onChange={this.handleInput}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Email</label>
                                <input className="form-control" name="email" value={this.state.email} onChange={this.handleInput}/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Phone</label>
                                <input className="form-control" name="phone" value={this.state.phone} onChange={this.handleInput}/>
                            </div>
                            <div className="col-md-6">
                                <button className="btn btn-success" type="button" onClick={this.submit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Register