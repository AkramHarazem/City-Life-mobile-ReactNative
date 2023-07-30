import { StatusBar } from 'expo-status-bar';
import Data, { DataContext } from './Context/Data';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './Navigations/MyTabs';
import { StripeProvider } from '@stripe/stripe-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform, View,Button} from 'react-native';
import { useContext } from 'react';
import { customTheme } from './Theme/CustomTheme';
import { Heading, useColorMode,Box, HStack, Avatar, Center, useColorModeValue, Text, NativeBaseProvider } from "native-base";




 function App() {
  // const {toggleColorMode,colorMode} = useColorMode();
  // // const {banks} = useContext(DataContext)
  // const bgColor = colorMode === "dark" ? '#003F5E' : '#E3F2F9'
  // // const isDarkMode = colorMode === "dark"
  // const toggleSwitch = ()=>{
  //   console.warn(colorMode)
  //   toggleColorMode()
  // }
  return (
    <StripeProvider
      publishableKey="pk_test_51NKzz8GrS3wxzFb18a6fDicJKSVB1iPepL8SUCFexsSvb9QQdRz0XMKfpBMEEaEPnAIujRlGCVcsfwFlrQys85UJ000E3EKgGP">
    <NativeBaseProvider theme={customTheme}>
      <Data>
        <NavigationContainer>
          <MyTabs>

            <StatusBar style={"auto"} />
          </MyTabs>
          {/* <Switch
            offThumbColor="primary.200"
            onThumbColor="black.800"
            offTrackColor="black.800"
            onTrackColor="primary.200"
            value={isDarkMode}
            onChange={()=>toggleColorMode()}
            /> */}        
        </NavigationContainer>
      </Data>
    </NativeBaseProvider>
    </StripeProvider>

  );
}
export default () => {
  const {toggleColorMode,colorMode} = useColorMode();
  // const {banks} = useContext(DataContext)
  const bgColor = colorMode === "dark" ? '#003F5E' : '#E3F2F9'
  // const isDarkMode = colorMode === "dark"
  const toggleSwitch = ()=>{
    console.warn(colorMode)
    toggleColorMode()
  }
  return (
    <NativeBaseProvider>
          <View style={{flex:1, backgroundColor:bgColor}} >
          <App />
          <Button title="Dark/light" onPress={()=>{
          toggleColorMode()
          console.warn(colorMode)
          }} color="#3F72AF" />
          </View>
    </NativeBaseProvider>
  );
};