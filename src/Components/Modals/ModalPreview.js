import React from "react";
import Pdf from "react-to-pdf";
import TermCams from "../Term/TermCam";
import TermNotebook from "../Term/TermNotebook";
import TermPhone from "../Term/TermPhone";
import TermDesktop from "../Term/TermDesktop";
import TermGen from "../Term/TermGen";
import { Button, Modal } from "react-bootstrap";

export default function ModalPreview(props) {
  const {
    defTerm,
    defObs,
    defName,
    defReg,
    defSector,
    defTeam,
    defState,
    defCity,
    defDate,
    getMark,
    getSn,
    getPatrim,
    defImei1,
    defImei2,
    defNumber,
    defDDD,
    defModel,
    showPreview,
    setShowPreview,
  } = props;
  const ref = React.createRef();
  function HandleClose() {
    setShowPreview(false);
  }

  return (
    <>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        show={showPreview}
        onHide={HandleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Gerar um Novo Termo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Pdf targetRef={ref} filename={defReg + "-" + defTerm + ".pdf"}>
            {({ toPdf }) => (
              <Button
                style={{ background: "none", border: "white" }}
                variant="success"
                onClick={toPdf}
              >
                <span style={{ color: "black" }} className="material-icons">
                  picture_as_pdf
                </span>
              </Button>
            )}
          </Pdf>
          <div className="Conteudo" ref={ref}>
            {defTerm == "TermoCameras" ? (
              <TermCams
                defName={defName}
                defReg={defReg}
                defSector={defSector}
                defTeam={defTeam}
                defState={defState}
                defCity={defCity}
                defDate={defDate}
                getMark={getMark}
                getSn={getSn}
                getPatrim={getPatrim}
                defObs={defObs}
                defModel={defModel}
              />
            ) : defTerm == "TermoNotebooks" ? (
              <TermNotebook
                defName={defName}
                defReg={defReg}
                defSector={defSector}
                defTeam={defTeam}
                defState={defState}
                defCity={defCity}
                defDate={defDate}
                getMark={getMark}
                getSn={getSn}
                getPatrim={getPatrim}
                defObs={defObs}
                defModel={defModel}
              />
            ) : defTerm == "TermoCelulares" ? (
              <TermPhone
                defName={defName}
                defReg={defReg}
                defSector={defSector}
                defTeam={defTeam}
                defState={defState}
                defCity={defCity}
                defDate={defDate}
                getMark={getMark}
                defModel={defModel}
                getSn={getSn}
                getPatrim={getPatrim}
                defObs={defObs}
                defImei1={defImei1}
                defImei2={defImei2}
                defDDD={defDDD}
                defNumber={defNumber}
              />
            ) : defTerm == "TermoDesktops" ? (
              <TermDesktop
                defName={defName}
                defReg={defReg}
                defSector={defSector}
                defTeam={defTeam}
                defState={defState}
                defCity={defCity}
                defDate={defDate}
                getMark={getMark}
                getSn={getSn}
                getPatrim={getPatrim}
                defObs={defObs}
                defModel={defModel}
              />
            ) : (
              <TermGen
                defName={defName}
                defReg={defReg}
                defSector={defSector}
                defTeam={defTeam}
                defState={defState}
                defCity={defCity}
                defDate={defDate}
                getMark={getMark}
                getSn={getSn}
                getPatrim={getPatrim}
                defObs={defObs}
                defModel={defModel}
              />
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
