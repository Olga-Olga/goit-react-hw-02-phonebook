import React, { Component } from 'react';

export default class ContactsForm extends Component {
  state = { name: '', number: '' };

  handleChangeInputName = event => {
    this.setState({ name: event.target.value });
  };

  handleChangeInputNumber = event => {
    this.setState({ number: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const number = event.target.number.value;
    console.log(this.props);

    this.props.handleAddContact({ name, number });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <h2>Name</h2>
        <input
          onChange={this.handleChangeInputName}
          type="text"
          name="name"
          value={this.state.name}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <h2>number</h2>
        <input
          onChange={this.handleChangeInputNumber}
          type="tel"
          name="number"
          value={this.state.number}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button>Add contact</button>
      </form>
    );
  }
}

// onClick={this.handleAddContact}
