import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
  Platform,
} from "react-native";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Button from "../components/Button";

const Profile = () => {
  // const [updateImage, setUpdateImage] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  // const [isImageCaptured, setIsImageCaptured] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null); // Add this line to declare userName
  const [userEmail, setUserEmail] = useState(null);
  // useEffect(() => {
  //   const getStoredUserData = async () => {
  //     try {
  //       const userId = await AsyncStorage.getItem("userId");
  //       const full_names = await AsyncStorage.getItem("full_names");
  //       const email_address = await AsyncStorage.getItem("email_address");

  //       if (userId !== null) {
  //         // Use the user data here
  //         console.log("Stored userId:", userId);
  //         console.log("Stored userName:", full_names);
  //         console.log("Stored userEmail:", email_address);
  //       } else {
  //         console.error("User data is not stored in AsyncStorage.");
  //         // Handle the case where user data is not available in AsyncStorage
  //       }
  //     } catch (error) {
  //       console.error("Error retrieving user data from AsyncStorage:", error);
  //     }
  //   };

  //   getStoredUserData();
  // }, []);
  useEffect(() => {
    const getStoredUserData = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        const fullNames = await AsyncStorage.getItem("full_names");
        const emailAddress = await AsyncStorage.getItem("email_address");

        console.log("Stored userId:", userId);
        console.log("Stored userName:", fullNames);
        console.log("Stored userEmail:", emailAddress);

        if (userId !== null) {
          // Use the user data here
          setUserId(userId);
          setUserName(fullNames);
          setUserEmail(emailAddress);

          console.log("Set userId:", userId);
          console.log("Set userName:", fullNames);
          console.log("Set userEmail:", emailAddress);
        } else {
          console.error("User data is not stored in AsyncStorage.");
          // Handle the case where user data is not available in AsyncStorage
        }
      } catch (error) {
        console.error("Error retrieving user data from AsyncStorage:", error);
      }
    };

    getStoredUserData();
  }, []);

  // const userId = "efd6bcce14dd1a21";
  const fetchProfileImage = async (userId) => {
    try {
      const response = await fetch(
        `https://jango-api-dev.jangoaddress.com/getProfileImage.php/${userId}`
      );
      console.log(
        `https://jango-api-dev.jangoaddress.com/getProfileImage.php/${userId}`
      );
      if (response.ok) {
        const responseText = await response.text();
        console.log("API Response Text:", responseText);
      } else {
        console.error(
          "Failed to fetch profile image from the API. Status:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error fetching profile image:", error);
    }
    return null;
  };

  // Helper function to check if a string is valid JSON

  useEffect(() => {
    fetchProfileImage(userId)
      .then((imageURL) => {
        if (imageURL) {
          console.log("Profile image fetched successfully:", imageURL);
          setProfileImage(imageURL);
        } else {
          console.error("No image URL fetched.");
        }
      })
      .catch((error) => {
        console.error("Error fetching profile image:", error);
      });
  }, [userId]); // Include userId in the dependency array

  // The empty dependency array means this will run once when the component mounts.

  handleNotification = () => {
    // Replace this with your notification handling logic
    console.log("Received a notification");
    // You can add more code to handle the notification here
  };
  handleMore = () => {
    // Replace this with your notification handling logic
    console.log("Received a more");
    // You can add more code to handle the notification here
  };
  handleViewall = () => {
    // Replace this with your notification handling logic
    console.log("Received a viewall");
    // You can add more code to handle the notification here
  };
  handlegetDirections = () => {
    // Replace this with your notification handling logic
    console.log("Received a directions");
    // You can add more code to handle the notification here
  };
  handleshareAddress = () => {
    // Replace this with your notification handling logic
    console.log("Received a share address");
    // You can add more code to handle the notification here
  };
  const removeImage = () => {
    setCapturedImage(null);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      {/* main screen container */}
      <View style={styles.container}>
        <View style={styles.headercontainer}>
          <TouchableOpacity
            onPress={handleNotification}
            style={styles.NotificationIconcontainer}
          >
            <Image
              source={require("../assets/images/notification.png")}
              style={styles.notificationIcon}
            />
          </TouchableOpacity>
          <View style={styles.headercontainerprofile}>
            <View>
              <Image
                source={{
                  // uri: "https://jango-api-dev.jangoaddress.com/getProfileImage.php/efd6bcce14dd1a21",
                  uri: `https://jango-api-dev.jangoaddress.com/getProfileImage.php/${userId}`,
                }}
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.userNameText}>{userName}</Text>
            <Text style={styles.userEmailText}>{userEmail}</Text>
          </View>

          <TouchableOpacity style={styles.shareButton}>
            <Image
              source={require("../assets/images/share.png")} // Replace with the correct path to your image
              style={styles.saveIcon} // Apply custom styles to the image here
            />
            <Text style={styles.savebuttonText}>Share</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.editButton}>
            <Image
              source={require("../assets/images/edit.png")} // Replace with the correct path to your image
              style={styles.saveIcon} // Apply custom styles to the image here
            />
            <Text style={styles.savebuttonText}>Edit</Text>
          </TouchableOpacity>

          <View style={styles.headerLine}></View>
        </View>
        <View style={styles.homeAddressContainer}>
          <Text style={styles.homeAddressText}>Home Address</Text>
          <TouchableOpacity
            onPress={handleMore}
            style={styles.NotificationIconcontainer}
          >
            <Image
              source={require("../assets/images/dots.png")}
              style={styles.dotIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.saveAddressContainer}>
          <Text style={styles.homeAddressText}>Saved Address</Text>
          <TouchableOpacity onPress={handleViewall}>
            <Text style={styles.ViewAllText}>view all</Text>
          </TouchableOpacity>
          {/* //containsmultipleaddresses that user have created */}
          <View style={styles.SubsaveAddressContainer}>
            <TouchableOpacity
              onPress={handlegetDirections}
              style={styles.NotificationIconcontainer}
            >
              <Image
                source={require("../assets/images/direction.png")}
                style={styles.directionIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleshareAddress}
              style={styles.NotificationIconcontainer}
            >
              <Image
                source={require("../assets/images/shareDirection.png")}
                style={styles.dotIcon}
              />
            </TouchableOpacity>
          </View>
          {/* //containsmultipleaddresses that user have created */}
        </View>
      </View>

      {/* </ScrollView> */}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    // top:-160,
  },
  headercontainer: {
    height: 130,
    width: "100%",
    backgroundColor: "#F8F8F8",
  },
  headercontainerprofile: {
    height: 81,
    width: 81,
    position: "absolute",
    top: 25,
    left: 20,
    resizeMode: "cover",
    borderColor: "black",
  },
  NotificationIconcontainer: {
    top: 25,
    alignSelf: "flex-end",
  },

  scrollView: {
    flex: 1, // Take up all available space
    backgroundColor: "#fff", // Background color
  },
  scrollViewContent: {
    padding: 16, // Padding around the content
  },
  icon: {
    height: 12,
    width: 12,
    marginLeft: 20,
  },
  saveIcon: {
    height: 15,
    width: 15,
    position: "absolute",
    top: 3.5,
    left: 10,
  },
  notificationIcon: {
    height: 15,
    width: 15,
    marginRight: 10,
  },
  dotIcon: {
    height: 15,
    width: 15,
    marginRight: 10,
    top: -30,
  },
  directionIcon: {
    height: 15,
    width: 15,
    marginRight: 35,
    top: -15,
  },
  headerLine: {
    width: 360, // Set the desired width
    height: 1, // Set the desired height
    // position: 'absolute',
    top: 25,
    marginRight: 10,
    // resizeMode: 'cover',
    alignSelf: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.04);",
    borderColor: "solid",
    // zIndex: 1,
  },
  shareButton: {
    backgroundColor: "#0000ee1a",
    borderRadius: 2,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3, // Set your preferred shadow opacity
    shadowRadius: 2,
    // elevation: 2, // Android shadow elevation
    height: 23,
    width: 84,
    justifyContent: "center",
    alignItems: "center",
    // position: 'absolute',
    top: 40,
    marginRight: 60,
    alignSelf: "flex-end",
  },
  editButton: {
    backgroundColor: "#0000ee1a",
    borderRadius: 2,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3, // Set your preferred shadow opacity
    shadowRadius: 2,
    // elevation: 2, // Android shadow elevation
    height: 23,
    width: 84,
    justifyContent: "center",
    alignItems: "center",
    // position: 'absolute',
    top: 16,
    marginLeft: 110,
    // alignSelf:'flex-end',
  },
  savebuttonText: {
    color: "#0000ee",
    fontFamily: "Inter-Regular", // Make sure the font is available in your project
    fontSize: 10,
    fontWeight: "400",
    // letterSpacing: 0.4,
    // lineHeight: 14.4,
    // position: 'absolute',
    top: 0,
    left: 8,
    // width: 28,
    // whiteSpace: 'nowrap',
    // padding: 10,
  },

  // headercontainerprofileImage: {
  //   width: 100, // Should match the width of the parent view
  //   height: 100, // Should match the height of the parent view
  //   borderRadius: 50, // Half of width or height to make it circular

  //   //  overflow: 'hidden',
  // },
  // profileImage: {
  //   // zIndex: 1,
  //   borderRadius: 50,
  //   overflow: "hidden",
  //   flex: 1,
  //   aspectRatio: 1,
  //   width: 71, // Should match the width of the parent view
  //   height: 71, // Should match the height of the parent view
  //   borderRadius: 50, // Half of width or height to make it circular
  //   alignSelf: "flex-start",
  //   // backgroundColor: 'blue',
  //   marginRight: -80,
  //   top: -35,
  // },

  saveIconcamera: {
    height: 15,
    width: 15,
    // position: 'absolute',
    alignSelf: "center",
    top: 8,
  },
  userNameText: {
    color: "rgba(0, 0, 0, 0.80)",
    fontFamily: "Inter",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 17.28,
    letterSpacing: 0.48,
  },
  userEmailText: {
    color: "rgba(0, 0, 0, 0.80)",
    fontFamily: "Inter",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 17.28,
    letterSpacing: 0.48,
  },
  image: {
    width: 71, // Should match the width of the parent view
    height: 71, // Should match the height of the parent view
    borderRadius: 50,
  },
  infoContainer: {
    alignSelf: "center",
    top: 20,
    marginLeft: 40,
  },
  homeAddressContainer: {
    width: 328,
    height: 89,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 238, 0.75)",
    backgroundColor: "#FFF",
  },
  saveAddressContainer: {
    top: 30,
    width: 328,

    height: 389,
    // borderRadius: 3,
    // borderWidth: 1,
    borderColor: "rgba(0, 0, 238, 0.75)",
    // backgroundColor: "#FFF",
  },
  homeAddressText: {
    color: "rgba(0, 0, 0, 0.50)",
    fontFamily: "Inter",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 17.28, // This is the converted value from line-height: 144%
    letterSpacing: 0.48,
    top: 10,
    marginLeft: 15,
  },
  ViewAllText: {
    color: "rgba(0, 0, 238, 0.75)",
    fontFamily: "Inter",
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 14.4, // This is the converted value from line-height: 144%
    letterSpacing: 0.4,
    alignSelf: "flex-end",
    marginRight: 10,
    top: -5,
  },
  SubsaveAddressContainer: {
    width: 328,
    height: 43,
    backgroundColor: "rgba(0, 0, 238, 0.02)",
    top: 10,
  },
});

export default Profile;
