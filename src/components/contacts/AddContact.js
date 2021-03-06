import React, { Component } from 'react'
import { Consumer } from '../Context'
import InputTextGroup from '../helpers/InputTextGroup'
import axios from 'axios'

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    submit = (dispatch, size, e) => {
        e.preventDefault();
        const {name, email, phone} = this.state
        
        if (name == "") {
            this.setState({errors: {name: "name is required"}})
            return;
        }
        if (email == "") {
            this.setState({errors: {email: 'email is required'}})
            return;
        }
        if (phone == "") {
            this.setState({errors: {phone: 'phoone is required'}})
            return;
        }
        const newContact = {
            name: name,
            email: email,
            tel: phone
        };

        axios.post('https://jsonplaceholder.typicode.com/users', newContact).then(
            res => {
                console.log(res)
                dispatch({
                    type: 'ADD_CONTACT',
                    payload: res.data
                });
            }
        )

        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });

        this.props.history.push('/');
    }

    render() {
        const {name, email, phone, errors} = this.state;
        return (
            <Consumer>
                { value => {
                    const {dispatch} = value;
                    return(
                        <div>
                            <form onSubmit={this.submit.bind(this, dispatch, value.contacts.length)}>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Add contact</h4>
                                        <div className="card-text">
                                            <InputTextGroup 
                                                label="Name" 
                                                type="text" 
                                                name="name" 
                                                value={name} 
                                                error={errors.name}
                                                onChange={this.onChange} 
                                            />
                                             <InputTextGroup 
                                                label="Email" 
                                                type="email" 
                                                name="email" 
                                                value={email} 
                                                error={errors.email}
                                                onChange={this.onChange} 
                                            />
                                             <InputTextGroup 
                                                label="Phone" 
                                                type="text" 
                                                name="phone" 
                                                value={phone} 
                                                error={errors.phone}
                                                onChange={this.onChange} 
                                            />
                                            <button className="btn btn-success btn-block">Add contact</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )
                }}
                
            </Consumer>
        )
    }
}

export default AddContact;
