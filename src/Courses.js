import React, { Component } from 'react'
import NavBar from './Kunal/Navbar'; 
import Courses from './components/Courses'

export class Dashboard extends Component {
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
            <Courses />
            </div>
        )
    }
}

export default Dashboard