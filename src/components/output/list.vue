<template>
<ul>
    <li v-for="task in tasks" v-bind:key="task">
        {{ task }}
    </li>
</ul>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

export default Vue.extend({
  name: "List",
  data() {
    return {
      tasks: ["aaa","bbbbb"],
    };
  },
  created: function() {},
  methods: {
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
