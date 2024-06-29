import React, {useState, useEffect} from 'react';
import {uuid} from 'uuidv4';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

  const LOCAL_STORAGE_KEY = "contacts";

  // using react hooks
  // if we are using a functional component, we make use of react hooks
  const [contacts, setContacts] = useState([]);

  // function as props to pass information from child to parent 
  // here child is the AddContact and parent is App.js
  const addContactHandler = (contact) => {
    console.log(contact);
    // add a new contact to the array of contacts
    setContacts([...contacts, {id: uuid(), ...contacts}]);
  };

  // get item to get it from the local storage and display it 
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  // setter to store it into local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler = {addContactHandler}/>
      {/* Props - pass data from parent to child
      Props (properties) */}
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
