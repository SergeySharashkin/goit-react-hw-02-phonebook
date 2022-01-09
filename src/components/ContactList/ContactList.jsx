import React from "react";
// import PropTypes from 'prop-types';
import Contact from "./Contact";
const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <Contact id={id} name={name} number={number} />
    ))}
  </ul>
);
export default ContactList;
// ContactList.propTypes = {
//   contacts: {
//     id: PropTypes.string,
//     name: PropTypes.string,
//     number: PropTypes.string,
// }
// }
