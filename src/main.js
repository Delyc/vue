import { createApp, h } from 'vue';
import App from './App.vue'
 import BaseCard from './components/ui/BaseCard.vue'
 import BaseButton from './components/ui/BaseButton'

 
const app = createApp({
    render: ()=>h(App)
})
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.mount('#app') 