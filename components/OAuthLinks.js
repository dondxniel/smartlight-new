import React from 'react';
import { View, Text, Card, Box } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import nbStyles from '../style/nb-styles';

const OAuthLinks = () => {
    return (
        <View>
            <Text>Or continue with</Text>
            <View {...nbStyles.oauthContainer}>
                <Box {...nbStyles.oauthLink}>
                    <Icon name='google' size={30} color={'#E0453A'} />
                </Box>

                <Box {...nbStyles.oauthLink}>
                    <Icon name='apple' size={30} color={'#000'} />
                </Box>

                <Box {...nbStyles.oauthLink}>
                    <Icon name='facebook-square' size={30} color={'#1977F0'} />
                </Box>
            </View>
        </View>
    )
}

export default OAuthLinks;