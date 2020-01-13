<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <button @click="changeTitle">Change Title</button>
    <button @click="destroy">Kill</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Some title",
    }
  },

  beforeCreate() {
    console.log("[VUE] beforeCreate()");
  },
  created() {
    console.log("[VUE] created()");
  },

  beforeMount() {
    console.log("[VUE] beforeMount()");
  },
  mounted() {
    console.log("[VUE] mounted()");
  },

  beforeUpdate() {
    console.log("[VUE] beforeUpdate()");
  },
  updated() {
    console.log("[VUE] updated()");
  },

  beforeDestroy() {
    console.log("[VUE] beforeDestroy()");
  },
  destroyed() {
    console.log("[VUE] destroyed()");
  },

  methods: {
    changeTitle() {
      //alert("call!");
      this.title+= "a";//"Some New Title";
    },
    destroy() {
      this.$destroy();
    },
  },
}
</script>
