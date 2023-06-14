import React, { Component } from "react";

const lurl = "http://3.17.216.66:5000/api/auth/login"

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: 'nidhi@gmail.com',
            password: '12345678',
            message: ''
        }
    }
    handleInput = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    login = () => {
        fetch(lurl, {
            method: 'POST',
            headers: {
                "accept": 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.auth === false) {
                    this.setState({ message: data.token })
                } else {
                    sessionStorage.setItem('ltk', data.token);
                    console.log(data.token)
                    this.props.history.push('/')
                }
            })
    }

    render() {
        return (
            <>
                <div className="container1">
                    <div className="panel panel-success">
                        <div className="panel-heading"><h3>Login</h3></div>
                        <div className="panel-body">
                        <h3 style={{ color: "red" }}>{this.state.message}</h3>
                                <div className="col-md-6 form-group">
                                    <label>Email</label>
                                    <input className="form-control" name="email" value={this.state.email} onChange={this.handleInput} />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Password</label>
                                    <input className="form-control " name="password" value={this.state.password} onChange={this.handleInput} />
                                </div>
                                <div className="col-md-6">
                                    <button className="btn btn-success" type="button" onClick={this.login}>Submit</button>
                                </div>
                           
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Login