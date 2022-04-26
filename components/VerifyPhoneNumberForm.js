import React, { useState } from 'react';
import { View, FormControl, Input, Button, Text, Select } from 'native-base';
import { Formik } from 'formik';
import { width } from '../constants/dims';

const VerifyPhoneNumber = () => {    
    const inputStyle = {
        bgColor: '#fafafa',
        h: 58,
        borderColor: '#fafafa',
        marginY: 3
    }
    return ( 
        <View>
            <Formik
                initialValues={{countryCode: '+234', phonenumber: ''}}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {({handleChange, handleBlur, handleSubmit, values}) => (
                    <View
                        style={{  
                            marginBottom:200
                        }}
                    >
                        <FormControl>
                            <Input 
                                {...inputStyle} 
                                type='tel' 
                                placeholder='Phonenumber' 
                                variant='rounded' 
                                keyboardType='numeric'
                                InputLeftElement={
                                    <Select
                                        width={75}
                                        borderWidth={0}
                                        selectedValue={values.countryCode} 
                                        mt={1}
                                        onValueChange={handleChange('countryCode')}
                                        _selectedItem={{
                                            bg: "teal.100",
                                            textAlign: 'center'
                                        }} 
                                    >
                                          <Select.Item label="+234" value="+234" />
                                          <Select.Item label="+130" value="+130" />
                                          <Select.Item label="+123" value="+123" />
                                          <Select.Item label="+422" value="+422" />
                                    </Select>
                                } 
                            />
                        </FormControl>
                        <View
                            alignItems={'center'}
                        >
                            <Button
                                variant={'unstyled'}
                                _text={{
                                    fontWeight: 'bold',
                                    color: 'primary.100'
                                }}                                
                            >
                                Sent OTP
                            </Button>
                        </View>
                        {/* OTP form */}
                        <View
                            flexDirection={'row'}
                            justifyContent={'space-between'}
                        >
                            <Input 
                                {...inputStyle}
                                width={width/5}
                                type='tel' 
                                placeholder='_' 
                                variant='rounded' 
                                keyboardType='numeric'
                                alignItems={'center'}
                                maxLength={1}
                                _input={{
                                    fontSize: 30,
                                    textAlign: 'center'
                                }}
                            />
                            <Input 
                                {...inputStyle}
                                width={width/5}
                                type='tel' 
                                placeholder='_' 
                                variant='rounded' 
                                keyboardType='numeric'
                                alignItems={'center'}
                                maxLength={1}
                                _input={{
                                    fontSize: 30,
                                    textAlign: 'center'
                                }}
                            />
                            <Input 
                                {...inputStyle}
                                width={width/5}
                                type='tel' 
                                placeholder='_' 
                                variant='rounded' 
                                keyboardType='numeric'
                                alignItems={'center'}
                                maxLength={1}
                                _input={{
                                    fontSize: 30,
                                    textAlign: 'center'
                                }}
                            />
                            <Input 
                                {...inputStyle}
                                width={width/5}
                                type='tel' 
                                placeholder='_' 
                                variant='rounded' 
                                keyboardType='numeric'
                                alignItems={'center'}
                                maxLength={1}
                                _input={{
                                    fontSize: 30,
                                    textAlign: 'center'
                                }}
                            />
                        </View>
                        <FormControl
                            flexDirection='column'
                        >
                            <Button
                                width={'full'}
                                borderRadius={'10px'}
                                marginY={5}
                                onPress={handleSubmit}
                            >
                                <Text marginY={2} fontWeight={900} color={'#fff'}>Finish</Text>
                            </Button>
                        </FormControl>
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default VerifyPhoneNumber;