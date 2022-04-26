import React, { useState } from 'react';
import { View, FormControl, Input, Button, Text } from 'native-base';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignupForm = ({navigation}) => {
    const [showPassword, setShowPassword] = useState(false)
    
    const inputStyle = {
        bgColor: '#fafafa',
        h: 58,
        borderColor: '#fafafa',
        marginY: 3
    }
    return ( 
        <View>
            <Formik
                initialValues={{fullname: '', email: '', password: ''}}
                onSubmit={values => {
                    navigation.navigate('verifyphonenumber')
                    console.log(values);
                }}
            >
                {({handleChange, handleBlur, handleSubmit, values}) => (
                    <View>
                        <FormControl>
                            <Input 
                                {...inputStyle} 
                                type='text' 
                                placeholder='Full name' 
                                variant='rounded' 
                                name='fullname'
                                id='fullname'
                                value={values.fullname}
                            />
                        </FormControl>
                        <FormControl>
                            <Input 
                                {...inputStyle} 
                                type='email' 
                                placeholder='Email' 
                                variant='rounded' 
                                name='email'
                                id='email'
                                value={values.email}
                            />
                        </FormControl>
                        <FormControl>
                            <Input 
                                {...inputStyle} 
                                type={showPassword?'text':'password'} 
                                placeholder='Password' 
                                variant='rounded' 
                                InputRightElement={
                                    <Icon 
                                        onPress={()=>setShowPassword(!showPassword)} 
                                        style={{marginRight: 15}} 
                                        name={showPassword?'eye-slash':'eye'} 
                                        size={20} 
                                        color={'#bbb'} 
                                    />
                                } 
                            />
                        </FormControl>
                        <FormControl
                            flexDirection='column'
                        >
                            <Button
                                width={'full'}
                                borderRadius={'10px'}
                                marginY={5}
                                onPress={handleSubmit}
                            >
                                <Text marginY={2} fontWeight={900} color={'#fff'}>Continue</Text>
                            </Button>
                        </FormControl>
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default SignupForm;