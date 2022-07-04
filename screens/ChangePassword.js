import React, { memo } from "react";
import { View } from "native-base";
import { useNavigation } from "@react-navigation/native";

//components
import ChangePasswordForm from "../components/ChangePasswordForm.js";
import StickyHeader from "../components/StickyHeader.js";

export default memo(function () {
  const navigation = useNavigation();
  return (
    <View>
      <StickyHeader headerTitle={"Change Password"} navigation={navigation} />
      <ChangePasswordForm />
    </View>
  );
});
