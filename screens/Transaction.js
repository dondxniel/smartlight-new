import React, { memo } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Image, ScrollView, Text, useDisclose } from "native-base";
import ParallaxScrollView from "react-native-parallax-scroll-view";

//icons

//components
import TransactionOverviewChart from "../components/TransactionOverviewChart";
import MeterInfo from "../components/MeterInfo";
import TransactionInfo from "../components/TransactionInfo";
import StickyHeader from "../components/StickyHeader";
import MeterLimitPrompt from "../components/MeterLimitPrompt";
import LimitErrorPrompt from "../components/LimitErrorPrompt";
import LimitSuccessPrompt from "../components/LimitSuccessPrompt";

//constants

//mocks
import { transactions } from "../mocks/";

export default memo(function () {
  const navigation = useNavigation();
  const { isOpen, onClose, onOpen } = useDisclose();
  const [openOnLimitSuccess, setOpenOnLimitSuccess] = React.useState(false);
  const [openOnLimitError, setOpenOnLimitError] = React.useState(false);

  const handleToggleLimitSuccess = React.useCallback(() =>
    setOpenOnLimitSuccess((val) => !val),
  );
  const handleToggleLimitError = React.useCallback(() =>
    setOpenOnLimitError((val) => !val),
  );

  const handleMeterLimitSubmit = React.useCallback(() => {
    if (true) {
      onClose();
      handleToggleLimitSuccess();
    } else {
      onClose();
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
      {/* meter card component */}
      <ScrollView bounces py={2} px={4}>
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
          onPress={onOpen}
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
          isOpen={isOpen}
          onClose={onClose}
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

        {/* ------- chart overview ------- */}
        <TransactionOverviewChart />
        <Text fontWeight={"semibold"} my={2}>
          Recent Transactions
        </Text>
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
});
