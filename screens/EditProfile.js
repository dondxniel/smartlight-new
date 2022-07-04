import React, { memo } from "react";
import { View } from "native-base";
import { useNavigation } from "@react-navigation/native";

//components
import EditProfileForm from "../components/EditProfileForm.js";
import StickyHeader from "../components/StickyHeader.js";

export default memo(function () {
  const navigation = useNavigation();
  return (
    <View>
      <StickyHeader headerTitle={"Edit Profile"} navigation={navigation} />
      <EditProfileForm />
    </View>
  );
});
