import React from "react";
import Icon from "react-native-vector-icons/Entypo";
import { Heading, View, Text, Image, AspectRatio, ScrollView } from "native-base";
import {secondaryColor} from '../constants/style'
import nbStyles from "../style/nb-styles";
import ProfileListItem from "../components/ProfileListItem";
// icons
import EditProfileIcon from '../assets/profile-icons/editProfile.svg';
import MetersIcon from '../assets/profile-icons/meters.svg';
import TransactionsIcon from '../assets/profile-icons/transactions.svg';
import ChangePasswordIcon from '../assets/profile-icons/changePassword.svg';
import SupportIcon from '../assets/profile-icons/transactions.svg';
import AboutIcon from '../assets/profile-icons/transactions.svg';

export default function () {
  return (
    <ScrollView>
      <View mx={5}>
          <View {...nbStyles.profileHeader}>
            <View {...nbStyles.profileHeaderChild}>
              <Heading style={{paddingTop: 10}}>Profile</Heading>
            </View>
            <View {...nbStyles.logoutBtnC}>
              <Icon.Button
                name="log-out"
                size={20}
                color="white"
                backgroundColor={secondaryColor}
                {...nbStyles.logoutBtn}
              >
                <Text color="white">Logout</Text>
              </Icon.Button>
            </View>
          </View>
          <View {...nbStyles.userDetails}>
            <View {...nbStyles.userPhoto}>
              <AspectRatio ratio={{
                base: 2 / 2,
                md: 2 / 2
              }}>
                <Image 
                  source={{ uri: "https://wallpaperaccess.com/full/317501.jpg" }} 
                  alt="Alternate Text"
                  size="md"
                  borderRadius={10}
                />
              </AspectRatio>
            </View>
            <View {...nbStyles.userIdentifier}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>John Doe</Text>
              <Text style={{fontSize: 13}}>johndoe@gmail.com</Text>
            </View>
          </View>
          <View my={1}>
            <ProfileListItem text="Edit Profile">
              <EditProfileIcon />
            </ProfileListItem>
            <ProfileListItem text="Meters">
              <MetersIcon />
            </ProfileListItem>
            <ProfileListItem text="Transactions">
              <TransactionsIcon />
            </ProfileListItem>
            <ProfileListItem text="Change Password">
              <ChangePasswordIcon />
            </ProfileListItem>
            <ProfileListItem text="Support">
              <SupportIcon />
            </ProfileListItem>
            <ProfileListItem text="About SmartLight">
              <AboutIcon />
            </ProfileListItem>
          </View>
      </View>
    </ScrollView>
  );
}
