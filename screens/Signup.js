import React from 'react';
import { View, Card, Heading, Text, Button, KeyboardAvoidingView } from 'native-base';
import { ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { height } from '../constants/dims';
import SignupForm from '../components/SignupForm';
import OAuthLinks from '../components/OAuthLinks';
import rnStyles from '../style/rn-styles';
import nbStyles from '../style/nb-styles';

const Signup = ({ navigation }) => {
  const login = () => {
    navigation.navigate('login');
  }
  return (
    <KeyboardAwareScrollView behavior='height'>
      <View
        bg='primary.100'
        h={height}
      >
        <ImageBackground
          source={require('../assets/bg1.png')}
          style={{ ...rnStyles.imageBackground }}
        />
        <View
          style={{ ...rnStyles.backgroundOverlay }}
        >
          <Card
            style={{
              ...rnStyles.formCard(1.1),
              paddingBottom: 120
            }}
          >
            <Heading>Create Account</Heading>
            <View
              mt={10}
            >
              <SignupForm navigation={navigation} />
              <OAuthLinks />
              <View
                {...nbStyles.authAlt}
              >
                <Text>Already joined?</Text>
                <Text style={{ paddingLeft: 9 }}>|</Text>
                <Button
                  {...nbStyles.altButton}
                  onPress={login}
                >
                  Login now
                </Button>
              </View>
            </View>
          </Card>

        </View>

      </View>
    </KeyboardAwareScrollView>
  )
}

export default Signup
