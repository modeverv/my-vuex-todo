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
import { mapGetters } from "vuex";

@Component<List>({
  name: 'List',
  computed: {
    ...mapGetters(['tasks'])
  },
})
export default class List extends Vue {
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
