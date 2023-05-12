import React,{Component, Fragment} from 'react';
import './Header.css';
class Header extends Component{
    render(){
        return(
            <Fragment>
            <header>
                <h1>REACT JS</h1>
                <input/>
                <h3 style={{color:'back'}}>user input</h3>
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