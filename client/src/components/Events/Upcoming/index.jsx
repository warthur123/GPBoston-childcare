import React from "react";
import { Row, Col } from "antd";
import Event from "../Event";

const Upcoming = () => {

  return (
    <>
      <h3>Upcoming Events</h3>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" xs={24} sm={12} lg={8}>
          <Event
            start="Today"
            end="Soon"
            adults={["Alex", "Arthur"]}
            kids={["Asher", "Jeremiah"]}
            location="222 Freeman"
          />
        </Col>
        <Col className="gutter-row" xs={24} sm={12} lg={8}>
          <Event
            start="Tomorrow"
            end="Soon"
            adults={["Alex", "Arthur"]}
            kids={["Asher", "Jeremiah"]}
            location="222 Freeman"
          />
        </Col>
        <Col className="gutter-row" xs={24} sm={12} lg={8}>
          <Event
            start="Tomorrow Tomorrow"
            end="Soon"
            adults={["Alex", "Arthur"]}
            kids={["Asher", "Jeremiah"]}
            location="222 Freeman"
          />
        </Col>
      </Row>
    </>
  );
};

export default Upcoming;
