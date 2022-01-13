import React from "react";
import PropTypes, { shape } from "prop-types";
import Contact from "./Contact";
import { Titel, List } from "./ContactList.styled";
const ContactList = ({ contacts, changeId }) => (
  <>
    <Titel> Ваши контакты </Titel>

    <List>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          id={id}
          number={number}
          changeId={changeId}
        />
      ))}
      {/*{filter &&
        contacts
          .filter((contact) => {
            return contact.name.toLowerCase().includes(filter);
          })
          .map(({ id, name, number }) => (
            <Contact
              key={id}
              id={id}
              name={name}
              number={number}
              changeId={changeId}
            />
          ))} */}
    </List>
  </>
);
export default ContactList;
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    shape({
      key: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),

  changeId: PropTypes.func,
};
