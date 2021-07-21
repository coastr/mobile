import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
          
          "OpenSans-Bold": require("../assets/fonts/OpenSans-Bold.ttf"),
          "OpenSans-BoldItalic": require("../assets/fonts/OpenSans-BoldItalic.ttf"),
          "OpenSans-ExtraBold": require("../assets/fonts/OpenSans-ExtraBold.ttf"),
          "OpenSans-ExtraBoldItalic": require("../assets/fonts/OpenSans-ExtraBoldItalic.ttf"),
          "OpenSans-Italic": require("../assets/fonts/OpenSans-Italic.ttf"),
          "OpenSans-Light": require("../assets/fonts/OpenSans-Light.ttf"),
          "OpenSans-LightItalic": require("../assets/fonts/OpenSans-LightItalic.ttf"),
          "OpenSans-Regular": require("../assets/fonts/OpenSans-Regular.ttf"),
          "OpenSans-SemiBold": require("../assets/fonts/OpenSans-SemiBold.ttf"),
          "OpenSans-SemiBoldItalic": require("../assets/fonts/OpenSans-SemiBoldItalic.ttf"),

          "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
          "Poppins-BoldItalic": require("../assets/fonts/Poppins-BoldItalic.ttf"),
          "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
          "Poppins-ExtraBoldItalic": require("../assets/fonts/Poppins-ExtraBoldItalic.ttf"),
          "Poppins-Italic": require("../assets/fonts/Poppins-Italic.ttf"),
          "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
          "Poppins-LightItalic": require("../assets/fonts/Poppins-LightItalic.ttf"),
          "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
          "Poppins-MediumItalic": require("../assets/fonts/Poppins-MediumItalic.ttf"),
          "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
          "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
          "Poppins-SemiBoldItalic": require("../assets/fonts/Poppins-SemiBoldItalic.ttf"),
          "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
          "Poppins-ThinItalic": require("../assets/fonts/Poppins-ThinItalic.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
