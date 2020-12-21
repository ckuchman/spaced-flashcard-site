import React from "react";
import { Button, Table } from "react-bootstrap";

function MyDecks() {
  return (
    <>
      <h1>
        My Decks
      </h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Deck</th>
          <th>Description</th>
          <th>Ready</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Button variant="primary">French Lessons</Button></td>
          <td>Elementary french words, covers traveling basics.</td>
          <td>33</td>
          <td>124</td>
        </tr>
        <tr>
          <td><Button variant="primary">Google Interview</Button></td>
          <td>Based on 2017 results, focuses on data structure and ...</td>
          <td>12</td>
          <td>234</td>
        </tr>
        <tr>
          <td><Button variant="primary">Django-React Basics</Button></td>
          <td>Common problems with hooking Django to React, Heroku includ...</td>
          <td>9001</td>
          <td>9001</td>
        </tr>
      </tbody>
    </Table>
    <Button variant="secondary" size="sm">Create Deck</Button>
    </>
  );
}

export default MyDecks;
