import React from 'react';

export class Contacts extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChangeInput = event => {
    // event.target.value
    this.setState({ name: event.target.value });
  };

  handleAddContact = () => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, prevState.name],
    }));
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleChangeInput}
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button>Add contact</button>
        <div>input</div>
      </div>
    );
  }
}
