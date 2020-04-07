import React, { Component } from 'react'

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    submit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const {name, email, phone} = this.state;
        return (
            <div>
                <form onSubmit={this.submit}>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Add contact</h4>
                            <div className="card-text">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" className="form-control" Defaultvalue={name} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" name="email" className="form-control" Defaultvalue={email} onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" name="phone" className="form-control" Defaultvalue={phone} onChange={this.onChange}/>
                                </div>
                                <button className="btn btn-success btn-block">Add contact</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddContact;
