import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Box, Button, Heading, Image, ScrollView, Text } from "native-base";
import { LineChart } from "react-native-chart-kit";
import ParallaxScrollView from "react-native-parallax-scroll-view";

import MeterInfo from "../components/MeterInfo";
import TransactionInfo from "../components/TransactionInfo";
import DashboardLineChartHeader from "../components/DashboardLineChartHeader";

//constants
import { width } from "../constants/dims";

//mocks
import { linedata, transactions } from "../mocks/";
import MeterLimitPrompt from "../components/MeterLimitPrompt";
import LimitErrorPrompt from "../components/LimitErrorPrompt";
import LimitSuccessPrompt from "../components/LimitSuccessPrompt";
import StickyHeader from "../components/StickyHeader";

export default function () {
  const navigation = useNavigation();

  const [focusedVal, setFocusVal] = React.useState(0);
  const [openLimitComp, setOpenLimitComponent] = React.useState(false);
  const [openOnLimitSuccess, setOpenOnLimitSuccess] = React.useState(false);
  const [openOnLimitError, setOpenOnLimitError] = React.useState(false);

  const handleFocusPoint = React.useCallback((val) => {
    setFocusVal(val.value.toFixed(2));
  }, []);

  const handleToggleLimitComp = React.useCallback(
    () => setOpenLimitComponent((val) => !val),
    [],
  );
  const handleToggleLimitSuccess = React.useCallback(() =>
    setOpenOnLimitSuccess((val) => !val),
  );
  const handleToggleLimitError = React.useCallback(() =>
    setOpenOnLimitError((val) => !val),
  );

  const handleMeterLimitSubmit = React.useCallback(() => {
    if (true) {
      setOpenLimitComponent(false);
      handleToggleLimitSuccess();
    } else {
      setOpenLimitComponent(false);
      handleToggleLimitError();
    }
  }, []);

  return (
    <ParallaxScrollView
      key={"stickyscroll"}
      contentBackgroundColor="transparent"
      backgroundColor="transparent"
      parallaxHeaderHeight={65}
      renderFixedHeader={() => <StickyHeader navigation={navigation} />}
    >
      <ScrollView px={4} py={2} bounces>
        {/* meter card component */}

        <MeterInfo
          avatar={
            <Image
              alt={"meter info"}
              source={require("../assets/avatar.png")}
            />
          }
          horizontal
          meterName={"Chinebere Emmanuel"}
          meterValue={"245.54"}
          meterNo={"37144433351"}
          meterInfo={"U/Sunday Kaduna"}
        />

        {/* set limits */}

        <Button
          onPress={handleToggleLimitComp}
          my={4}
          p={4}
          rounded={"2xl"}
          bgColor={"primary.100"}
        >
          <Text fontSize={"lg"} fontWeight="semibold" color={"#fff"}>
            Set limit
          </Text>
        </Button>

        <MeterLimitPrompt
          onSetLimit={handleMeterLimitSubmit}
          size={"xl"}
          isOpen={openLimitComp}
          onClose={handleToggleLimitComp}
        />
        <LimitErrorPrompt
          isOpen={openOnLimitError}
          onClose={handleToggleLimitError}
          btnAction={handleToggleLimitError}
          size="sm"
        />
        <LimitSuccessPrompt
          isOpen={openOnLimitSuccess}
          onClose={handleToggleLimitSuccess}
          btnAction={handleToggleLimitSuccess}
          sixe="sm"
        />

        {/* ------- linechart ------- */}

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
        <Heading my={2}>Recent Transactions</Heading>
        {transactions.map(({ meterInfo, amount, id }) => (
          <TransactionInfo
            avatar={
              <Image
                alt="meter icon"
                source={require("../assets/avatar.png")}
              />
            }
            key={id}
            meterName={meterInfo.name}
            meterNo={meterInfo.no}
            value={amount}
          />
        ))}
      </ScrollView>
    </ParallaxScrollView>
  );
}
