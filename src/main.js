import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style.css";
import ClButton from "./components/ClButton.vue";

const app = createApp(App);

app.component("ClButton",ClButton);
app.use(router);
app.mount("#app");
