import { createApp } from 'vue'
import axios from 'axios';
import App from './App.vue'
import router from './router'
import Bill from './Layout/Wrapper/Bill.vue'
import Default from './Layout/Wrapper/MasterRocker.vue'
import Blank from './Layout/Wrapper/MasterNewRocker.vue'

import Toaster from "@meforma/vue-toaster";
const app = createApp(App)

app.use(router, axios, Toaster)
app.component("default-layout", Default);
app.component("new-layout", Blank);
app.component("bill-layout", Bill);
app.mount("#app")