import React from "react";
import { Avatar, Box, Heading, HStack, Text, VStack } from "native-base";

const Transaction = ({ avatar, meterName, meterNo, value }) => {
  return (
    <Box backgroundColor={"#fff"} p={2} my={2} rounded={"2xl"}>
      <HStack space={"md"} alignItems={"center"}>
        {avatar && (
          <Avatar bgColor={"#ffffff"} shadow={2}>
            {avatar}
          </Avatar>
        )}
        <VStack>
          <Text>{meterName}</Text>
          <Text fontWeight={"bold"}>{meterNo}</Text>
        </VStack>
        <Heading> ₦{value}</Heading>
      </HStack>
    </Box>
  );
};

const TransactionInfo = React.memo(Transaction);

export default TransactionInfo;
