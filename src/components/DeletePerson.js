import React, { useState } from "react";
import { connect } from "react-redux";
import { deletePerson } from "../store/persons";
import PersonDeleteForm from "./PersonDeleteForm";

const DeletePerson = ({ onDeletePerson }) => {
  const [numberToDelete, setNumberToDelete] = useState("");
  const handleDelete = (e) => {
    e.preventDefault();
    onDeletePerson({ number: numberToDelete });
    setNumberToDelete("");
  };
  return (
    <>
      <PersonDeleteForm
        submit={handleDelete}
        number={numberToDelete}
        handleIdInputChange={(event) => setNumberToDelete(event.target.value)}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onDeletePerson: (person) => dispatch(deletePerson(person)),
});
export default connect(null, mapDispatchToProps)(DeletePerson);
