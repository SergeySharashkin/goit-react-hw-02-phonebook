import PropTypes from "prop-types";
import React from "react";
const Contact = ({ id, name, number }) => {
  return (
    <li key={id}>
      <p>
        {name}: <span>{number}</span>
      </p>
      <button
        type="button"
        id={id}
        onClick={(e) => console.log(e.currentTarget)}
      >
        Удалить
      </button>
    </li>
  );
};
export default Contact;
Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
