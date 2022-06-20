import React from "react";
import {
  Button,
  Input,
  Actionsheet,
  Select,
  Text,
  Heading,
  ScrollView,
} from "native-base";
import { width } from "../constants/dims";

const ActionsheetComp = (props) => {
  const [meterLimit, setMeterLimit] = React.useState("");
  const [meterAction, setMeterAction] = React.useState("");
  const handleMeterLimit = React.useCallback((val) => setMeterLimit(val), []);
  const handleMeterAction = React.useCallback((val) => setMeterAction(val), []);

  return (
    <Actionsheet {...props}>
      <Actionsheet.Content width={width}>
        <Actionsheet.Item __pressed={{ backgroundColor: "transparent" }}>
          <Heading>Set Meter Limit</Heading>
        </Actionsheet.Item>
        <Actionsheet.Item __pressed={{ backgroundColor: "transparent" }}>
          <ScrollView width={width - 50}>
            <Text my={1}>Limit Timeframe</Text>
            <Select
              my={1}
              p={3}
              size={"lg"}
              borderWidth={0}
              backgroundColor={"#f3f3f3"}
              placeholder="limit time-frame"
              defaultValue={meterLimit}
              onValueChange={handleMeterLimit}
              rounded={"full"}
            >
              <Select.Item value="day" label="Daily" />
              <Select.Item value="wk" label="Weekly" />
              <Select.Item value="mth" label="Monthly" />
            </Select>
            <Text my={1}>Power limit</Text>
            <Input
              my={1}
              p={3}
              backgroundColor={"#f3f3f3"}
              borderWidth={0}
              rounded={"full"}
              keyboardType="number-pad"
              placeholder="0.00"
              size={"lg"}
              _input={{
                fontWeight: "semibold",
              }}
              _focus={{
                opacity: 0.8,
                borderColor: "blue.200",
                borderWidth: 1,
              }}
              InputRightElement={
                <Text mt={4} mr={1} p={1} color={"#fff"} fontSize={"md"}>
                  <Button rounded={"2xl"}>kwh</Button>
                </Text>
              }
            />
            <Text my={1}>Action</Text>
            <Select
              my={1}
              p={3}
              size={"lg"}
              borderWidth={0}
              backgroundColor={"#f3f3f3"}
              placeholder="Set action"
              defaultValue={meterAction}
              onValueChange={handleMeterAction}
              rounded={"full"}
            >
              <Select.Item value="dnd" label="Do nothing" />
              <Select.Item value="disable" label="Disable meter" />
              <Select.Item value="notify" label="Notify me" />
            </Select>
            <Button
              onPress={props.onSetLimit}
              padding={4}
              rounded={"2xl"}
              size={"lg"}
            >
              Add Meter
            </Button>
          </ScrollView>
        </Actionsheet.Item>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

const MeterLimitPrompt = React.memo(ActionsheetComp);
export default MeterLimitPrompt;
