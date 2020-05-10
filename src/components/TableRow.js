import React from "react";

const style = {
  fontFamily: "Georgia, Times New Roman, Times, serif",
  textAlign: "left",
};

const TableRow = ({ contact }) => {
  return (
    <tr>
      <td style={style}>{contact.name}</td>
      <td style={style}>{contact.number}</td>
    </tr>
  );
};

export default TableRow;
