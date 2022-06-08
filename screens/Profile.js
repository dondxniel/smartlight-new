import React from "react";
import { Heading, View, Text, Button } from "native-base";
import nbStyles from "../style/nb-styles";

export default function () {
  return (
    <View>
      <View {...nbStyles.profileHeader}>
        <View {...nbStyles.profileHeaderChild}>
          <Heading>Profile</Heading>
        </View>
        <View {...nbStyles.logoutBtnC}>
          <Button {...nbStyles.logoutBtn}>Logout</Button>
        </View>
      </View>
    </View>
  );
}
