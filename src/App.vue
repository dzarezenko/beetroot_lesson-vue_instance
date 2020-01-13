<template>
  <div id="app">
    <h1>Counter: {{ counter }}</h1>
    <button @click="increase">Increase Counter</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    increase() {
      this.counter++;
    }
  }
}
</script>
