const ConditionalRendering = {
    data() {
        return {
            seen: true
        }
    }
}

Vue.createApp(ConditionalRendering).mount('#conditional-rendering')

const TwoWayBinding ={
    data(){
        return{
            message: 'Hello Vue!'
        }
    }
}
Vue.createApp(TwoWayBinding).mount('#two-way-binding')