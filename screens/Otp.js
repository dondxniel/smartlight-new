import React from 'react'
import { Formik } from 'formik'
import { Button, FormControl, HStack, Input, Text } from 'native-base'

//components
import FormsWidget from '../components/FormsWidget'
import { useNavigation } from '@react-navigation/native'

const inputGroupStyle = {
  bgColor: '#fafafa',
  h: 58,
  w: 58,
  borderColor: '#fafafa',
  type: 'number',
  rounded: 'lg',
  placeholder: '_',
  variant: 'rounded',
  keyboardType: 'numeric',
  alignItems: 'center',
  maxLength: 1,
  _input: {
    fontSize: 30,
    textAlign: 'center',
  }

}

export default function() {
  const navigation = useNavigation();
  return (
    <FormsWidget heading='Enter OTP' description={`An OTP has been sent to your email. \'w Enter OTP below to reset Password`}>
      <Formik onSubmit={() => {
        if (true) navigation.navigate('new_password')
      }} initialValues={{ 'uno': '', 'due': '', 'tre': '', 'quattro': '' }}>{
          ({ values, handleSubmit }) => (
            <FormControl>
              <HStack space={'lg'}>
                <Input id='uno' value={values.uno}  {...inputGroupStyle} />
                <Input id='due' value={values.due}  {...inputGroupStyle} />
                <Input id='tre' value={values.tre}  {...inputGroupStyle} />
                <Input id='quattro' value={values.quattro}  {...inputGroupStyle} />
              </HStack>
              <Button onPress={handleSubmit} mt={4} rounded={'2xl'} p={4}>
                <Text fontWeight={'black'} letterSpacing={0.5} color={'trueGray.50'}>Submit</Text>
              </Button>

            </FormControl>
          )
        }</Formik>
    </FormsWidget>
  )
}
