import React from "react";
import { HStack, Select, Text } from "native-base";

//custom hooks
import useUTCDate from "../hooks/date.hook";

const ChartLineHeader = ({ focusValue }) => {
  const [timeFrame, setTimeFrame] = React.useState("");
  const { day, date } = useUTCDate();
  return (
    <HStack
      p={2}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      space={"lg"}
    >
      <Text color={"#8388A5"} fontSize={"md"}>
        {date} {day.slice(0, 3)}
      </Text>
      <Text fontSize={"md"} fontWeight={"semibold"}>
        {focusValue} kwh
      </Text>
      <Select
        fontSize={"md"}
        fontWeight={"semibold"}
        borderWidth={0}
        selectedValue={timeFrame}
        minWidth="1/3"
        placeholder="Range"
        _selectedItem={{
          bg: "white",
        }}
        onValueChange={(itemValue) => setTimeFrame(itemValue)}
      >
        <Select.Item label="All" value="all" />
        <Select.Item label="Daily" value="day" />
        <Select.Item label="Weekly" value="wk" />
        <Select.Item label="Monthly" value="mth" />
        <Select.Item label="Yearly" value="yr" />
      </Select>
    </HStack>
  );
};

const DashboardLineChartHeader = React.memo(ChartLineHeader);
export default DashboardLineChartHeader;
