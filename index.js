  import { createApp, ref, onMounted } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
  import App from './app.vue'

  async function bootstrap() {
    const app = document.createElement('div#app')
    document.body.appendChild(app)

    createApp(App).mount(app)
  }

  bootstrap()
