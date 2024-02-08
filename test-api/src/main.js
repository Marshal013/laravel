import { createApp } from "vue";
import "../src/assets/css/index.css";
import App from "./App.vue";
import { Icon } from "@iconify/vue";
import router from "./router";


const app = createApp(App);

// Menggunakan komponen "Icon"
app.component("Icon", Icon);

// Menggunakan router
app.use(router);

// Memasang aplikasi ke elemen dengan id "app"
app.mount('#app');
