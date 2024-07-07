import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './routes'
import Spinner from './components/Spinner.vue'

const app = createApp(App)
const pinia = createPinia();

app.component('LoadingSpinner', Spinner);
app.use(router);
app.use(pinia);
app.mount('#app');
