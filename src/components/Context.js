import React, { Component } from 'react'

const Context = React.createContext()
const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return {
                contacts: state.contacts.filter((contact) => contact.id !== action.payload)
            };
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        contacts: [
            {id: 1, name: "Med BEN", tel: "0750660964",  emai: "moh.benysf@gmail.com"},
            {id: 2, name: "Yassine BEN", tel: "0750660933",  emai: "yass.benysf@gmail.com"},
            {id: 3, name: "Fatima BEN", tel: "0750660988",  emai: "fat.benysf@gmail.com"}
        ],
        dispatch: action => this.setState(state => reducer(state, action))
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
