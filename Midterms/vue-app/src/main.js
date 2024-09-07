import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import { Line as LineChart } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js'

// Register components and chart.js elements
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale)

const app = createApp(App)

app.component('Swiper', Swiper)
app.component('SwiperSlide', SwiperSlide)
app.component('LineChart', LineChart)

app.mount('#app')
