import React, { useState } from 'react';
import { View, FormControl, Input, Button, Text } from 'native-base';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';
import rnStyles from '../style/rn-styles';
import nbStyles from '../style/nb-styles';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    
    return ( 
        <View>
            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {({handleChange, handleBlur, handleSubmit, values}) => (
                    <View>
                        <FormControl>
                            <Input 
                                {...nbStyles.inputStyle} 
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
                                {...nbStyles.inputStyle} 
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
                            style = {{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                        >
                            <Text>Forgot Password?</Text>
                            <Text style={{paddingLeft: 9}}>|</Text>
                            <Button size="md" variant="link" _text={{fontWeight: 'bold'}}>
                                Reset
                            </Button>
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
                                <Text marginY={2} fontWeight={900} color={'#fff'}>Login</Text>
                            </Button>
                        </FormControl>
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default LoginForm;