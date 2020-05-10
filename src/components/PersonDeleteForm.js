import React from "react";
import FormContainer from "../elements/FormContainer";
import AddPerson from "../elements/AddPerson";
import Button from "../elements/Button";
import Input from "../elements/Input";
import PStyling from "../elements/PStyling";

const PersonDeleteForm = (formValues) => {
  return (
    <form onSubmit={formValues.submit}>
      <FormContainer>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <AddPerson>Delete a Person</AddPerson>
        <PStyling>Number:</PStyling>
        <Input
          value={formValues.number}
          onChange={formValues.handleIdInputChange}
        />
        <br></br>
        <Button type="submit">DELETE</Button>
      </FormContainer>
    </form>
  );
};

export default PersonDeleteForm;
