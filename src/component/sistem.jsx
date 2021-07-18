import React, {Component} from 'react';
import { Button, FormControl, FormGroup, FormCheck, FormLabel } from 'react-bootstrap';
import '../index.css'
// formgroup untuk parent form, controllabel pemberian label, formcontrol untuk type form dan helpblock untuk pesan ke user

function FormTemplate({id, label, help, ...props}){
    return(
        <FormGroup controlId={id}>
            <FormLabel>{label}</FormLabel>
            <FormControl {...props}/>
            {help && <FormCheck>{help}</FormCheck>}
        </FormGroup>
    )
}

class SystemCreate extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            nama : '',
            password : ''
        }
    }
    handlePerubahan = event => {
        const nama = event.target.name;
        const value = event.target.value;
        this.setState({
            [nama] : value
        })
    }
    handleDaftar = e => {
        e.preventDefault();
        const url = 'http://localhost:5000/daftar'
        let form = new FormData();
        let stateVar = this.state;
        for(let email in stateVar){
            form.append(email, stateVar[email])
        }
        fetch(url ,{
            method : 'POST',
            body : form
        }).then(restful=> restful.json())
        .then(db=>{
            localStorage.setItem('access_token_api', db.access_token_api);
            localStorage.setItem('email', db.email);
            if(localStorage.getItem('access_token_api') !== null && localStorage.getItem('access_token_api') !== 'undefined'){
                window.location.replace('/');
            }else{
                alert(db.error)
            }
        }).catch(err=>console.log(err))
    }
    handleLogin = e => {
        e.preventDefault();
        const url = 'http://localhost:5000/login'
        let form = new FormData();
        let stateVar = this.state;
        for(let email in stateVar){
            form.append(email, stateVar[email])
        }
        fetch(url,{
            method : 'POST',
            body : form
        }).then(rest=> rest.json())
        .then(db=>{
            localStorage.setItem('access_token_api', db.access_token_api);
            localStorage.setItem('email', db.email);
            if(localStorage.getItem('access_token_api') !== null && localStorage.getItem('access_token_api') !== 'undefined'){
                window.location.replace('/');
            }else{
                alert(db.error)
            }
        }).catch(err=>console.log(err))
    } 
    
    render(){
        return(
            <div className='LoginForm'>
                <div className='box'>
                    <form>
                        <FormTemplate
                            id='email'
                            type='email'
                            name='email'
                            value = {this.state.email}
                            onChange={this.handlePerubahan}
                            placeholder='email kamu'
                        />
                        <FormTemplate
                            id='nama'
                            type='text'
                            name='nama'
                            value = {this.state.nama}
                            onChange={this.handlePerubahan}
                            placeholder='username kamu'
                        />
                        <FormTemplate
                            id='password'
                            type='password'
                            name='password'
                            value = {this.state.password}
                            onChange={this.handlePerubahan}
                            placeholder='password kamu'
                        />
                        <Button onClick={this.handleDaftar} className='daftar'>Daftar</Button>
                        <Button onClick={this.handleLogin} className='login'>Log in</Button>
                    </form>
                </div>
            </div>
        )
    }
} 
export default SystemCreate;