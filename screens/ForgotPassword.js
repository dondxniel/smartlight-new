import React from 'react'
import { Button, FormControl, Input, Text } from 'native-base'
import { Formik } from 'formik'

//components
import FormsWidget from '../components/FormsWidget'

import nbStyles from '../style/nb-styles';
import { useNavigation } from '@react-navigation/native';



const ForgotPassword = () => {
  const navigation = useNavigation()
  return (

    <FormsWidget heading={'Forgot Password'} description={`Don't worry, happens to the best of us. Please enter the email registered to your account.`} btnTitle={'Submit'}>
      <Formik initialValues={{ email: '' }} onSubmit={() => {
        if (true) {
          navigation.navigate('otp')
        }
      }}>
        {({ values, handleSubmit }) => (
          <FormControl>
            <Input enablesReturnKeyAutomatically={true} type='text' {...nbStyles.inputStyle}
              placeholder='Email'
              variant='rounded'
              name='email'
              id='email'
              value={values.email}
            />
            <Button onPress={handleSubmit} rounded={'2xl'} p={5}>
              <Text fontWeight={'black'} letterSpacing={0.5} color={'trueGray.50'}>Submit</Text>
            </Button>

          </FormControl>
        )}
      </Formik>
    </FormsWidget>
  )
}

export default ForgotPassword;
