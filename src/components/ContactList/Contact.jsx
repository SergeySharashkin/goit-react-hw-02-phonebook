import PropTypes from "prop-types";

import React from "react";
import { Item, Name, Number, RemoveButton } from "./ContactList.styled";
const Contact = ({ id, name, number, changeId }) => {
  return (
    <Item key={id}>
      <Name>
        {name}: <Number>{number}</Number>
      </Name>
      <RemoveButton type="button" id={id} onClick={changeId}>
        Удалить
      </RemoveButton>
    </Item>
  );
};
export default Contact;
Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
