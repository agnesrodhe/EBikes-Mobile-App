
import TabNav from './src/navigation/IsLoggedIn';

const logo = require("./src/assets/logo.png");
const bottomImg = require("./src/assets/start_img2.jpg");

import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';

import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  // Load any resources or data that you need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {


        const imageAssets = cacheImages([
          logo,
          bottomImg
        ]);

        const fontAssets = cacheFonts([MaterialCommunityIcons.font]);

        await Promise.all([...imageAssets, ...fontAssets]);
      } catch (e) {
        // You might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setAppIsReady(true);

      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <TabNav />
  );
}