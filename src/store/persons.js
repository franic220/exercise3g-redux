import { createAction } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

//Actions
export const addNewPerson = createAction("addNewPerson");
export const deletePerson = createAction("deletePerson");

//Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case addNewPerson.type:
      if (
        state.filter((person) => person.number === action.payload.number)
          .length === 0
      ) {
        return [
          ...state,
          {
            name: action.payload.name,
            number: action.payload.number,
          },
        ];
      } else {
        alert(`${action.payload.number} is already added to phonebook`);
        return state;
      }

    case deletePerson.type:
      return state.filter((person) => person.number !== action.payload.number);

    default:
      return state;
  }
}

//Selector
export const getPersons = createSelector(
  (state) => state, //this line returns an array of the list of persons
  (persons) => persons.map((person) => console.log("LIST", person))
);
