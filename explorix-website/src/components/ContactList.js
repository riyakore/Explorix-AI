import React from "react";
import App from "./App";
import ContactCard from "./ContactCard";

// functional component (not a class component)
// you can access the props using the default parameter props in the ()
const ContactList = (props) => {
    console.log(props);

    // using the array we defined in App.js, we are mapping each component of that array here
    // rendering through a list functionality here
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact}></ContactCard>
        );
    })
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    );

}

export default ContactList;