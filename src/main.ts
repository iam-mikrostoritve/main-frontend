import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router.ts";
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

/*createApp(App)
    .use(router)
    .use(Buefy)
    .mount('#app')*/

const app = createApp(App)

app.use(router)
app.use(Buefy)
app.mount('#app')
