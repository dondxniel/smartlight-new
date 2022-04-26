import React from 'react';
import { View, Card, Heading, Text, Button, KeyboardAvoidingView } from 'native-base';
import { ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { height } from '../constants/dims';
import VerifyPhoneNumberForm from '../components/VerifyPhoneNumberForm';

const VerifyPhoneNumber = ({navigation}) => {
  const login = () => {
    navigation.navigate('login');
  }
  return (
    <View 
      bg='primary.100'
      h={height}
    >
      <ImageBackground
        source={require('../assets/bg3.png')}
        style={{
          height: height/2,
          backgroundPosition: 'top',
          backgroundSize: '50%',
          zIndex: -2,
          position: 'relative',
          top: 0
        }}
      />
      <View 
        style={{
          zIndex: 1,
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }}
      >
          <View flex={1} />
          <KeyboardAvoidingView 
            behavior={'padding'} 
          >
            <Card 
              style={{
                maxHeight: height/2,
                backgroundColor: '#fff',
                marginTop: 'auto',
                marginLeft: 7,
                marginRight: 7,
                borderRadius: 20,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                paddingTop: 30,
                paddingLeft: 25,
                paddingRight: 25
              }}
            >
                <Heading>Verify Phone Number Now!</Heading>
                <View
                  mt={10}
                >
                  <VerifyPhoneNumberForm />
                </View>
            </Card>
          </KeyboardAvoidingView>

      </View>

    </View>
  )
}

export default VerifyPhoneNumber