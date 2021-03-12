import React, { useState, useEffect } from "react";
import { Button, FormControl, Form } from "react-bootstrap";

import Axios from "axios";

import List from "../Components/List/List";

import "./Styles/GeraTermos.css";
export default function Painel() {
  const [termsUsers, setTermsUsers] = useState([]);
  const [searchOnPainel, setSearchOnPainel] = useState("");

  function dadosTermos() {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setTermsUsers(response.data);
    });
  }

  useEffect(() => {
    dadosTermos();
  }, []);

  return (
    <>
      <div className="mx-auto" style={{ width: "80%" }}>
        <Form.Group>
          <Form.Row>
            <Button>
              <i className="material-icons">filter_alt</i>
            </Button>
            <FormControl
              style={{ width: "30%" }}
              type="text"
              value={searchOnPainel}
              onChange={(e) => setSearchOnPainel(e.target.value)}
            />
          </Form.Row>
        </Form.Group>
      </div>
      <div className="mx-auto" style={{ width: "80%" }}>
        <List termsUsers={termsUsers} searchOnPainel={searchOnPainel} />
      </div>
    </>
  );
}
