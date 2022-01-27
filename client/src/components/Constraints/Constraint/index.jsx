import React from "react";
import { PageHeader, Descriptions } from "antd";

const Constraint = ({ start, end, group, reason}) => {
  var time = `${start}-${end}`
  if (start == end || typeof end === 'undefined') time = start
  return (
    <PageHeader ghost={false} title={time} subTitle={reason}>
      <Descriptions size="small" column={3}>
        <Descriptions.Item>{group}</Descriptions.Item>
      </Descriptions>
    </PageHeader>
  );
};

export default Constraint;
