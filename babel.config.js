module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          blacklist: null,
          allowlist: [
            "COASTR_URL",
            "FIREBASE_API_KEY",
            "FIREBASE_PROJECT_ID",
            "FIREBASE_APP_ID",
            "FIREBASE_MESSAGING_SENDER_ID",
            "FIREBASE_MEASUREMENT_ID",
          ],
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
};
