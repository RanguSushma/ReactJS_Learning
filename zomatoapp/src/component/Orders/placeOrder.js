import React, { Component } from "react";
import "./placeOrder.css";

const base_url = "http://3.17.216.66:4000";
const purl = "http://localhost:3500/orders";

class PlaceOrder extends Component {
    constructor(props) {
        super(props)
        
        let sessionData=sessionStorage.getItem('userInfo');
        let data=JSON.parse(sessionData)
        this.state = {
            id: Math.floor(Math.random() * 1000),
            hotel_name: this.props.match.params.restName,
            name: data.name,
            email: data.email,
            cost: 0,
            phone: data.phone,
            address: 'U Block Delhi',
            menuItem: '',
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    PlaceOrder = () => {
        let obj = this.state
        obj.menuItem = sessionStorage.getItem('menu')
        console.log(obj)
        fetch(purl, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(this.props.history.push('/veiwBooking'))
    }

    renderMenu = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <div className="orderItem" key={item.menu_id}>
                        <img src={item.menu_image} alt={item.menu_name} />
                        <h3>{item.menu_name}</h3>
                        <h3>Rs. {item.menu_price}</h3>
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <>
                <div className="container1">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3>Your order for the rest {this.state.hotel_name}</h3>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <input type="hidden" name="cost" value={this.state.cost} />
                                <input type="hidden" name="id" value={this.state.id} />
                                <input type="hidden" name="hotel_name" value={this.state.hotel_name} />
                                <div className="col-md-6 form-group">
                                    <label>Name</label>
                                    <input className="form-control" name="name" value={this.state.name} onChange={this.handleChange} />
                                </div>

                                <div className="col-md-6 form-group">
                                    <label>Email</label>
                                    <input className="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                                </div>

                                <div className="col-md-6 form-group">
                                    <label>Phone</label>
                                    <input className="form-control" name="phone" value={this.state.phone} onChange={this.handleChange} />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Address</label>
                                    <input className="form-control" name="address" value={this.state.address} onChange={this.handleChange} />
                                </div>
                                {this.renderMenu(this.state.menuItem)}
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2> Total Price is Rs.{this.state.cost}</h2>
                                    </div>
                                </div>
                                <button className="btn btn-success" onClick={this.PlaceOrder}>Check out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    componentDidMount() {
        //it will come in the form of string we need to convert in hte form of array
        let menuItem = sessionStorage.getItem('menu');//string
        let orderId = [];
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item))
            return 'ok'
        })

        fetch(`${base_url}/menuItem`, {
            method: 'POST',
            headers: {
                'accept': 'application/json', //what kind of data we are adding
                'Content-type': 'application/json', //what kind of data we are getting use slash
            },
            body: JSON.stringify(orderId)
        })
            .then((res) => res.json())
            .then((data) => {
                let totalPrice = 0;
                data.map((item) => {
                    totalPrice += parseFloat(item.menu_price);
                    return 'ok'
                })
                this.setState({ menuItem: data, cost: totalPrice })
            })
    }
}
export default PlaceOrder