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
    // console.log(data);
    data.id = nanoid(5);
    this.setState({ contacts: [...this.state.contacts, data] });
  };
  filterInputHandler = (input) => {
    this.setState({ filter: input });
    console.log(input);
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <Form onSubmit={this.formSubmitHandler} />
        <SearchFilterInput onChange={this.filterInputHandler} />
        <ContactList contacts={contacts} />
      </>
    );
  }
}

export default App;
