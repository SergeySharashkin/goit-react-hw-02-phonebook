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
        return contact.name.includes(data.name);
      })
      .includes(true);
    if (state) {
      alert("такой контакт уже есть");
    } else {
      data.id = nanoid(5);
      this.setState({ contacts: [...this.state.contacts, data] });
    }
  };

  filterInputHandler = (input) => {
    let inputLC = input.toLowerCase();
    this.setState({ filter: inputLC });
    console.log(inputLC);
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <Form onSubmit={this.formSubmitHandler} />
        <SearchFilterInput onChange={this.filterInputHandler} />
        <ContactList contacts={contacts} filter={filter} />
      </>
    );
  }
}

export default App;
