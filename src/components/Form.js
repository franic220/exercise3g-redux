import React from "react";
import FormContainer from "../elements/FormContainer";
import AddPerson from "../elements/AddPerson";
import Button from "../elements/Button";
import Input from "../elements/Input";
import PStyling from "../elements/PStyling";

const Form = (formValues) => {
  return (
    <form onSubmit={formValues.submit}>
      <FormContainer>
        <AddPerson>Add a New Person</AddPerson>
        <PStyling>Name:</PStyling>
        <Input
          value={formValues.newName}
          onChange={formValues.handleNameInputChange}
        />
        <br></br>
        <PStyling>Phone Number:</PStyling>
        <Input
          value={formValues.newNumber}
          onChange={formValues.handleNumberInputChange}
        />
        <br></br>
        <Button type="submit">ADD</Button>
      </FormContainer>
    </form>
  );
};

export default Form;
