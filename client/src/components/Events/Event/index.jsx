import React from "react";
import { PageHeader, Descriptions } from "antd";

const Event = ({ start, end, adults, kids, location }) => {
  var time = `${start}-${end}`;
  if (start == end || typeof end === "undefined") time = start;

  return (
    <PageHeader ghost={false} title={time} subTitle={location}>
      <Descriptions size="small" column={3}>
        <Descriptions.Item label="Adults">{adults}</Descriptions.Item>
      </Descriptions>
      <Descriptions>
        <Descriptions.Item label="Kids">{kids}</Descriptions.Item>
      </Descriptions>
    </PageHeader>
  );
};

export default Event;
