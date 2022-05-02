import React from 'react';
import { View, Card, Heading, Text, Button, KeyboardAvoidingView } from 'native-base';
import { ImageBackground } from 'react-native';

import { height } from '../constants/dims';
import LoginForm from '../components/LoginForm';
import OAuthLinks from '../components/OAuthLinks';
import rnStyles from '../style/rn-styles';
import nbStyles from '../style/nb-styles';

const Login = ({ navigation }) => {
  const createAccount = () => {
    navigation.navigate('signup');
  }
  return (
    <KeyboardAvoidingView
      behavior={'height'}
    >

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
          <View flex={1} />
          <Card
            style={{ ...rnStyles.formCard(1.22) }}
          >
            <Heading>Welcome back!</Heading>
            <View
              mt={10}
              paddingBottom={120}
            >
              <LoginForm />
              <OAuthLinks />
              <View
                {...nbStyles.authAlt}
              >
                <Text>Are you new?</Text>
                <Text style={{ paddingLeft: 9 }}>|</Text>
                <Button
                  {...nbStyles.altButton}
                  onPress={createAccount}
                >
                  Sign up now
                </Button>
              </View>
            </View>
          </Card>

        </View>

      </View>

    </KeyboardAvoidingView>
  )
}

export default Login
