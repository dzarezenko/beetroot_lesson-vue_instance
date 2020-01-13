import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

var vm = new Vue({
  render: function (h) { return h(App) },
  //el: "#app",
})

// Some logic

vm.$mount('#app');
