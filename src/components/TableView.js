import React from "react";
import { connect } from "react-redux";
import TableContainer from "../elements/TableContainer";
import H1Styles from "../elements/H1Styles";
import ContactsTable from "../elements/ContactsTable";
import ContactsTableHead from "../elements/ContactsTableTHead";
import TableRow from "./TableRow";

const TableView = ({ persons = [] }) => {
  return (
    <TableContainer>
      <H1Styles>Contacts List</H1Styles>
      <ContactsTable>
        <ContactsTableHead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
          </tr>
        </ContactsTableHead>
        <tbody>
          {persons.map((contact) => (
            <TableRow key={contact.name} contact={contact} />
          ))}
        </tbody>
      </ContactsTable>
    </TableContainer>
  );
};

const mapStateToProps = (state) => ({
  persons: state.persons,
});
export default connect(mapStateToProps, null)(TableView);
