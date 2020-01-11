<template>
  <div id="app">
    <h1>Counter: {{ counter }}</h1>
    <button @click="increaseCounter">Increase</button>
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
    increaseCounter() {
      this.counter++;
    }
  },
}
</script>
