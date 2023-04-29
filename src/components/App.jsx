import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };
  // handleChange = evt => {
  //   const { name, value } = evt.target;
  //   this.setState({ contacts: [name, value] });
  // };
  submitContact = e => {
    e.preventDefault();
    const { name, number } = e.target;
    console.log(name.value, number.value);
    // this.setState({prestate contacts: [name.value, number.value] });
    const { contacts } = this.state;
    console.log(contacts);
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          addContact={this.submitContact}
          contactsValue={this.handleChange}
        />
        <h2>Contacts</h2>
        <ContactList contactName={this.state.contacts} />
      </div>
    );
  }
}

export default App;
{
  /* <div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div> */
}
