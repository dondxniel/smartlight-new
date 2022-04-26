import {colors, extendTheme} from 'native-base';

const theme = extendTheme({
    colors: {
        primary: 
        {
            50: '#5961E0',
            100: '#5961E0',
            200: '#5961E0',
            300: '#5961E0',
            400: '#5961E0',
            500: '#5961E0',
            600: '#5961E0',
            700: '#5961E0',
            800: '#5961E0',
            900: '#5961E0',
        }
    },
    config: {
        // Changing initialColorMode to 'dark'
        initialColorMode: 'light',
    }
})

export default theme;