import React from 'react'
import { Formik } from 'formik'
import { Button, FormControl, HStack, Input, Text } from 'native-base'

//components
import FormsWidget from '../components/FormsWidget'

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
  return (
    <FormsWidget heading='Enter OTP' description={`An OTP has been sent to your email. \'w Enter OTP below to reset Password`}>
      <Formik initialValues={{ 'uno': '', 'due': '', 'tre': '', 'quattro': '' }}>{
        ({ values, handleChange }) => (
          <FormControl>
            <HStack space={'lg'}>
              <Input nativeID='uno' value={values.uno} onChange={handleChange} {...inputGroupStyle} />
              <Input nativeID='due' value={values.due} onChange={handleChange} {...inputGroupStyle} />
              <Input nativeID='tre' value={values.tre} onChange={handleChange} {...inputGroupStyle} />
              <Input nativeID='quattro' value={values.quattro} onChange={handleChange} {...inputGroupStyle} />
            </HStack>
            <Button mt={4} rounded={'2xl'} p={5}>
              <Text fontWeight={'black'} letterSpacing={0.5} color={'trueGray.50'}>Submit</Text>
            </Button>

          </FormControl>
        )
      }</Formik>
    </FormsWidget>
  )
}
