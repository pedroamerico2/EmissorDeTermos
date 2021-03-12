import React, { useEffect, useState } from "react";
import {
  Modal,
  Button,
  Dropdown,
  Form,
  FormGroup,
  FormControl,
  Col,
} from "react-bootstrap";

export default function ModalAdd(props) {
  const {
    defObs,
    setDefObs,
    showAdd,
    setShowAdd,
    defTerm,
    setDefTerm,
    defName,
    defReg,
    defSector,
    defTeam,
    setDefName,
    setDefReg,
    setDefSector,
    setDefTeam,
    setDefState,
    setDefCity,
    setDefDate,
    getMark,
    getSn,
    getPatrim,
    setGetMark,
    setGetSn,
    setGetPatrim,
    defState,
    defCity,
    defDate,
    saveDataBase,
    defImei1,
    defImei2,
    defNumber,
    setImei1,
    setImei2,
    setNumber,
    defDDD,
    setDDD,
    defModel,
    setModel,
  } = props;

  function HandleClose() {
    setShowAdd(false);
  }
  function HandleAdd() {
    saveDataBase();
    setShowAdd(false);
  }
  return (
    <>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        show={showAdd}
        onHide={HandleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Gerar um Novo Termo</Modal.Title>
        </Modal.Header>
        <Form.Row>
          <FormGroup as={Col} md="12">
            <Dropdown
              title="Geradores"
              variant="success"
              id="dropdown-basic"
              className="text-center"
            >
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {defTerm !== "" ? defTerm : "Termos disponíveis"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setDefTerm("Generico")}>
                  Geral
                </Dropdown.Item>
                <Dropdown.Item
                  value={defTerm}
                  onClick={() => setDefTerm("TermoCameras")}
                >
                  Cameras
                </Dropdown.Item>
                <Dropdown.Item
                  value={defTerm}
                  onClick={() => setDefTerm("TermoNotebooks")}
                >
                  Notebooks
                </Dropdown.Item>
                <Dropdown.Item
                  value={defTerm}
                  onClick={() => setDefTerm("TermoCelulares")}
                >
                  Celulares
                </Dropdown.Item>
                <Dropdown.Item
                  value={defTerm}
                  onClick={() => setDefTerm("TermoDesktops")}
                >
                  Desktop
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </FormGroup>
        </Form.Row>
        <Modal.Body>
          <p className="text-center">Informação Colaborador</p>
          <hr />
          <Form.Row>
            <FormGroup as={Col} md="8">
              <FormControl
                type="text"
                placeholder="Nome Completo"
                value={defName}
                onChange={(e) => setDefName(e.target.value)}
              />
            </FormGroup>
            <FormGroup as={Col} md="4">
              <FormControl
                type="text"
                placeholder="Matricula"
                value={defReg}
                onChange={(e) => setDefReg(e.target.value)}
              />
            </FormGroup>
          </Form.Row>
          <Form.Row>
            <FormGroup as={Col} md="6">
              <FormControl
                type="text"
                placeholder="Setor"
                value={defSector}
                onChange={(e) => setDefSector(e.target.value)}
              />
            </FormGroup>
            <FormGroup as={Col} md="6">
              <FormControl
                type="text"
                placeholder="Equipe"
                value={defTeam}
                onChange={(e) => setDefTeam(e.target.value)}
              />
            </FormGroup>
          </Form.Row>
          <hr />
          <p className="text-center">Dados Para o Termo</p>
          <hr />
          <Form.Row>
            <FormGroup as={Col} md="2">
              <FormControl
                type="text"
                placeholder="Marca"
                value={getMark}
                onChange={(e) => setGetMark(e.target.value)}
              />
            </FormGroup>
            <FormGroup as={Col} md="2">
              <FormControl
                type="text"
                placeholder="Modelo"
                value={defModel}
                onChange={(e) => setModel(e.target.value)}
              />
            </FormGroup>
            <FormGroup as={Col} md="4">
              <FormControl
                type="text"
                placeholder="Numero Serial"
                value={getSn}
                onChange={(e) => setGetSn(e.target.value)}
              />
            </FormGroup>
            <FormGroup as={Col} md="4">
              <FormControl
                type="text"
                placeholder="Placa de Patrimonio"
                value={getPatrim}
                onChange={(e) => setGetPatrim(e.target.value)}
              />
            </FormGroup>
            <FormGroup as={Col} md="12">
              <FormControl
                type="text"
                placeholder="Observações"
                value={defObs}
                onChange={(e) => setDefObs(e.target.value)}
              />
            </FormGroup>
          </Form.Row>
          {defTerm === "TermoCelulares" ? (
            <Form.Row>
              <FormGroup as={Col} md="6">
                <FormControl
                  type="text"
                  placeholder="IMEI1"
                  value={defImei1}
                  onChange={(e) => setImei1(e.target.value)}
                />
              </FormGroup>
              <FormGroup as={Col} md="6">
                <FormControl
                  type="text"
                  placeholder="IMEI2"
                  value={defImei2}
                  onChange={(e) => setImei2(e.target.value)}
                />
              </FormGroup>
              <FormGroup as={Col} md="2">
                <FormControl
                  type="text"
                  placeholder="DDD"
                  value={defDDD}
                  onChange={(e) => setDDD(e.target.value)}
                />
              </FormGroup>
              <FormGroup as={Col} md="6">
                <FormControl
                  type="text"
                  placeholder="Número de telefone"
                  value={defNumber}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </FormGroup>
            </Form.Row>
          ) : (
            <div />
          )}

          <Form.Row>
            <FormGroup as={Col} md="4">
              <Dropdown variant="success" id="dropdown-basic">
                <Dropdown.Toggle
                  style={{ width: "100%" }}
                  variant="light"
                  id="dropdown-basic"
                >
                  {defCity !== "" ? defCity : "Cidade"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setDefCity("VTC")}>
                    Vitória da Conquista
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setDefCity("BRU")}>
                    Brumado
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setDefCity("GUA")}>
                    Guanambi
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setDefCity("JEQ")}>
                    Jequié
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setDefCity("BAR")}>
                    Barreiras
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setDefCity("BJL")}>
                    Bom Jesus da Lapa
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setDefCity("FRS")}>
                    Feira de Santana
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setDefCity("ITA")}>
                    Itaberaba
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setDefCity("SER")}>
                    Serrinha
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setDefCity("FOR")}>
                    Fortaleza
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setDefCity("RGS")}>
                    Rio Grande Do Sul
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </FormGroup>
            <FormGroup as={Col} md="2">
              <Dropdown variant="success" id="dropdown-basic">
                <Dropdown.Toggle
                  style={{ width: "100%" }}
                  variant="light"
                  id="dropdown-basic"
                >
                  {defState !== "" ? defState : "Estado"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setDefState("BA")}>
                    BA
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setDefState("CE")}>
                    CE
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setDefState("RS")}>
                    RS
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </FormGroup>
            <FormGroup as={Col} md="6">
              <FormControl
                type="date"
                value={defDate}
                onChange={(e) => setDefDate(e.target.value)}
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
