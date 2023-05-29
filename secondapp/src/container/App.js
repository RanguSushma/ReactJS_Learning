import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from './data.json';
import ProductDisplay from './ProductDisplay';


class App extends Component{
    constructor(props){   
        // constructor is used to initialize new version of variables and that initialized variable that start with this key word
        super(props)
        // must call super constructor in derived class before accessing this(in parent class) or return from derived class ES6
            this.state={
                productData:JSON,
                filterData:JSON
            }
        
    }
    filterData = (keyword) =>{   
        {/*filterData is a function with user input(Keyword) output should not redeclare but can reassign updated values*/}
        let output=this.state.productData.filter((data)=>{
        {/*first we filter producData, then that data with name and that should be indexvalue. finally that will return true or false. Iteration occur with every array*/}
            return data.name.toLowerCase().indexOf(keyword.toLowerCase())>-1
        })
        this.setState({filterData:output})
    }
   
    render(){
        return(
            <div>
            <Header userInput={(data)=>{this.filterData(data)}} /> {/*user imput is a property*/}
            <ProductDisplay products={this.state.filterData}/>
            <Footer year='2023' month='May' /> 
            {/* user defined attributes or properties can be passed from nested component from parent to child and done binding */}
        </div>

        )
    }
}
export default App;