import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView
} from 'react-native';

const  Settings = ({ navigation }) => {
  return (
    <SafeAreaView >
      <View >
        <View
         >
          <Text
            >
            This is the First Page under First Page Option
          </Text>
          <Button
            onPress={
              () => navigation.navigate('SecondPage')
            }
            title="Go to Second Page"
          />
          <Button
            onPress={() => navigation.navigate('ThirdPage')
            }
            title="Go to Third Page"
          />
        </View>
        <Text
        >
          React Navigate Drawer
        </Text>
        <Text
          >
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default Settings;