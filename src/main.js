import { createApp } from 'vue'
import App from './App.vue'
// import ModalComp from './components/ModalComp.vue'
import ModalDialog from './components/ModalDialog.vue'

const app = createApp(App)

// app.component('modal-comp', ModalComp)
app.component('modal-dialog', ModalDialog)
app.mount('#app')
