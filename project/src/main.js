import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createVuetify } from 'vuetify'
import 'vuetify/styles'
//import { md3 } from 'vuetify/blueprints'

import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi', // Définit Material Design Icons comme jeu d'icônes
    },
    //blueprint: md3,
  })

const app = createApp(App)
app.use(vuetify)
app.mount('#app')
