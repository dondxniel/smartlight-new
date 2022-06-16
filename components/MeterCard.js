import React from "react";

import { Avatar, Card, Heading, Image, Text } from "native-base";
import MeterAvatarIcon from "../assets/meter-avatar.svg";

export const MeterCard = ({ name, address, meter_no }) => {
  return (
    <Card>
      <Avatar bg={"#fff"}>
        <Image alt="avatar" source={require("../assets/avatar.png")} />
      </Avatar>
      <Heading>{name}</Heading>
      <Text>{address}</Text>
      <Heading>{meter_no}</Heading>
    </Card>
  );
};
