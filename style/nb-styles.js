import { height, width } from "../constants/dims";
import { textColorPrimary, textColorMuted } from "../constants/style";

export default {
  onboardingImageContainer: {
    backgroundColor: "#fff",
    h: "60%",
    borderRadius: "30px",
    margin: "30px",
  },
  progressContainer: {
    marginX: "30px",
    marginBottom: "15px",
  },
  progress: {
    backgroundColor: "#fff",
    width: "35%",
    colorScheme: "primary",
  },
  onboardingButtonContainer: {
    space: "lg",
    mt: "30px",
  },
  onboardingSmallButton: {
    p: 4,
    rounded: "2xl",
    backgroundColor: "#fff",
    flex: 0.1,
  },
  onboardingBigButton: (index) => {
    return {
      width: "full",
      p: 4,
      rounded: "2xl",
      colorScheme: "primary",
      flex: index === 0 ? 1 : 0.9,
      _text: {
        color: "#fff",
        fontWeight: 900,
      },
    };
  },
  authAlt: {
    flexDirection: "row",
    alignItems: "center",
  },
  altButton: {
    size: "md",
    variant: "link",
    _text: {
      fontWeight: "bold",
    },
  },
  oauthContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    py: 3,
  },
  oauthLink: {
    style: {
      borderRadius: 20,
      alignItems: "center",
      padding: 15,
      paddingLeft: 25,
      paddingRight: 25,
      borderWidth: 1,
      borderColor: "#ddd",
      // elevation: 1,
      // shadowColor: "#ddd",
      // width: width / 5,
    },
  },
  inputStyle: {
    bgColor: "#fafafa",
    h: 58,
    borderColor: "#fafafa",
    marginY: 3,
    variant: "rounded",
  },
  toastErrorStyle: {
    p: 1.5,
    color: "red.900",
    bg: "red.100",
    rounded: "2xl",
  },
  textMuted: {
    color: textColorMuted,
  },
  notificationHeading: {
    mx: 5,
    my: 3,
  },
  notificationItem: {
    container: {
      mx: 5,
      my: 2,
      p: 5,
      borderRadius: 20,
      color: "red",
      // borderWidth: 1,
      // borderColor: '#ddd',
      // borderStyle: 'solid',
      backgroundColor: "#fafafa",
    },
    topic: {
      fontWeight: "bold",
      fontSize: "xl",
      style: {
        color: textColorPrimary,
        fontFamily: "GTWalsheimProMedium",
      },
    },
    info: {
      style: {
        color: textColorPrimary,
        fontFamily: "GTWalsheimProMedium",
      },
    },
    date: {
      fontSize: "2xs",
      mt: "5",
      color: textColorMuted,
    },
  },
  profileHeader: {
    my: 3,
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  profileHeaderChild: {
    style: {
      width: "50%",
      justifyContent: "space-between",
      flexDirection: "row",
    },
  },
  logoutBtnC: {
    h: 40,
    flexDirection: "row",
    alignItems: "center",
    space: "sm",
  },
  logoutBtn: {
    borderRadius: 10,
    style: {
      padding: 15,
    },
  },
  userDetails: {
    my: 5,
    flexDirection: "row",
  },
  // userPhoto: {
  // 	flex: 1,
  // 	height: "auto",
  // },
  userIdentifier: {
    flex: 3,
    justifyContent: "center",
    paddingLeft: 5,
    height: "auto",
  },
  onboardingImageContainer: {
    backgroundColor: "#fff",
    h: "60%",
    borderRadius: "30px",
    margin: "30px",
  },
  progressContainer: {
    marginX: "30px",
    marginBottom: "15px",
  },
  progress: {
    backgroundColor: "#fff",
    width: "35%",
    colorScheme: "primary",
  },
  onboardingButtonContainer: {
    space: "lg",
    mt: "30px",
  },
  onboardingSmallButton: {
    p: 4,
    rounded: "2xl",
    backgroundColor: "#fff",
    flex: 0.1,
  },
  defaultButton: {
    width: "full",
    p: 4,
    rounded: "2xl",
    colorScheme: "primary",
  },
  onboardingBigButton: (index) => {
    return {
      width: "full",
      p: 4,
      rounded: "2xl",
      colorScheme: "primary",
      flex: index === 0 ? 1 : 0.9,
      _text: {
        color: "#fff",
        fontWeight: 900,
      },
    };
  },
  authAlt: {
    flexDirection: "row",
    alignItems: "center",
  },
  altButton: {
    size: "md",
    variant: "link",
    _text: {
      fontWeight: "bold",
    },
  },
  oauthContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  oauthLink: {
    borderRadius: 20,
    alignItems: "center",
    padding: 4,
    borderWidth: 1,
    borderColor: "#ddd",
    width: width / 5,
    my: 3,
  },
  inputStyle: {
    bgColor: "#fafafa",
    h: 58,
    borderColor: "#fafafa",
    marginY: 3,
    variant: "rounded",
  },
  toastErrorStyle: {
    p: 1.5,
    color: "red.900",
    bg: "red.100",
    rounded: "2xl",
  },
  textMuted: {
    color: textColorMuted,
  },
  notificationHeading: {
    mx: 5,
    my: 3,
  },
  notificationItem: {
    container: {
      mx: 5,
      my: 2,
      p: 5,
      borderRadius: 20,
      color: "red",
      // borderWidth: 1,
      // borderColor: '#ddd',
      // borderStyle: 'solid',
      backgroundColor: "#fafafa",
    },
    topic: {
      fontWeight: "bold",
      fontSize: "xl",
      style: {
        color: textColorPrimary,
        fontFamily: "GTWalsheimPro-Medium",
      },
    },
    info: {
      style: {
        color: textColorPrimary,
        fontFamily: "GTWalsheimPro-Medium",
      },
    },
    date: {
      fontSize: "2xs",
      mt: "5",
      color: textColorMuted,
    },
  },
  profileHeader: {
    my: 3,
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  profileHeaderChild: {
    style: {
      width: "50%",
      justifyContent: "space-between",
      flexDirection: "row",
    },
  },
  logoutBtnC: {
    style: {
      flexDirection: "row",
      // justifyContent: 'end'
    },
  },
  logoutBtn: {
    borderRadius: 10,
    style: {
      padding: 15,
    },
  },
  userDetails: {
    my: 5,
    flexDirection: "row",
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: '#333',
    // height: 'fit-content'
  },
  userPhoto: {
    flex: 1,
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: '#333',
    height: "auto",
  },
  editProfileUserPhoto: {
    flex: 0.5,
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: '#333',
    height: "auto",
  },
  userIdentifier: {
    flex: 3,
    justifyContent: "center",
    paddingLeft: 5,
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: '#333',
    height: "auto",
  },
  /* ---actionsheet styles */
  actionSheet: {
    actionSheetContent: { width: width, bgColor: "white" },
    actionSheetItem: {
      _pressed: { backgroundColor: "transparent" },
      bgColor: "white",
    },
    paymentMethod: {
      w: 120,
      h: 120,
      rounded: 20,
      borderWidth: 1,
      borderColor: "primary.100",
      p: 3,
    },
  },

  aboutTextChunkContainer: {
    mb: 70,
  },
  aboutTextChunk: {
    m: 5,
  },
};
