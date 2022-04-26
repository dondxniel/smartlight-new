import React from 'react';
import { View } from 'native-base';
// import OnboardingContainer from './components/OnboardingContainer';
import NavigationRoot from './navigation';

const App = () => {
  
  return (
    <View flex={1}>
      {/* <OnboardingContainer /> */}
        <NavigationRoot />
    </View>
  );
};


export default App;
