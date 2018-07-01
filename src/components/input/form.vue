<template>
  <div>
    <p>write a task and press add buton.</p>
    <input 
      :class="{hasError: isError}"
      v-model="t" 
      placeholder="a task"
      type="text" 
      @keyup.enter="aT"
    >
    <button @click="aT">add</button>
    <p
      :class="{hasError: isError}"
      class="not-show">
      blank is not permitted!
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
//import Component from "vue-class-component";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "FInput",
  data() {
    return {
      t: "",
      isError: false
    };
  },
  methods: {
    aT: function() {
      if ("" == this.t) {
        this.isError = true;
        return;
      } else {
        this.isError = false;
      }
      this.addTask(this.t)
        .then(window.console.log("aT => " + this.t))
        .then((this.t = ""));
    },
    ...mapActions(["addTask"])
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.not-show {
  display: none;
}
p.hasError {
  display: block;
  color: red;
}
input.hasError {
  border-color: red;
}
</style>
