import React, { Component } from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav,
        NavbarContainer,
        NavLogo,
        MobileIcon,
        NavMenu,
        NavItem,
        NavLinks
    } from  './NavbarElements';

export class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
        name:'',
        };
    }
    
    componentDidMount() {
        const data = JSON.parse(localStorage.getItem('userData'));
        let data1=data;  
        console.log(data1.name);
        this.setState({ name: data1.name }, () => {
            console.log(data1.name);
          });
    }

    render(){
        return (
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/Dashboard'>MyBudget</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='Dashboard'>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='BuildBudget'>Build Budget</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='CheckBudget'>Check Budget</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='Courses'>Courses</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/Dashboard'>{this.state.name}</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='Sign Out'>Sign Out</NavLinks>
                        </NavItem>
                    </NavMenu>

                </NavbarContainer>
            </Nav>
        )
    }
};

export default Navbar;
