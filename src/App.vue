<template>
  <div id="app">
    <h1>Counter: {{ counter }}</h1>
    <button @click="increase">Increase Counter</button>

    <p ref="some_paragraph">{{ text }}</p>
    <input @keyup="updateText" />

    <button @click="changeText">Change Text</button>
    <button @click="showText">Show Text</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      counter: 0,
      text: "Some text",
    }
  },
  methods: {
    increase() {
      //console.log(vm2);
      this.counter++;
    },
    showText() {
      alert(this.text);
    },
    changeText() {
      this.$refs.some_paragraph.innerText = "Some other text";
    },
    updateText(event) {
      //console.log(event);
      this.text = event.target.value;
    }
  },
  /*mounted() {
    console.log(this);
    console.log(this.$refs);
    this.$refs.some_paragraph.innerText = "Some other text";
  },*/
}
</script>
