import { Component } from "react";
import { Label, Input, Form } from "./SearchFilterInput.styled";
import PropTypes from "prop-types";

class SearchFilterInput extends Component {
  state = {
    name: "",
  };
  handleSearch = (event) => {
    const { value } = event.currentTarget;
    this.setState({ name: value }, this.handleFilter);
  };
  handleFilter = () => {
    this.props.onChange(this.state.name);
  };
  render() {
    return (
      <Form>
        <Label>
          Найти контакт по имени
          <Input
            type="text"
            name="filter"
            title="Name search. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            onChange={this.handleSearch}
            required
          />
        </Label>
      </Form>
    );
  }
}
export default SearchFilterInput;
SearchFilterInput.propTypes = {
  onChange: PropTypes.func,
};
