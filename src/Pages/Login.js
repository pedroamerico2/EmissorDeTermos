import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import "./Styles/Login.css";

export default function Login() {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  function HandleLogin(u, p) {}

  return (
    <>
      <div className="container">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Form className="formulario">
          <img
            src={""}
            style={{
              width: "100px",
              height: "100px",
              display: "block",
              margin: "0 auto",
            }}
          />
          <hr />
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={emailLogin}
              onChange={(e) => setEmailLogin(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={passwordLogin}
              onChange={(e) => setPasswordLogin(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button
            type="button"
            onClick={() => HandleLogin(emailLogin, passwordLogin)}
          >
            Logar
          </Button>
        </Form>
      </div>
    </>
  );
}
