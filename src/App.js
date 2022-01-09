import React, { Component } from "react";
import Form from "./components/Form/Form";
import ContactList from "./components/ContactList/ContactList";
import { nanoid } from "nanoid";

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

  render() {
    const { contacts } = this.state;
    return (
      <>
        <Form onSubmit={this.formSubmitHandler} />
        <ContactList contacts={contacts} />
      </>
    );
  }
}

export default App;
