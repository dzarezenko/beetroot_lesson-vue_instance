import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component("hello", {
  template: "<h1>Hello</h1>",
});

var vm = new Vue({
  render: function (h) { return h(App) },
  //el: "#app",
})

// Some logic

vm.$mount('#app');
console.log(vm);

var vm2 = new Vue({
  render: function (h) { return h(App) },
  //el: "#app",
})

// Some logic

//vm2.$mount('#app2');

/*var vm3 = new Vue({
  el: "#app2",
  template: "<p>Some text</p>"
})*/
