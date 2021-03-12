import React, { useState, useContext, useEffect } from "react";
import { Form, Table, FormGroup, FormControl, Col, Row } from "react-bootstrap";
import LogoSirtec from "../../Assets/LogoSirtec.png";
import moment from "moment";
import "./Styles/TermGen.css";

export default function TermNotebook(props) {
  const {
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
    defModel,
  } = props;
  return (
    <>
      <div style={{ width: "768px" }}>
        <div className="Header">
          <img className="LogoSirtec" src={LogoSirtec} />
          <p className="text-center DescLogo1">Gestão de Pessoas</p>
          <p className="text-center DescLogo2">
            Termo de Responsabilidade Para Uso de Notebook
          </p>
          <p className="text-center">
            Através da assinatura deste documento, declaro para os devidos fins
            que recebi o equipamento descrito abaixo, em perfeita condição de
            uso e de estado de conservação, e me comprometo a seguir as normas
            descritas abaixo, a partir da desta data.
          </p>
          <hr />
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th width="25%">Marca</th>
                <th width="25%">Modelo</th>
                <th width="25%">Numero Serial</th>
                <th width="25%">Placa de Patrimonio</th>
              </tr>
            </thead>
            <tr>
              <td width="25%">{getMark}</td>
              <td width="25%">{defModel}</td>
              <td width="25%">{getSn}</td>
              <td width="25%">{getPatrim}</td>
            </tr>
            <tbody></tbody>
          </Table>
          <hr />
          <Form.Row>
            <FormGroup as={Col} md="9">
              <FormControl
                type="text"
                placeholder="Nome Completo"
                disabled
                value={defName}
              />
            </FormGroup>
            <FormGroup as={Col} md="3">
              <FormControl
                type="text"
                placeholder="Matricula"
                value={defReg}
                disabled
              />
            </FormGroup>
          </Form.Row>
          <Form.Row>
            <FormGroup as={Col} md="9">
              <FormControl
                type="text"
                placeholder="Setor"
                value={defSector}
                disabled
              />
            </FormGroup>
            <FormGroup as={Col} md="3">
              <FormControl
                type="text"
                placeholder="Equipe"
                value={defTeam}
                disabled
              />
            </FormGroup>
          </Form.Row>

          <Form.Row>
            <FormGroup as={Col} md="12">
              <FormControl
                type="text"
                placeholder="Observações :"
                disabled
                value={defObs}
              />
            </FormGroup>
          </Form.Row>
        </div>
        <hr />
        <div className="Body">
          <p className="Paragrafo text-justify">
            <b>1. </b>O referido equipamento é de uso exclusivo em serviço,
            ficando assim o USUÁRIO ou qualquer outra pessoa desautorizada a
            utilizá-lo para outros fins que não sejam exclusivamente em serviço,
            sendo totalmente proibida a realização particular. Em caso do
            descumprimento desta norma o declarante poderá sofrer as sanções
            administrativas da empresa;
          </p>
          <p className="Paragrafo text-justify">
            <b>2. </b>É de responsabilidade exclusiva do USUÁRIO a restituição
            do equipamento em caso de extravio, e/ou a reparação do mesmo por
            qualquer dano que este venha a sofrer, devendo o declarante arcar
            com todas as despesas de reparo, substituição e reposição, podendo
            ser descontado na folha de pagamento, conforme o artigo 462 § 1° da
            CLT;
          </p>
          <p className="Paragrafo text-justify">
            <b>3. </b>O USUÁRIO deverá observar a Política de Segurança da
            Informação da Sirtec Sistemas Elétricos (disponível em
            sirtec.com.br/psi). Fica o declarante ciente que em caso de
            descumprimento desta norma poderá sofrer as sanções administrativas
            da empresa;
          </p>
          <p className="Paragrafo text-justify">
            <b>4. </b>O USUÁRIO tem somente a DETENÇÃO, tendo em vista o uso
            exclusivo para prestação de serviços profissionais e NÃO a
            PROPRIEDADE do equipamento, sendo terminantemente proibido o
            empréstimo, aluguel ou cessão deste a terceiros;
          </p>
          <p className="Paragrafo text-justify">
            <b>5. </b>Ao término da prestação de serviço ou do contrato
            individual de trabalho, o USUÁRIO compromete-se a devolver o
            equipamento em perfeito estado o mesmo dia em que for comunicado ou
            comunique seu desligamento, considerando o desgaste natural pelo uso
            normal do equipamento;
          </p>
          <p className="Paragrafo text-justify">
            <b>6. </b>Declaro estar ciente e de acordo com as cláusulas acima.
          </p>
        </div>
        <hr />
        <div className="Footer">
          <p className="text-center Footer">
            _____________________________________________
          </p>
          <p className="text-center">Assinatura do Usuário</p>
          <Form.Row>
            <FormGroup as={Col} md="4">
              <FormControl
                type="text"
                placeholder="Cidade"
                value={defCity}
                disabled
              />
            </FormGroup>
            <FormGroup as={Col} md="2">
              <FormControl
                type="text"
                placeholder="Estado"
                value={defState}
                disabled
              />
            </FormGroup>
            <FormGroup as={Col} md="6">
              <FormControl
                type="text"
                placeholder="DD/MM/YY"
                value={moment(defDate).format("LLL")}
                disabled
              />
            </FormGroup>
          </Form.Row>
        </div>
      </div>
    </>
  );
}
