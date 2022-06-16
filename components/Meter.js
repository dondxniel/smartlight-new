import React from "react";

import { Avatar, Card, Heading, Text } from "native-base";

function Meter({ name, address, meter_no }) {
  return (
    <Card>
      <Avatar></Avatar>
      <Heading>{name}</Heading>
      <Text>{address}</Text>
      <Heading>{meter_no}</Heading>
    </Card>
  );
}

export default Meter;
