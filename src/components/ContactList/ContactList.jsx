import React from "react";
import PropTypes, { shape } from "prop-types";
import Contact from "./Contact";
const ContactList = ({ contacts, filter }) => (
  <>
    <h2>Ваши контакты</h2>

    <ul>
      {!filter &&
        contacts.map(({ id, name, number }) => (
          <Contact key={id} name={name} id={id} number={number} />
        ))}
      {filter &&
        contacts
          .filter((contact) => {
            return contact.name.toLowerCase().includes(filter);
          })
          .map(({ id, name, number }) => (
            <Contact key={id} id={id} name={name} number={number} />
          ))}
    </ul>
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
};
