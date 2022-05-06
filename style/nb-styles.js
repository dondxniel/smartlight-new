import { height, width } from '../constants/dims';

export default {
  onboardingImageContainer: {
    backgroundColor: '#fff',
    h: '60%',
    borderRadius: '30px',
    margin: '30px'
  },
  progressContainer: {
    marginX: '30px',
    marginBottom: '15px'
  },
  progress: {
    backgroundColor: '#fff',
    width: '35%',
    colorScheme: "primary"
  },
  onboardingButtonContainer: {
    space: 'lg',
    mt: '30px',
  },
  onboardingSmallButton: {
    p: 4,
    rounded: '2xl',
    backgroundColor: '#fff',
    flex: 0.1,
  },
  onboardingBigButton: index => {
    return {
      width: 'full',
      p: 4,
      rounded: '2xl',
      colorScheme: 'primary',
      flex: (index === 0) ? 1 : 0.9,
      _text: {
        color: "#fff",
        fontWeight: 900
      }
    }
  },
  authAlt: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  altButton: {
    size: "md",
    variant: "link",
    _text: {
      fontWeight: 'bold'
    }
  },
  oauthContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  oauthLink: {
    borderRadius: 20,
    alignItems: 'center',
    padding: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    width: width / 5,
    my: 3
  },
  inputStyle: {
    bgColor: '#fafafa',
    h: 58,
    borderColor: '#fafafa',
    marginY: 3,
    variant: 'rounded'
  },
  toastErrorStyle: {
    p: 1.5,
    color: 'red.900',
    bg: 'red.100',
    rounded: '2xl'
  }
}
