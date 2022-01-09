import PropTypes from "prop-types";
const Contact = ({ id, name, number }) => {
  return (
    <li key={id}>
      <p>
        {name}: <span>{number}</span>
      </p>
    </li>
  );
};
export default Contact;
Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
