import React, { useState } from 'react';
import { View, FormControl, Input, Button, Text, useToast } from 'native-base';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';

//styles
import nbStyles from '../style/nb-styles'

const SignupForm = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false)
  const toast = useToast()
  const inputStyle = {
    bgColor: '#fafafa',
    h: 58,
    borderColor: '#fafafa',
    marginY: 3
  }
  return (
    <View>
      <Formik
        initialValues={{ fullname: '', email: '', password: '' }}
        validateOnChange={false}
        onSubmit={values => {
          navigation.navigate('verifyphonenumber')
          console.log(values);

        }}
        validate={values => {
          const errors = {}
          if (!values.fullname) {
            errors.fullname = toast.show({ render: () => (<Text {...nbStyles.toastErrorStyle}>Fullname required!</Text>), placement: 'bottom' })
          } else if (!values.email) {
            errors.email = toast.show({ render: () => (<Text {...nbStyles.toastErrorStyle}>Email required!</Text>), placement: 'bottom' })
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = toast.show({ render: () => (<Text {...nbStyles.toastErrorStyle}>Invalid email address.</Text>), placement: 'bottom' })
          } else if (!values.password) {
            errors.password = toast.show({ render: () => (<Text {...nbStyles.toastErrorStyle}>Password required!</Text>), placement: 'bottom' })
          }
          return errors;
        }}
      >
        {({ errors, touched, handleBlur, handleChange, handleSubmit, values }) => (
          <View>
            <FormControl>
              <Input
                {...inputStyle}
                onChangeText={handleChange('fullname')}
                onBlur={handleBlur('fullname')}
                type='text'
                placeholder='Full name'
                variant='rounded'
                name='fullname'
                value={values.fullname}
              />
              <Text>{errors.fullname && touched.fullname}</Text>
            </FormControl>
            <FormControl>
              <Input
                {...inputStyle}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                type='email'
                placeholder='Email'
                variant='rounded'
                name='email'
                id='email'
                value={values.email}
              />
              <Text>{errors.email && touched.email}</Text>
            </FormControl>
            <FormControl>
              <Input
                {...inputStyle}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                variant='rounded'
                InputRightElement={
                  <Icon
                    onPress={() => setShowPassword(!showPassword)}
                    style={{ marginRight: 15 }}
                    name={showPassword ? 'eye-slash' : 'eye'}
                    size={20}
                    color={'#bbb'}
                  />
                }
              />
              <Text>{errors.password && touched.password}</Text>
            </FormControl>
            <FormControl
              flexDirection='column'
            >
              <Button
                p={4}
                rounded={'2xl'}
                marginY={4}
                onPress={handleSubmit}
              >
                <Text fontWeight={900} color={'#fff'}>Continue</Text>
              </Button>
            </FormControl>
          </View>
        )}
      </Formik>
    </View>
  )
}

export default SignupForm;
