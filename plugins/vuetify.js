import "@fortawesome/fontawesome-free/css/all.css"; // Ensure you are using css-loader
import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify, {
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#3282B8",
        secondary: "#424242",
        accent: "#21C6CE",
        error: "#C72C41", // danger
        info: "#2196F3",
        success: "#29C7AC",
        warning: "#FFBF00",
        fontColor: "1B262C",
      },
      dark: {
        primary: "#3282B8",
        secondary: "#424242",
        accent: "#21C6CE",
        error: "#C72C41", // danger
        info: "#2196F3",
        success: "#29C7AC",
        warning: "#FFBF00",
        fontColor: "F0ECE2",
      },
    },
  },
  icons: {
    iconfont: "fa",
  },
});
