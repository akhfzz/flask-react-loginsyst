import React from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {LoggedIn, hapusToken} from './ototentikasi';
import '../index.css';

const Log = () => {
    if(LoggedIn()){
        return(
            <Button onClick={()=>{
                hapusToken();
                window.location.replace('/')
            }}
            >Logout</Button>
        )
    }else{
        return(
            <Link to='/login'>Login</Link>
        )
    }
}
const Navigation = () => {
    return(
        <Navbar className='nav-container'>
            <Nav className='pull-right'>
                <NavItem className='navitem' href='#'>
                    <Log/>
                </NavItem>
            </Nav>
        </Navbar>
    )
}
export default Navigation;