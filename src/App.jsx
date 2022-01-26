import React, { Component } from "react";
import Form from "./components/Form/Form";
import ContactList from "./components/ContactList/ContactList";
import { nanoid } from "nanoid";
import SearchFilterInput from "./components/SearchFilterInput/SearchFilterInput";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  formSubmitHandler = (data) => {
    const state = this.state.contacts
      .map((contact) => {
        return contact.name.toLowerCase() === data.name.toLowerCase();
      })
      .includes(true);
    if (state) {
      alert("такой контакт уже есть");
    } else {
      data.id = nanoid(5);
      this.setState({ contacts: [...this.state.contacts, data] });
    }
  };
  onDelForId = (curentId) => {
    const list = this.state.contacts.filter(({ id }) => id !== curentId);
    this.setState({ contacts: list });
  };

  filterInputHandler = (input) => {
    let inputLC = input.toLowerCase();
    this.setState({ filter: inputLC });
  };
  onFilter = () => {
    const { filter, contacts } = this.state;
    if (filter) {
      return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
    } else {
      return contacts;
    }
  };

  render() {
    const { filter } = this.state;
    const filtredContacts = this.onFilter();

    return (
      <>
        <Form onSubmit={this.formSubmitHandler} />
        <SearchFilterInput onChange={this.filterInputHandler} />
        <ContactList
          contacts={filtredContacts}
          filter={filter}
          changeId={this.onDelForId}
        />
      </>
    );
  }
}

export default App;
