import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class Contacts extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeInputName = event => {
    // event.target.value
    this.setState({ name: event.target.value });
  };

  handleChangeInputNumber = event => {
    // event.target.value
    this.setState({ number: event.target.value });
    console.log(event.target.value);
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleChangeInputName}
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <input
          onChange={this.handleChangeInputNumber}
          type="tel"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
    );
  }
}
