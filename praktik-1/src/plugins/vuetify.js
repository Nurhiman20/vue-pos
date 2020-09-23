// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#3F51B5',
        secondary: '#90ED8F',
        accent: '#32297B',
        grey: '#9E9E9E',
        black: '#3D3D3D'
      }
    }
  },
  icons: {
    iconfont: 'mdi'
  }
})