import { Contacts } from '../components/Contacts';
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
    name: '',
    number: '',
    filter: '',
  };

  handleAddContact = () => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: nanoid(), name: prevState.name, number: prevState.number },
      ],
    }));
    console.log(this.state);
  };

  handleFilter = event => {
    this.setState({ filter: event.target.value });
  };

  handleFilterContacts = () => {
    const fil = this.state.contacts.filter(el => {
      return el.name.includes(this.state.filter);
    });

    return fil;
  };

  render() {
    return (
      <div>
        <Contacts />
        <button onClick={this.handleAddContact}>Add contact</button>
        <input value={this.state.filter} onChange={this.handleFilter}></input>
        {/* <ul>
          {this.state.contacts.map(el => {
            return (
              <li key={el.id}>
                {el.name} {el.number}
              </li>
            );
          })}
        </ul> */}
        <ul>
          {this.handleFilterContacts().map(el => {
            return 123;
            // <li key={el.id}>
            //   {el.name} {el.number}
            // </li>
          })}
          {console.log(this.handleFilterContacts())}
        </ul>
      </div>
    );
  }
}
