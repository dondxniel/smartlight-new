import React, { memo } from "react";
import Icon from "react-native-vector-icons/Entypo";
import {
	Heading,
	View,
	Text,
	Image,
	AspectRatio,
	ScrollView,
	VStack,
	StatusBar,
	Button,
	HStack,
	Box,
} from "native-base";
import { useNavigation } from "@react-navigation/native";

//nativebase styles
import nbStyles from "../style/nb-styles";

//components
import ProfileListItem from "../components/ProfileListItem";

// icons
import LogoutIcon from "../assets/profile-icons/logout.svg";
import EditProfileIcon from "../assets/profile-icons/editProfile.svg";
import ChangePasswordIcon from "../assets/profile-icons/changePassword.svg";
import SupportIcon from "../assets/profile-icons/support.svg";
import AboutIcon from "../assets/profile-icons/about.svg";

export default memo(function () {
	const navigation = useNavigation();
	return (
		<View flex={1} mx={5}>
			<VStack>
				<View {...nbStyles.profileHeader}>
					<View {...nbStyles.profileHeaderChild}>
						<Heading style={{ paddingTop: 10 }}>Profile</Heading>
					</View>
					<HStack {...nbStyles.logoutBtnC}>
						<Button
							onPress={() => navigation.navigate("login")}
							color="white"
							backgroundColor={"red.500"}
							{...nbStyles.logoutBtn}
						>
							<HStack space={"sm"}>
								<LogoutIcon />
								<Text color="white">Logout</Text>
							</HStack>
						</Button>
					</HStack>
				</View>
				<View {...nbStyles.userDetails}>
					<View {...nbStyles.userPhoto}>
						<AspectRatio
							ratio={{
								base: 2 / 2,
								md: 2 / 2,
							}}
						>
							<Image
								source={{
									uri: "https://wallpaperaccess.com/full/317501.jpg",
								}}
								alt="Alternate Text"
								size="md"
								borderRadius={10}
							/>
						</AspectRatio>
					</View>
					<View {...nbStyles.userIdentifier}>
						<Text style={{ fontWeight: "bold", fontSize: 20 }}>
							John Doe
						</Text>
						<Text style={{ fontSize: 13 }}>johndoe@gmail.com</Text>
					</View>
				</View>
			</VStack>
			<ScrollView flex={1} bounces>
				<View my={1}>
					<ProfileListItem
						onPress={() => navigation.push("edit-profile")}
						text="Edit Profile"
					>
						<EditProfileIcon />
					</ProfileListItem>
					<ProfileListItem
						onPress={() => navigation.push("change-password")}
						text="Change Password"
					>
						<ChangePasswordIcon />
					</ProfileListItem>
					<ProfileListItem
						onPress={() => navigation.push("support")}
						text="Support"
					>
						<SupportIcon />
					</ProfileListItem>
					<ProfileListItem
						onPress={() => navigation.push("about")}
						text="About SmartLight"
					>
						<AboutIcon />
					</ProfileListItem>
				</View>
			</ScrollView>
		</View>
	);
});
