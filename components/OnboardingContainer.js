import React, { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Onboarding from "./Onboarding";

const OnboardingContainer = () => {
  const navigation = useNavigation();
  const [onboardingText] = useState([
    {
      title: "Monitor Power Consumption",
      text: "Lorem ipsum dolor sit amet consectur dolorem ipsten sfst. Lorem ipsum dolor sit.",
    },
    {
      title: "Buy power with crypto",
      text: "Lorem ipsum dolor sit amet consectur dolorem ipsten sfst. Lorem ipsum dolor sit.",
    },
    {
      title: "Set Alarms for your power usage",
      text: "Lorem ipsum dolor sit amet consectur dolorem ipsten sfst. Lorem ipsum dolor sit.",
    },
  ]);
  const [activeOnboardingScreen, setActiveOnboardingScreen] = useState(0);

  const handleNext = useCallback(() => {
    if (activeOnboardingScreen < onboardingText.length - 1) {
      setActiveOnboardingScreen((prev) => prev + 1);
    } else if (activeOnboardingScreen === onboardingText.length - 1) {
      navigation.push("login");
    }
  }, [activeOnboardingScreen]);
  const handlePrevious = useCallback(() => {
    if (activeOnboardingScreen > 0) {
      setActiveOnboardingScreen((prev) => prev - 1);
    }
  }, [activeOnboardingScreen]);

  return (
    <Onboarding
      onboardingText={onboardingText}
      key={activeOnboardingScreen}
      index={activeOnboardingScreen}
      title={onboardingText[activeOnboardingScreen].title}
      text={onboardingText[activeOnboardingScreen].text}
      handleNext={handleNext}
      handlePrevious={handlePrevious}
    />
  );
};

export default OnboardingContainer;
