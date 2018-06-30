<template>
<div class="hello">
    <h1>Vuex Todo</h1>
    <f-input></f-input>
    <f-list></f-list>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import FInput from '@/components/input/form.vue';
import FList from '@/components/output/list.vue';

//export default class Hello extends Vue {
export default Vue.extend({
  name: "Root",
  components: {
    FInput,
    FList,
  },
  data() {
    return {
      tasks: [],
      t: ""
    };
  },
  created: function() {},
  methods: {
    addTask: function() {
      if ("" != this.t) {
        this.tasks.push(this.t);
        this.t = "";
      }
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  /*  list-style-type: none;*/
  padding: 0;
}
li {
  /*  display: inline-block;*/
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
