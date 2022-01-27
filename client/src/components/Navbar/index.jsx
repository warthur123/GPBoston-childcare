import React from "react";
import { PageHeader } from "antd";
import ConstraintDrawer from "../Constraints/ConstraintDrawer"
import EventDrawer from "../Events/EventDrawer"

const Navbar = () => {
  return (
      <PageHeader
        ghost={false}
        title="GP Boston Childcare"
        subTitle="Schedule yo children"
        extra={[
          <ConstraintDrawer />,
          <EventDrawer />
        ]}
      />
  );
};

export default Navbar;
