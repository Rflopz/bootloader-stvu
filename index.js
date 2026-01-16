  import { createApp, ref, onMounted } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

  async function bootstrap() {
    const app = document.createElement('div#app')
    document.body.appendChild(app)

    const vue = {
      template: `
        <div>
          <h1>Hello World</h1>
        </div>
      `,
      setup() {
        onMounted(() => {
          console.log('vue mounted')
        })
      }
    }

    createApp(vue).mount(app)
  }

  bootstrap()
