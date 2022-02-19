const app = Vue.createApp({
  data() {
    return {
      user: {
        username: '',
        phone: '',
        address: '',
      },
      currentComp: 'first',
      comps: ['first', 'second', 'third'],
    };
  },
  computed: {
    noUpPage() {
      return this.comps.indexOf(this.currentComp) === 0;
    },
    noDownPage() {
      console.log(this.comps.indexOf(this.currentComp));
      return this.comps.indexOf(this.currentComp) === this.comps.length - 1;
    },
  },
  methods: {
    prev() {
      const index = this.comps.indexOf(this.currentComp);
      this.currentComp = this.comps[index - 1];
    },
    next() {
      const index = this.comps.indexOf(this.currentComp);
      this.currentComp = this.comps[index + 1];
    },
  },
});

app.component('first', {
  template: '#first',
  props: ['user-info'],
});

app.component('second', {
  template: '#second',
  props: ['user-info'],
});

app.component('third', {
  template: '#third',
  props: ['user-info'],
});

app.mount('#app');
