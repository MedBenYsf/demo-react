import React, { Component } from 'react'
import { Consumer } from '../Context'
import InputTextGroup from '../helpers/InputTextGroup'
import axios from 'axios'

class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    async componentDidMount() {
        const id = this.props.match.params.id;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        this.setState({
            name: res.data.name,
            email: res.data.email,
            phone: res.data.phone
        })
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
        const upContact = {
            name: name,
            email: email,
            phone: phone
        };

        const id = this.props.match.params.id;

        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, upContact).then(
            res => {
                dispatch({
                    type: 'UPDATE_CONTACT',
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
                                        <h4 className="card-title">Edit contact</h4>
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
                                            <button className="btn btn-success btn-block">Update contact</button>
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

export default EditContact;
