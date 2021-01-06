import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, 
        NavbarContainer, 
        NavLogo, 
        MobileIcon, 
        NavMenu, 
        NavItem, 
        NavLinks 
    } from  './NavbarElements';

const Navbar = () => {
    return (
        <>
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
                            <NavLinks to='Sign Out'>Sign Out</NavLinks>
                        </NavItem>
                    </NavMenu>
            
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
