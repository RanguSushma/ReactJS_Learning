import React, { Component } from "react";
import axios from "axios";
import './details.css';
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuList from './menuDetails';

const base_url = "http://3.17.216.66:4000";

class Details extends Component {

    constructor(props) {
        super(props)
        this.state = {
            details: '',
            menuList: '',
            mealId: sessionStorage.getItem('mealId')?sessionStorage.getItem('mealId'):1,
            userItem:''
        }
    }

    addToCart =(data)=>{
        this.setState({userItem:data})
    }

    proceed =()=>{
        sessionStorage.setItem('menu',this.state.userItem)
        this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
    }

    render() {
        // let details=this.state.details; (or)
        let { details } = this.state;
        return (
            <>
                <div className="main">
                    <div className="titleImage">
                        <div className="imageClass">
                            <img src={details.restaurant_thumb} alt={details.restaurant_name} />
                        </div>
                    </div>
                    <div className="titleContent">
                        <div className="content">
                            <h3>{details.restaurant_name}</h3>
                            <span id="cfeedback">231 Customers Rating Average</span>
                            <h6>Old Price <del>Rs. 450</del></h6>
                            <h6>Offer Price Rs. {details.cost}</h6>
                            <h6>Best Taste of Fresh Chai with Samosa At your Door or DineIn</h6>
                            <div>
                                <div className="icons">
                                    <img src="https://i.ibb.co/wJvrhYg/veg.png" alt="" />
                                </div>
                                <div className="icons">
                                    <img src="https://i.ibb.co/mD3jpgc/sentizied.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Tabs>
                        <TabList>
                            <Tab>About</Tab>
                            <Tab>Contact</Tab>
                        </TabList>

                        <TabPanel>
                            <h3>{details.restaurant_name}</h3>
                            <p>{details.restaurant_name}  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </TabPanel>
                        <TabPanel>
                            <h6>{details.address}</h6>
                            <h6>Contact: {details.contact_number}</h6>
                        </TabPanel>
                    </Tabs>
                    <Link to={`/listing/${this.state.mealId}`} className="btn btn-danger">
                        Back
                    </Link> &nbsp;
                    <button className='btn btn-success' onClick={this.proceed}>
                        Proceed
                    </button>
                    <div className='col-md-12' id='menu'>
                        <h3>Menu</h3>
                        <MenuList menuData={this.state.menuList}
                        finalOrder={(data)=>{this.addToCart(data)}}/>
                    </div>
                </div>
            </>
        )
    }

    //async is new way of writing promise
    async componentDidMount() {
        let restaurantId = this.props.location.search.split('=')[1];
        let response = await axios.get(`${base_url}/details/${restaurantId}`);
        let menuResponse = await axios.get(`${base_url}/menu/${restaurantId}`);
        this.setState({ details: response.data[0], menuList: menuResponse.data })
    }
}


export default Details;