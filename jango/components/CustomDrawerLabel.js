import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

// Custom drawer label for Profile screen
export const ProfileDrawerLabel = ({ focused }) => (
  <View style={styles.labelContainer}>
    <Image
      source={require("../assets/images/user.png")}
      style={styles.labelIcon}
    />
    <Text
      style={[
        styles.labelText,
        focused ? styles.labelTextFocused : null,
        focused,
      ]}
    >
      Profile
    </Text>
  </View>
);

// Custom drawer label for My Addresses screen
export const AddressesDrawerLabel = ({ focused }) => (
  <View
    style={[styles.labelContainer, focused && styles.labelContainerFocused]}
  >
    <Image
      source={require("../assets/images/location.png")}
      style={styles.labelIcon}
    />
    <Text style={[styles.labelText, focused ? styles.labelTextFocused : null]}>
      My Addresses
    </Text>
  </View>
);
export const HorizontalLine = () => <View style={styles.horizontalLine}></View>;

// Custom drawer label for Notification screen
export const NotificationDrawerLabel = ({ focused }) => (
  <View style={styles.labelContainer}>
    <Image
      source={require("../assets/images/notification.png")}
      style={styles.labelIcon}
    />
    <Text style={[styles.labelText, focused ? styles.labelTextFocused : null]}>
      Notification
    </Text>
  </View>
);

export const SettingsDrawerLabel = ({ focused }) => (
  <View style={styles.labelContainer}>
    <Image
      source={require("../assets/images/setting.png")}
      style={styles.labelIcon}
    />
    <Text style={[styles.labelText, focused ? styles.labelTextFocused : null]}>
      Settings
    </Text>
  </View>
);

export const HelpDrawerLabel = ({ focused }) => (
  <View style={styles.labelContainer}>
    <Image
      source={require("../assets/images/help.png")}
      style={styles.labelIcon}
    />
    <Text style={[styles.labelText, focused ? styles.labelTextFocused : null]}>
      Help
    </Text>
  </View>
);

import { TouchableOpacity, Alert } from "react-native";

export const LogoutDrawerLabel = ({ focused, onPress }) => {
  const handlePress = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          onPress: () => {
            // Perform logout action here
            console.log("Logout action");
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <TouchableOpacity onPress={onPress || handlePress}>
      <View style={styles.labelContainer}>
        <Image
          source={require("../assets/images/logout.png")}
          style={styles.labelIcon}
        />
        <Text
          style={[styles.labelText, focused ? styles.labelTextFocused : null]}
        >
          Logout
        </Text>
      </View>
    </TouchableOpacity>
  );
};

// export const LogoutDrawerLabel = ({ focused }) => (
//   <View style={styles.labelContainer}>
//     <Image
//       source={require("../assets/images/logout.png")}
//       style={styles.labelIcon}
//     />

/* <Text style={[styles.labelText, focused ? styles.labelTextFocused : null]}>
  Logout
</Text>; */

//   </View>
// );

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5, // Add vertical margin to separate items
    height: 30,
    drawerActiveTintColor: "transparent",
  },
  labelContainerFocused: {
    backgroundColor: "transparent",
  },
  labelIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  labelText: {
    color: "#00000066", // Text color
    fontSize: 13, // Font size
    fontWeight: "400", // Font weight
    fontFamily: "Poppins-Regular", // Specify your font family
    letterSpacing: 0.52, // Letter spacing
    lineHeight: 18.7, // Default text color
  },
  labelTextFocused: {
    color: "red", // Set the text color when focused
  },
  labelTextUnfocused: {
    color: "pink", // Set the text color when not focused
  },
  horizontalLine: {
    height: 1, // Line height
    width: 202, // Line width
    backgroundColor: "black", // Line color
    // marginVertical: 5,
    top: 10,
    marginLeft: -10,
    marginTop: 0,
  },
});
export default {
  ProfileDrawerLabel,
  AddressesDrawerLabel,
  HorizontalLine,
  NotificationDrawerLabel,
  SettingsDrawerLabel,
  LogoutDrawerLabel,
  HelpDrawerLabel,
};
