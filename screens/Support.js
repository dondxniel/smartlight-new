import React, { memo } from "react";
import { View } from "native-base";
import { useNavigation } from "@react-navigation/native";

//components
import SupportForm from "../components/SupportForm";
import StickyHeader from "../components/StickyHeader";

export default memo(function () {
  const navigation = useNavigation();
  return (
    <View>
      <StickyHeader headerTitle={"Support"} navigation={navigation} />
      <SupportForm />
    </View>
  );
});
