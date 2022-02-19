const app = Vue.createApp({
  data() {
    return {
      form: {},
      currentComp: 'first',
    };
  },
  methods: {
    changePage(val) {
      this.currentComp = val;
    },
    updateFormData(val) {
      this.form[val.key] = val.value;
    },
  },
  computed: {
    computedForm() {
      if (this.currentComp === 'third') return this.form;
    },
  },
});

app.component('first', {
  template: '#first',
  props: ['form-data'],
  data() {
    return {
      username: '',
      phone: '',
    };
  },
  methods: {
    goToSecond() {
      this.$emit('changePage', 'second');
    },
  },
  watch: {
    username: {
      handler(val) {
        this.$emit('updateForm', { key: 'username', value: val });
      },
    },
    phone: {
      handler(val) {
        this.$emit('updateForm', { key: 'phone', value: val });
      },
    },
  },
});

app.component('second', {
  template: '#second',
  props: ['form-data'],
  data() {
    return {
      address: '',
    };
  },
  methods: {
    goToFirst() {
      this.$emit('changePage', 'first');
    },
    goToThird() {
      this.$emit('changePage', 'third');
    },
  },
  watch: {
    address: {
      handler(val) {
        this.$emit('updateForm', { key: 'address', value: val });
      },
    },
  },
});

app.component('third', {
  template: '#third',
  props: ['form-data'],
  methods: {
    goToSecond() {
      this.$emit('changePage', 'second');
    },
  },
});

app.mount('#app');
