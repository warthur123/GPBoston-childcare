import React from "react";
import { Row, Col } from "antd";
import Constraint from "../Constraint";

const Upcoming = () => {

  return (
    <>
      <h3>Constraints</h3>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} sm={12} lg={8}>
          <Constraint
            start="Today"
            end="Tomorrow"
            group="Harvard"
            reason="Going to NYC"
          />
        </Col>
        <Col className="gutter-row" xs={24} sm={12} lg={8}>
          <Constraint
            start="Today"
            group="Alex Miller"
            reason="Noro"
          />
        </Col>
      </Row>
    </>
  );
};

export default Upcoming;
