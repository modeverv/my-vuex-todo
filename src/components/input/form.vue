<template>
<div class="hello">
    <div>
        <p>write a task and press add buton.</p>
        <input 
        type="text" 
        placeholder="a task"
        v-model="t" 
        @keyup.enter="addTask"
        />
        <button @click="console.log(t)">add</button>
    </div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

export default Vue.extend({
  name: "finput",
  data() {
    return {
      t: ""
    };
  },
  methods: {
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
