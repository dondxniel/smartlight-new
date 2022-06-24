import React, { memo } from "react";
import { View, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import nbStyles from "../style/nb-styles";

const OAuthLinks = () => {
  return (
    <View>
      <Text>Or continue with</Text>
      <View {...nbStyles.oauthContainer}>
        <TouchableOpacity {...nbStyles.oauthLink}>
          <Icon name="google" size={30} color={"#E0453A"} />
        </TouchableOpacity>

        <TouchableOpacity {...nbStyles.oauthLink}>
          <Icon name="apple" size={30} color={"#000"} />
        </TouchableOpacity>

        <TouchableOpacity {...nbStyles.oauthLink}>
          <Icon name="facebook-square" size={30} color={"#1977F0"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(OAuthLinks);
