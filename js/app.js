// app.js

const TempConverter = {
  data() {
    return {
      celsius: undefined,
      fahrenheit: undefined,
    };
  },

  methods: {
    celsiusChanged($event) {
      if ($event) {
        $event.preventDefault();
      }
      if (parseInt($event.target.value) != NaN) {
        this.celsius = $event.target.value;
        this.fahrenheit = ($event.target.value * 9/5) + 32;
      }
    },

    fahrenheitChanged($event) {
      if ($event) {
        $event.preventDefault();
      }
      if (parseInt($event.target.value) != NaN) {
        this.fahrenheit = $event.target.value;
        this.celsius = ($event.target.value - 32) * 5/9;
      }
    },
  },
};

const TempConverterApp = Vue.createApp(TempConverter).mount("#app");

