import React, { memo } from "react";
import OnboardingContainer from "../components/OnboardingContainer";

const Onboarding = () => {
  console.log("testing onboarding remounting");
  return <OnboardingContainer />;
};

export default memo(Onboarding);
