import React, { useState, useContext, useEffect } from "react";
import { Dropdown, Button, Container } from "react-bootstrap";
import Axios from "axios";

import moment from "moment";

import ModalAdd from "../Components/Modals/ModalAdd";
import ModalPreview from "../Components/Modals/ModalPreview";
import ModalLogin from "../Components/Modals/ModalLogin";
import "./Styles/GeraTermos.css";
export default function GeraTermos() {
  const ref = React.createRef();
  const [defTerm, setDefTerm] = useState("");
  const [defName, setDefName] = useState("");
  const [defReg, setDefReg] = useState("");
  const [defSector, setDefSector] = useState("");
  const [defTeam, setDefTeam] = useState("");
  const [defState, setDefState] = useState("");
  const [defCity, setDefCity] = useState("");
  const [defDate, setDefDate] = useState("");
  const [defObs, setDefObs] = useState("");
  const [getMark, setGetMark] = useState("");
  const [getSn, setGetSn] = useState("");
  const [getPatrim, setGetPatrim] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [defImei1, setImei1] = useState("");
  const [defImei2, setImei2] = useState("");
  const [defNumber, setNumber] = useState("");
  const [defDDD, setDDD] = useState("");
  const [defModel, setModel] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState();
  const [showLogin, setShowLogin] = useState(false);
  const [menu, setMenu] = useState();
  const [showPreview, setShowPreview] = useState(false);
  function saveDataBase() {
    Axios.post("http://localhost:3001/api/insert", {
      nameUser: defName,
      regUser: defReg,
      sectorUser: defSector,
      teamUser: defTeam,
    });
  }

  return (
    <>
      <ModalAdd
        showAdd={showAdd}
        setShowAdd={setShowAdd}
        defTerm={defTerm}
        setDefTerm={setDefTerm}
        defName={defName}
        defReg={defReg}
        defSector={defSector}
        defTeam={defTeam}
        defState={defState}
        defCity={defCity}
        defDate={defDate}
        setDefName={setDefName}
        setDefReg={setDefReg}
        setDefSector={setDefSector}
        setDefTeam={setDefTeam}
        setDefState={setDefState}
        setDefCity={setDefCity}
        setDefDate={setDefDate}
        defObs={defObs}
        getMark={getMark}
        getSn={getSn}
        getPatrim={getPatrim}
        setDefObs={setDefObs}
        setGetMark={setGetMark}
        setGetSn={setGetSn}
        setGetPatrim={setGetPatrim}
        defImei1={defImei1}
        defImei2={defImei2}
        defNumber={defNumber}
        setImei1={setImei1}
        setImei2={setImei2}
        setNumber={setNumber}
        defDDD={defDDD}
        setDDD={setDDD}
        defModel={defModel}
        setModel={setModel}
        saveDataBase={saveDataBase}
      />
      <ModalPreview
        defTerm={defTerm}
        defName={defName}
        defReg={defReg}
        defSector={defSector}
        defTeam={defTeam}
        defState={defState}
        defCity={defCity}
        defDate={defDate}
        defObs={defObs}
        getMark={getMark}
        getSn={getSn}
        getPatrim={getPatrim}
        defImei1={defImei1}
        defImei2={defImei2}
        defNumber={defNumber}
        defDDD={defDDD}
        defModel={defModel}
        showPreview={showPreview}
        setShowPreview={setShowPreview}
        saveDataBase={saveDataBase}
      />

      <ModalLogin
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        emailLogin={emailLogin}
        setEmailLogin={setEmailLogin}
        passwordLogin={passwordLogin}
        setPasswordLogin={setPasswordLogin}
        saveDataBase={saveDataBase}
        menu={menu}
        setMenu={setMenu}
      />

      <div className="text-center">
        <Button
          variant="success"
          style={{ background: "none", border: "white" }}
          onClick={() => setShowLogin(!showLogin)}
        >
          <span style={{ color: "black" }} className="material-icons">
            login
          </span>
        </Button>
        <Button
          variant="success"
          style={{ background: "none", border: "white" }}
          onClick={() => setShowAdd(!showAdd)}
        >
          <span style={{ color: "black" }} className="material-icons">
            bookmark_add
          </span>
        </Button>
        <Button
          variant="success"
          style={{ background: "none", border: "white" }}
          onClick={() => setShowPreview(!showPreview)}
        >
          <span style={{ color: "black" }} className="material-icons">
            preview
          </span>
        </Button>

        <Dropdown title="Geradores" variant="success" id="dropdown-basic">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Termos Disponiveis
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
      </div>
      <Container className="content"></Container>
    </>
  );
}
