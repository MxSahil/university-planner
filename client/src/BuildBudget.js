import React, { Component } from 'react'
import NavBar from './Kunal/Navbar'; 

export class BuildBuget extends Component {
    constructor(props){
        super(props);
        this.state = {
        name:'',
        };
    }

  componentDidMount() {
        const data = JSON.parse(localStorage.getItem('userData'));
        let data1=data;  
        console.log(data1.Name);
        this.setState({name: data1.Name})
      }

    render() {
        return (
            <div className="container">   
            <NavBar />
                <div className="row">  
                    <div className="col-sm-12 btn btn-info">  
                        Welcome to Dashboard
                    </div>  
                </div>
                <div className="row">
                    <div className="col-sm-3"> Welcome: {this.state.name} </div>
                    <div className="col-sm-9"></div>
                </div>
            </div>
        )
    }
}

export default BuildBuget