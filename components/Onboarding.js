import React from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Progress,
  Heading,
  Button,
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../style/nb-styles";

const Onboarding = ({
  onboardingText,
  index,
  title,
  text,
  handleNext,
  handlePrevious,
}) => {
  return (
    <Box backgroundColor={"#e5e5e5"} h={"100%"}>
      <VStack>
        <Box {...styles.onboardingImageContainer}>
          {/* Image will be here. */}
        </Box>
        <Box {...styles.progressContainer}>
          <Progress value={index + 1} max={3} {...styles.progress} />
        </Box>
        <Box marginX={"30px"}>
          <Heading width={"70%"}>{title}</Heading>
          <Text>{text}</Text>
          <HStack {...styles.onboardingButtonContainer}>
            {index !== 0 && (
              <Button
                {...styles.onboardingSmallButton}
                onPress={handlePrevious}
              >
                <Icon name="arrow-left" size={20} color={"#333"} />
              </Button>
            )}
            <Button {...styles.onboardingBigButton(index)} onPress={handleNext}>
              {index !== onboardingText.length - 1 ? "Next" : "Join us"}
            </Button>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default React.memo(Onboarding);
