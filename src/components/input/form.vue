<template>
<div>
    <p>write a task and press add buton.</p>
    <input 
    :class="{hasError: isError}"
    type="text" 
    placeholder="a task"
    v-model="t" 
    @keyup.enter="aT"
    />
    <button @click="aT">add</button>
    <p class="not-show" :class="{hasError: isError}">blank is not permitted!</p>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "finput",
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
        .then(console.log("aT:" + this.t))
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
