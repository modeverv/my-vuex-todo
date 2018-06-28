<template>
  <div class="hello">
    <p>{{ msg3 }}</p>
    <input v-model="msg3"/>
    <button @click="reverseMessage">reverseMessage</button>
    <ol>
      <li v-for="todo in todos" v-bind:key="todo.text">
        {{ todo.text }}
      </li>
    </ol>
    <div v-if="seen">seen</div>
    {{ message }}
    <h1>{{ msg }}</h1>
    <span v-bind:title="msg2">
      xxxxxxxxxxxx
    </span>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: 'aaaaaaaa!!!!!!!' ,
      msg2: new Date().toLocaleString(),
      seen: true,
      todos : [
        { text: '11111' },
        { text: '22222' },
      ],
      msg3: 'test'
    }
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
