import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { Card, InputField } from "../../component/atomic";
import {
  BsFillPiggyBankFill,
  BsFillFlagFill,
  BsFillGearFill,
  BsLightningFill,
  BsCalendar2Week,
  BsCalendar2Range,
  BsPlusCircleFill,
  BsXCircleFill,
  BsHandThumbsUp,
  BsHandThumbsDown,
} from "react-icons/bs";
import { Doughnut } from "react-chartjs-2";
import {
  FcSportsMode,
  FcSalesPerformance,
  FcAutomotive,
  FcBullish,
} from "react-icons/fc";

const mock = [
  {
    id: 1,
    label: "Cash",
  },
  {
    id: 2,
    label: "Set",
  },
  {
    id: 3,
    label: "Crypto",
  },
  {
    id: 1,
    label: "Cash",
  },
  {
    id: 2,
    label: "Set",
  },
  {
    id: 3,
    label: "Crypto",
  },
  {
    id: 1,
    label: "Cash",
  },
  {
    id: 2,
    label: "Set",
  },
  {
    id: 3,
    label: "Crypto",
  },
];

const data = {
  maintainAspectRatio: false,
  responsive: false,
  labels: ["a", "b", "c", "d"],
  datasets: [
    {
      data: [300, 50, 100, 50],
    },
  ],
};

function Dashboard() {
  return (
    <Container>
      <Row>
        <Col sm={6}>
          <h1 className="fw-bold mb-4">
            SAVE <span className="text-warning"> MONEY </span>
          </h1>
          <h1 className="fw-bold mb-4">FOR YOURSELF IN THE FUTURE</h1>
        </Col>
        <Col sm={6}>
          <Card background="edit" color="default">
            <h5 className="text-end m-0 p-0">
              <button className="bg-transparent border-0 text-white">
                <BsFillGearFill></BsFillGearFill>
              </button>
            </h5>
            <Row>
              <Col>
                <h3>
                  Total Asset <BsFillPiggyBankFill></BsFillPiggyBankFill>
                </h3>
                <h4>100,000 Bath</h4>
              </Col>
              <Col>
                <h3>
                  Freedom <BsFillFlagFill></BsFillFlagFill>
                </h3>
                <h4>20,000,000 Bath</h4>
              </Col>
            </Row>
            <br></br>
            <h6 className="text-end">
              Remaining <span>5,000,000 Bath</span>
              <BsLightningFill></BsLightningFill>
            </h6>
            <ProgressBar striped variant="success" now={60} />
          </Card>
        </Col>
      </Row>
      <br />

      <Row>
        <Col md={6}>
          <h5>
            <BsCalendar2Week></BsCalendar2Week>
            <span className="p-2">Monthly Asset</span>
            <span>
              <button className="bg-transparent border-0">
                <BsFillGearFill></BsFillGearFill>
              </button>
            </span>
          </h5>
          <br />
          <Card>
            <Row>
              {mock.map(({ id, label }) => (
                <>
                  <Col xs={4}>
                    <h5 className="text-center">{label}</h5>
                  </Col>
                  <Col xs={6}>
                    <InputField className="text-center mb-2"></InputField>
                  </Col>
                  <Col xs={2}>
                    <h5>
                      <button className="bg-transparent border-0 text-danger">
                        <BsXCircleFill></BsXCircleFill>
                      </button>
                    </h5>
                  </Col>
                </>
              ))}
            </Row>
            <div className="text-center">
              <hr />
              <button className="bg-transparent border-0">
                <h2>
                  <BsPlusCircleFill></BsPlusCircleFill>
                </h2>
              </button>
            </div>
          </Card>
        </Col>
        <Col md={6}>
          <h5>
            <BsCalendar2Range></BsCalendar2Range>
            <span className="p-2">Monthly Estimate</span>
            <span>
              <button className="bg-transparent border-0">
                <BsFillGearFill></BsFillGearFill>
              </button>
            </span>
          </h5>
          <br />
          <Card>
            <div className="d-flex">
              <div>
                <h5 className="text-muted">Average Target per month</h5>
                <h5 className="text-primary">300,000</h5>
                <br />
                <h5 className="text-muted">Present</h5>
                <h5 className="text-warning">152,000</h5>
                <br />
                <h5 className="text-muted">Other</h5>
                <h5>50,000</h5>
              </div>
              <div>
                <Doughnut data={data}></Doughnut>
              </div>
            </div>
          </Card>
          <br />
          <div className="d-flex justify-content-around mb-4">
            <div
              className="flex-grow-1 text-center border-bottom border-3"
              style={{ cursor: "pointer" }}
            >
              <h5>
                <BsHandThumbsUp></BsHandThumbsUp> Income
              </h5>
            </div>
            <div
              className="flex-grow-1 text-center"
              style={{ cursor: "pointer" }}
            >
              <h5>
                <BsHandThumbsDown></BsHandThumbsDown> Outcome
              </h5>
            </div>
          </div>
          <div className="d-flex justify-content-around mb-2">
            <Card
              className="d-flex justify-content-center"
              style={{ height: "75px", width: "75px" }}
            >
              <h2>
                <FcSalesPerformance></FcSalesPerformance>
              </h2>
            </Card>
            <div>
              <h5>Food</h5>
              <h6>ของกินทั่วไป</h6>
            </div>
            <h5>9,000</h5>
          </div>
          <div className="d-flex justify-content-around mb-2">
            <Card
              className="d-flex justify-content-center"
              style={{ height: "75px", width: "75px" }}
            >
              <h2>
                <FcSportsMode></FcSportsMode>
              </h2>
            </Card>
            <div>
              <h5>Transport</h5>
              <h6>ของกินทั่วไป</h6>
            </div>
            <h5>9,000</h5>
          </div>
          <div className="d-flex justify-content-around mb-2">
            <Card
              className="d-flex justify-content-center"
              style={{ height: "75px", width: "75px" }}
            >
              <h2>
                <FcAutomotive></FcAutomotive>
              </h2>
            </Card>
            <div>
              <h5>Daily</h5>
              <h6>ของกินทั่วไป</h6>
            </div>
            <h5>9,000</h5>
          </div>
        </Col>
      </Row>
      <br></br>

      <h5>
        <BsCalendar2Range></BsCalendar2Range>
        <span className="p-2">Yearly Target</span>
        <span>
          <button className="bg-transparent border-0">
            <BsFillGearFill></BsFillGearFill>
          </button>
        </span>
      </h5>

      <br />
      <Card>
        <h5 className="text-end mb-4">
          <button className="bg-transparent border-0 text-white">
            <BsFillGearFill></BsFillGearFill>
          </button>
        </h5>
        <Row>
          {[
            2560, 2561, 2562, 2563, 2564, 2565, 2566, 2567, 2568, 2569, 2570,
            2571,
          ].map((num) => (
            <>
              <Col xs={3}>
                <h5 className="text-center">{num}</h5>
              </Col>
              <Col xs={3} className="mb-4">
                <h5 className="text-center">15,200 / 3,000,000</h5>
                <ProgressBar variant="success" now={60} />
              </Col>
            </>
          ))}
        </Row>
      </Card>
    </Container>
  );
}

export default Dashboard;
