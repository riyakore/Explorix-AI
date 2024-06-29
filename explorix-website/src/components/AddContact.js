import React from "react";

// class component
class AddContact extends React.Component {
    state = {
        name:"",
        email:"",
    }

    add = (e) => {
        // because you dont want your page to get refreshed
        e.preventDefault();
        if(this.state.name === "" || this.state.email === "") {
            alert("All these fields are mandatory");
            return;
        }
        this.props.addContactHandler(this.state);
        // clear the box after you have typed in your information
        this.setState({name:"", email:""});

    }
    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name:</label>
                        <input type="text" 
                        name="name" 
                        placeholder="Name" 
                        value={this.state.name}
                        onChange={(e) => this.setState({name: e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Email:</label>
                        <input type="text" 
                        name="email" 
                        placeholder="Email" 
                        value={this.state.email}
                        onChange={(e) => this.setState({email: e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Password:</label>
                        <input type="text" name="email" placeholder="Password" />
                    </div>
                    <div className="field">
                        <label>Re-enter Password:</label>
                        <input type="text" name="email" placeholder="Password" />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;