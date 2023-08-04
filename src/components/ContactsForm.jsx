import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactsForm extends Component {
  state = { name: '', number: '' };

  handleChangeInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
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
          onChange={this.handleChangeInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          type="text"
          name="name"
          value={this.state.name}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <h2>number</h2>
        <input
          onChange={this.handleChangeInput}
          type="tel"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button>Add contact</button>
      </form>
    );
  }
}

ContactsForm.propTypes = {
  handleAddContact: PropTypes.func.isRequired,
};
