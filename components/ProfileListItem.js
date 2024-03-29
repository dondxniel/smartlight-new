import React, { memo } from "react";
import { View, Text } from "native-base";
import { TouchableOpacity } from "react-native";

const ProfileListItem = ({ children, onPress, text }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginBottom: 15,
        backgroundColor: "#fafafa",
        padding: 18,
        borderRadius: 10,
        elevation: 8,
        shadowColor: "#888",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Text style={{ marginRight: 15 }}>{children}</Text>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(ProfileListItem);
