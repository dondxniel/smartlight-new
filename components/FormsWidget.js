import React from 'react'
import { Box, Button, Card, Heading, KeyboardAvoidingView, Text, View } from 'native-base'
import MDIcon from 'react-native-vector-icons/MaterialIcons';
import { ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native';


//constants
import { height } from '../constants/dims'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const FormsWidget = ({ btnTitle, children, description, heading }) => {
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView>
      <View h={height} bg='primary.100'>
        <ImageBackground
          source={require('../assets/bg3.png')}
          style={{
            height: height / 2,
            backgroundPosition: 'top',
            backgroundSize: '50%',
            zIndex: -2,
            position: 'relative',
            top: 0
          }}
        />
        <Button
          zIndex={2}
          rounded={'lg'}
          width={50} bg={'trueGray.50'}
          onPress={() => navigation.goBack()}
          _pressed={{
            backgroundColor: 'trueGray.50'
          }}
          position='absolute'
          top={50}
          left={5}
          justifyContent={'center'}
        >

          <MDIcon size={20} style={{ color: 'black', padding: 5 }} name='arrow-back-ios' />
        </Button>
        <View
          style={{
            zIndex: 1,
            position: 'absolute',
            left: 0,
            right: 0
          }}
        >
          <Card
            height={height}
            style={{
              backgroundColor: '#fff',
              marginTop: height / 2.1,
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

            <Heading mb={4}>{heading}</Heading>
            <Text>{description}</Text>
            <Box my={4}>{children}</Box>
          </Card>

        </View>

      </View>
    </KeyboardAwareScrollView>
  )

}

export default FormsWidget;
