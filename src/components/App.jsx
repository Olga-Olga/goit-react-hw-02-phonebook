import ContactList from './ContactList';
import ContactsForm from './ContactsForm';
import Filter from './Filter';
import React from 'react';
import { nanoid } from 'nanoid';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...newContact }],
    }));
  };

  getFilteredData = () => {
    const filterdContacts = this.state.contacts.filter(el => {
      return el.name.includes(this.state.filter);
    });
    return filterdContacts;
  };

  handleFilter = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const filteredData = this.getFilteredData();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactsForm handleAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter
          onChangeFilterValue={this.handleFilter}
          value={this.state.filter}
        />
        <ContactList paramList={filteredData} />
      </div>
    );
  }
}

//     <div>
//       <ul>{this.handleFilterContacts().map(el => {
//             return (
//               <li key={el.id}>
//                 {el.name} {el.number}
//               </li>
//             )
//           })
//         }
//  </ul>
//     </div>;
