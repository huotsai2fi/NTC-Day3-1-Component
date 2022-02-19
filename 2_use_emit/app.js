const app = Vue.createApp({
  data() {
    return {
      user: {
        username: '',
        phone: '',
        address: '',
      },
      currentComp: 'first',
    };
  },
  methods: {
    changePage(val) {
      this.currentComp = val;
    },
  },
});

app.component('first', {
  template: '#first',
  props: ['user-info'],
  methods: {
    goToSecond() {
      this.$emit('changePage', 'second');
    },
  },
});

app.component('second', {
  template: '#second',
  props: ['user-info'],
  methods: {
    goToFirst() {
      this.$emit('changePage', 'first');
    },
    goToThird() {
      this.$emit('changePage', 'third');
    },
  },
});

app.component('third', {
  template: '#third',
  props: ['user-info'],
  methods: {
    goToSecond() {
      this.$emit('changePage', 'second');
    },
  },
});

app.mount('#app');
