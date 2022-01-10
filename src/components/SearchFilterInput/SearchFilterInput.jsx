import { Component } from "react";

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
      <label>
        Найти контакт по имени
        <input
          type="text"
          name="filter"
          title="Name search. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={this.handleSearch}
          required
        />
      </label>
    );
  }
}
export default SearchFilterInput;
