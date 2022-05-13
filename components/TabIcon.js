import React from "react";
import { Card, Center, Image } from "native-base";
import Icon from "react-native-vector-icons/Entypo";

export const MeterTabIcon = () => {
  return (
    <Center mt={-18}>
      <Card
        bg={"primary.100"}
        shadow={0}
        style={{ shadowOpacity: 0 }}
        rounded={"full"}
        height={60}
        width={60}
      >
        <Center>
          <Icon
            style={{ marginTop: 2 }}
            name="squared-plus"
            size={20}
            color={"white"}
          />
        </Center>
      </Card>
    </Center>
  );
};

export const TabIcon = ({ source, alt }) => {
  return (
    <Center mt={6}>
      <Image alt={alt} source={source} w={25} h={25} />
    </Center>
  );
};
// export const CustomTabIcon = React.memo(TabIcon);
