import React,{Component, Fragment} from 'react';
import './Header.css';
class Header extends Component{
    constructor(){
        super()
        this.state={
            input:'User Input Required'
        }
    }
    render(){
        return(
            <Fragment>
            <header>
                <h1 style={{margin:'0px'}}>Products</h1>
                <input/>
                <h3 style={{color:'back'}}>{this.state.input}</h3>
             <hr/>
            </header>
            </Fragment>
            )
        }
}

// function Header() {
//     return (
//         <div>
//             <center>
//                 <h1>REACT JS</h1>
//             </center>
//             <hr />
//         </div>
//     )
// }
export default Header;