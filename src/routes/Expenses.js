import {
  Card,
  Col,
  Container,
  Row,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { useEffect } from "react";
import { getAuthedUser } from "../ReqLib";
export default function Expensespage() {
  return (
    <div className="Expensespage">
      <Container style={{ height: "100vh" }}>
        <center>
          <ButtonGroup>
            <button className="doubleButton">EXPENSES</button>
            <button className="doubleButton" id="doubleButton2">
              Categories
            </button>
          </ButtonGroup>
        </center>

        <Container>
          <Row>
            <Col></Col>
            <Col xs={8}>
              <div className="containerExpenses">
                <center>
                  <button className="doubleButton" id="AddButton">
                    Add Expenses
                  </button>
                  <button className="doubleButton" id="EditButton">
                    Edit Expenses
                  </button>
                  <p></p>
                  <button className="doubleButton" id="ImportButton">
                    Edit Expenses
                  </button>
                </center>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
