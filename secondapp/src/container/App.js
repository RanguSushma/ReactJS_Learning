import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from './data.json';
import ProductDisplay from './ProductDisplay';


class App extends Component{
    constructor(props){
        super(props)
            this.state={
                productData:JSON
            }
        
    }
   
    render(){
        return(
            <div>
            <Header userInput={(data)=>{console.log("in parent",data)}} /> {/*user imput is a property*/}
            <ProductDisplay products={this.state.productData}/>
            <Footer year='2023' month='May' /> 
            {/* user defined attributes or properties can be passed from nested component from parent to child and done binding */}
        </div>

        )
    }
}
export default App;