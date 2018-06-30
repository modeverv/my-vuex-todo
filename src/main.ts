// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import store from '@/vuex/store';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'

})

// typescript
var str1: string = "strict";
//var str2: number = "aaae";
var srt3 = "str3";

interface Inta {
  method(): string;
}
class Parent {
  protected aaa: string;
  constructor(name: string) {
    this.aaa = name;
  }
  protected hello(word: string): string {
    return this.aaa + " world";
  }
}

class Child extends Parent implements Inta {
  protected str = 'str';

  constructor(name: string) {
    super(name);
  }

  public method(): string {
    return this.str;
  }

  public public_hello(): string {
    return this.method() + this.aaa
  }
}

var hoge: Child = new Child("test");
//alert(hoge.public_hello());
