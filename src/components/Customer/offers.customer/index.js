import React from "react";
import { Col, Row } from "antd";
import "./style.css";
function CustomerOffers() {
  const OFFERS = [
    { code: "BAZA R11", color: "red" },
    { code: "BAZA R12", color: "green" },
    { code: "BAZA R13", color: "blue" },
    { code: "BAZA R14", color: "orange" },
    { code: "BAZA R15", color: "purple" },
    { code: "BAZA R16", color: "brown" },
    { code: "BAZA R17", color: "cyan" },
    { code: "BAZA R18", color: "magenta" },
    { code: "BAZA R19", color: "yellow" },
  ];
  return (
    <div>
      <Row className="cus-offer-con">
        {OFFERS.map((index) => (
          <Col
            span={6}
            key={index}
            className="offer-item"
            style={{ background: index?.color }}
          >
            <div className="dote">
              <p>{index?.code}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CustomerOffers;
