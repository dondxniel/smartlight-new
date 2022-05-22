import React from "react";
import { ScrollView } from "react-native";
import { Text, HStack, Box, Image, Button } from "native-base";
import { LineChart } from "react-native-chart-kit";
//constants
import { height, width } from "../constants/dims";

//icons
import DashboardLineChartHeader from "../components/DashboardLineChartHeader";
import { useNavigation } from "@react-navigation/native";
import MeterInfo from "../components/MeterInfo";
import AddMeterButton from "../components/AddMeterButton";

//mocks
import { linedata } from "../mocks/";
import AddMeterPrompt from "../components/AddMeterPrompt";

export default function () {
  const navigation = useNavigation();
  const [focusedVal, setFocusVal] = React.useState(0);
  const [openAddMeter, setOpenAddMeter] = React.useState(false);

  const handleToggleAddMeter = React.useCallback(
    () => setOpenAddMeter((val) => !val),
    [],
  );

  const handleFocusPoint = React.useCallback((val) => {
    setFocusVal(val.value.toFixed(2));
  }, []);

  return (
    <ScrollView
      bounces
      contentContainerStyle={{
        paddingVertical: 10,
        paddingHorizontal: 15,
      }}
    >
      <HStack space={"sm"} my={2}>
        <Text fontSize={"2xl"} letterSpacing={0.81}>
          Welcome,
        </Text>
        <Text fontWeight={"black"} fontSize={"2xl"} letterSpacing={0.81}>
          Abijah
        </Text>
      </HStack>
      <HStack my={2} space={"lg"}>
        <MeterInfo
          onPress={() => navigation.navigate("meter-info")}
          key={"metercard"}
          avatar={
            <Image alt={"avatar"} source={require("../assets/avatar.png")} />
          }
          meterName={"Chinebere Emmanuel"}
          meterValue={"245.54"}
          meterNo={"37144433351"}
          meterInfo={"U/Sunday Kaduna"}
        />

        <AddMeterButton onPress={handleToggleAddMeter} />
      </HStack>
      <Box my={2} rounded={"2xl"} background={"white"}>
        <DashboardLineChartHeader
          key={"linechart header"}
          focusValue={focusedVal}
        />
        <LineChart
          bezier
          transparent
          fromZero
          withShadow={false}
          withVerticalLines={false}
          height={300}
          segments={5}
          xLabelsOffset={10}
          data={linedata}
          width={width - 50}
          onDataPointClick={handleFocusPoint}
          chartConfig={{
            strokeWidth: 4,
            color: () => `#4a60ddaa`,
            backgroundGradientFrom: "#5d6594aa",
            backgroundGradientTo: "#626db3",
            labelColor: () => `#181818`,
            style: {
              borderRadius: 16,
            },
          }}
        />
      </Box>
      <Button
        disabled={true}
        _disabled={{
          opacity: 0.5,
        }}
        p={4}
        bgColor={"blue.200"}
        rounded={"2xl"}
      >
        <HStack alignItems={"center"}>
          <Text fontWeight={"semibold"} fontSize={"md"} color={"white"}>
            Borrow Unit{" "}
          </Text>
          <Text color={"white"}>Coming soon</Text>
        </HStack>
      </Button>
      <AddMeterPrompt
        size={"xl"}
        isOpen={openAddMeter}
        onClose={handleToggleAddMeter}
      />
    </ScrollView>
  );
}
