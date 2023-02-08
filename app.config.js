import 'dotenv/config'

export default {
  expo: {
    name: 'my-app',
    slug: 'my-app',
    entryPoint: './src/App.js',
    version: '1.0.1-1',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/road.png',
      resizeMode: 'cover',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      buildNumber: '2',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
      versionCode: 2,
      package: 'com.lbeghini.myapp',
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      API_URL: process.env.API_URL,
      eas: {
        projectId: '95b3c61e-eb08-43c5-aea7-966bb0666049',
      },
    },
    owner: 'lbeghini',
  },
}
