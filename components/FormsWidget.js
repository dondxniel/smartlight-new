import React from 'react'
import { Box, Button, Card, Heading, KeyboardAvoidingView, Text, View } from 'native-base'
import MDIcon from 'react-native-vector-icons/MaterialIcons';
import { ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native';


//constants
import { height } from '../constants/dims'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const FormsWidget = ({ children, description, heading }) => {
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }}>
      <ImageBackground
        source={require('../assets/bg-new-password.png')}
        style={{
          height,
          maxHeight: height,
          flex: 1,
          position: 'relative',
        }}>
        <Button
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

        <Card
          height={'full'}
          style={{
            zIndex: 1,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: -height / 2,
            backgroundColor: '#fff',
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


      </ImageBackground >
    </KeyboardAwareScrollView>
  )

}

export default React.memo(FormsWidget);
