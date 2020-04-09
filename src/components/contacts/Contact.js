import React, { Component } from 'react'
import './Contact.css'
import PropTypes from 'prop-types'
import { Consumer } from '../Context'
 
class Contact extends Component {
    state = {
        showContactToggle: true
    }

    constructor(props) {
        super(props);
        this.showToggle = this.showToggle.bind(this);
      }

    showToggle() {
        this.setState({
            showContactToggle: !this.state.showContactToggle
        })
    }

    deleteContact = (id, dispatch)=> {
        //this.props.deleteContactFromChild()
        dispatch({
            type: 'DELETE_CONTACT',
            payload: id
        });
    }

    render() {
        const { id, name, phone, email } = this.props.data;
        return (
            <Consumer>
                { value => {
                    const { dispatch } = value;
                    return (
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">
                                    Contact: { name } <i style={{cursor: "pointer"}} onClick={ this.showToggle } className="fa fa-sort-down"></i>
                                    <i style={{color: "red", float: "right", cursor: "pointer"}} onClick={ this.deleteContact.bind(this, id, dispatch) } className="fa fa-times" aria-hidden="true"></i>
                                </h4>
                                <p className="card-text">
                                    {(this.state.showContactToggle)?
                                        (<ul className="list-group">
                                            <li className="list-group-item">Phone: { phone }</li>
                                            <li className="list-group-item">Email: { email }</li>
                                        </ul>) : null
                                    }
                                    
                                </p>
                            </div>
                        </div>
                    )

                 
}}
            </Consumer>
        );
    }
}

Contact.propTypes = {
    data: PropTypes.object.isRequired,
    deleteContactFromChild: PropTypes.func.isRequired
}

export default Contact;