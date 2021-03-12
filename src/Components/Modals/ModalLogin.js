import React from "react";
import {
  Modal,
  Button,
  Dropdown,
  Form,
  FormGroup,
  FormControl,
  Col,
} from "react-bootstrap";

export default function ModalLogin(props) {
  const {
    emailLogin,
    setEmailLogin,
    passwordLogin,
    setPassswordLogin,
    showLogin,
    setShowLogin,
    menu,
    saveDataBase,
  } = props;

  function HandleClose() {
    setShowLogin(false);
  }
  function HandleAdd() {
    saveDataBase();
    setShowLogin(false);
  }
  return (
    <>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        show={showLogin}
        onHide={HandleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Form.Row>
          <FormGroup as={Col} md="12">
            <Dropdown
              title="Login"
              variant="success"
              id="dropdown-basic"
              className="text-center"
            >
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {menu === "" ? menu : "Menu"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => menu("Criar usuário")}>
                  login
                </Dropdown.Item>
                <Dropdown.Item onClick={() => menu("Logar")}>
                  login
                </Dropdown.Item>
                <Dropdown.Item onClick={() => menu("Esqueci minha senha")}>
                  passwordLogin
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </FormGroup>
        </Form.Row>
        <Modal.Body>
          <p className="text-center">Opções de Login</p>
          <hr />
          <Form.Row>
            <FormGroup as={Col} md="8">
              <FormControl
                type="text"
                placeholder="Email do Usuário"
                value={emailLogin}
                onChange={(e) => setEmailLogin(e.target.value)}
              />
            </FormGroup>
            <FormGroup as={Col} md="4">
              <FormControl
                type="text"
                placeholder="Senha"
                value={passwordLogin}
                onChange={(e) => setPassswordLogin(e.target.value)}
              />
            </FormGroup>
          </Form.Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => HandleClose()}>
            Fechar
          </Button>
          <Button variant="success" onClick={() => HandleAdd()}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
