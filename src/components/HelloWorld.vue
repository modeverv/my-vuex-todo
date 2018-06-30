<template>
  <div class="hello">
    <h1>買い物リスト</h1>
    <div>
      <p>{{ msg3 }}</p>
      <input type="text" v-model="t"/>
      <button @click="addTask">add</button>
    </div>
    <ul>
      <li v-for="task in tasks" v-bind:key="task">
        {{ task }}
      </li>
    </ul>
    <todo-item2 v-for="item in items" v-bind:todo="item" v-bind:key="item.text"></todo-item2>
    <todo-item></todo-item>
    <p>{{ msg3 }}</p>
    <input v-model="msg3"/>
    <button @click="reverseMessage">reverseMessage</button>
    <ol>
      <li v-for="todo in todos" v-bind:key="todo.id">
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
import VueH from 'vue'
VueH.component('todo-item', {
  template: '<li>This is todo</li>'
})
VueH.component('todo-item2', {
  props: ['todo'],
  template: '<li>{{ todo.id }}:{{ todo.text }}</li>'
})
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
        { text: '22222' }
      ],
      msg3: 'test',
      items : [
        { id: 0, text: '000000'},
        { id: 1, text: '111111'}
      ],
      tasks : [
        "牛乳",
        "たまご",
        "ジュース"
      ],
      t: "",
    }
  },
  created: function(){
    console.log(new Date());
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },
    addTask: function(){
      this.tasks.push(this.t);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
