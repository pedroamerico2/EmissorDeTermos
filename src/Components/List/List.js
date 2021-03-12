import React from "react";
import { Table, Button } from "react-bootstrap";
import moment from "moment";

import "./Styles/List.css";

export default function List(props) {
  const { termsUsers, searchOnPainel } = props;
  return (
    <>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th width="5%">id</th>
            <th width="15%">ultima alteracao</th>
            <th width="30%">nome</th>
            <th width="10%">matricula</th>
            <th width="15%">setor</th>
            <th width="10%">equipe</th>
            <th width="15%">Actions</th>
          </tr>
        </thead>
        <tbody>
          {termsUsers
            .filter(
              (a) =>
                a.name.toUpperCase().indexOf(searchOnPainel.toUpperCase()) !==
                -1
            )
            .map((a, index) => {
              return (
                <tr>
                  <td width="5%">{a.id}</td>
                  <td width="15%">{moment(a.date).format("LLL")}</td>
                  <td width="30%">{a.name}</td>
                  <td width="10%">{a.reg}</td>
                  <td width="15%">{a.sector}</td>
                  <td width="10%">{a.team}</td>
                  <td width="15%" className="text-center mx-auto">
                    <Button variant="danger" className="ml-1">
                      <i className="material-icons">delete</i>
                    </Button>
                    <Button variant="warning" className="ml-1">
                      <i className="material-icons">mode_edit</i>
                    </Button>
                    <Button variant="info" className="ml-1">
                      <i className="material-icons">preview</i>
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
}
