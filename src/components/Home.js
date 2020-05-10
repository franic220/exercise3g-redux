import React, { useState } from "react";
import { connect } from "react-redux";
import { addNewPerson } from "../store/persons";
import H1Styles from "../elements/H1Styles";
import FilterInput from "../elements/FilterInput";
import Filter from "../elements/Filter";
import Numbers from "./Numbers";
import Form from "./Form";

const Home = ({ persons = [], onAddPerson }) => {
  const [personsList, setPersons] = useState(persons);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const handleFilterInputChange = (event) => {
    setNewFilter(event.target.value);
    setPersons(
      personsList.filter((person) =>
        person.name.toLocaleLowerCase().includes(newFilter.toLocaleLowerCase())
      )
    );
  };

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };
    onAddPerson(newPerson);
    setPersons(personsList.concat(newPerson));
    setNewName("");
    setNewNumber("");
  };

  return (
    <>
      <H1Styles>Phonebook</H1Styles>
      <Filter>Filter:</Filter>
      <FilterInput onChange={handleFilterInputChange} />
      <Form
        submit={addPerson}
        newName={newName}
        handleNameInputChange={(event) => setNewName(event.target.value)}
        newNumber={newNumber}
        handleNumberInputChange={(event) => setNewNumber(event.target.value)}
      />
      <H1Styles>Numbers</H1Styles>
      {personsList.map((person) => (
        <Numbers key={person.number} person={person} />
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  persons: state.persons,
});
const mapDispatchToProps = (dispatch) => ({
  onAddPerson: (person) => dispatch(addNewPerson(person)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
