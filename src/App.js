import React, {Component} from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SystemCreate from "./component/sistem";
import Navigation from "./component/nav";
import {Routing} from "./component/routing";
import {LoggedIn} from "./component/ototentikasi";
import './index.css'
const Street = () => <h3>Login menjadi {localStorage.getItem('email')}</h3>;

class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Navigation/>
                    <Routing exact isloggedin={LoggedIn()} path='/' component={Street}/>
                    <Route exact path='/login' component={SystemCreate}/>
                </div>
            </Router>
        )
    }
}

export default App;
