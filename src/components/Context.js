import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext()
const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return {
                contacts: state.contacts.filter((contact) => contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return {
                contacts: [action.payload, ...state.contacts]
            };
        case 'UPDATE_CONTACT':
            return {
                contacts: state.contacts.map(contact => contact.id === action.payload.id ? action.payload : contact)
            };
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        contacts: [
            {id: 1, name: "Med BEN", phone: "0750660964",  emai: "moh.benysf@gmail.com"},
            {id: 2, name: "Yassine BEN", phone: "0750660933",  emai: "yass.benysf@gmail.com"},
            {id: 3, name: "Fatima BEN", phone: "0750660988",  emai: "fat.benysf@gmail.com"}
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    }

    componentWillMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            this.setState({contacts: response.data});
        })
        .catch(error =>console.log(error))
    }

    render() {
        return (
           <Context.Provider value={this.state}>
               {this.props.children}
           </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
