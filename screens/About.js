import React, { memo } from "react";
import { Text, View, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";

//components
import StickyHeader from "../components/StickyHeader";
import nbStyles from "../style/nb-styles";

export default memo(function () {
  const navigation = useNavigation();
  return (
    <View>
      <StickyHeader navigation={navigation} headerTitle="About" />
      <ScrollView {...nbStyles.aboutTextChunkContainer}>
        <Text {...nbStyles.aboutTextChunk}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem nam
          asperiores molestias necessitatibus veniam eaque consectetur itaque
          incidunt voluptate, beatae quia nobis ducimus numquam illo odit?
          Explicabo quos beatae cum. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Dolorem nam asperiores molestias necessitatibus
          veniam eaque consectetur itaque incidunt voluptate, beatae quia nobis
          ducimus numquam illo odit? Explicabo quos beatae cum.
        </Text>
        <Text {...nbStyles.aboutTextChunk}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem nam
          asperiores molestias necessitatibus veniam eaque consectetur itaque
          incidunt voluptate, beatae quia nobis ducimus numquam illo odit?
          Explicabo quos beatae cum. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Dolorem nam asperiores molestias necessitatibus
          veniam eaque consectetur itaque incidunt voluptate, beatae quia nobis
          ducimus numquam illo odit? Explicabo quos beatae cum.
        </Text>
        <Text {...nbStyles.aboutTextChunk}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem nam
          asperiores molestias necessitatibus veniam eaque consectetur itaque
          incidunt voluptate, beatae quia nobis ducimus numquam illo odit?
          Explicabo quos beatae cum. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Dolorem nam asperiores molestias necessitatibus
          veniam eaque consectetur itaque incidunt voluptate, beatae quia nobis
          ducimus numquam illo odit? Explicabo quos beatae cum.
        </Text>
      </ScrollView>
    </View>
  );
});
