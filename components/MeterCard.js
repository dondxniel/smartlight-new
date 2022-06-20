import React from "react";

import { Avatar, Box, Heading, HStack,  Stack, Text } from "native-base";
import MeterAvatarIcon from "../assets/meter-avatar.svg";

export const MeterCard = ({ AddMeterComponent, name, address, meter_no }) => {
  return (
    <Stack flexDir={'row'}>
      <Box
        flexDirection={"column"}
        justifyContent={"space-around"}
        p={4}
        width={237}
        height={164}
        rounded={"2xl"}
        bg={"#5961E0"}
        mr={4}
        shadow={4}
        opacity={0.8}
      >
        <HStack justifyContent={"space-between"}>
          <Avatar width={28} height={28} bg={"#fff"}>
            <MeterAvatarIcon width={24} height={24} />
          </Avatar>
          <Box
            style={{ width: 28, height: 28 }}
            borderWidth={3}
            borderColor={"white"}
            rounded="full"
          />
        </HStack>
        <Box>
          <Heading color={"white"} size={"md"} fontWeight={700}>
            {name}
          </Heading>
          <Text color={"white"} fontWeight={300}>
            {address}
          </Text>
        </Box>
        <Heading color={"white"} size={"xl"} fontWeight={500}>
          {meter_no}
        </Heading>
      </Box>
      {AddMeterComponent && AddMeterComponent}
    </Stack>
  );
};
