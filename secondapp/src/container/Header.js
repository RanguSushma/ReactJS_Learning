import React,{Component, Fragment} from 'react';
import './Header.css';
class Header extends Component{
    constructor(){
        console.log(">>>>>cons")
        //    this constructor can be called only once when the clas get loaded
        super()
        this.state={
            input:'User Input Required'
        }
    }
    handleChange = (event) =>{
        this.setState({input:event.target.value})
        // state input we need to update the we use setSate fromwhere: to where
        this.props.userInput(event.target.value)
        //userinput properties in side props moving data from child to parent App.js using userInput property name

    }
    render(){
        console.log(">>>>>render")
        // every state gets change then render function gets called(or)event gets rendered every time when the event occur
        return(
            <Fragment>
            <header>
                <h1 style={{margin:'0px'}}>Products</h1>
                <input  onChange={this.handleChange} />
                <h3 style={{color:'back'}}>{this.state.input}</h3>
             <hr/>
            </header>
            </Fragment>
            )
        }
}
export default Header;