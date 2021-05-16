Vue.createApp({
  data() {
    return {
      posts: {},

    }
  },
  mounted() {

    let self = this;

    $.getJSON('/api/posts.api.json', function (data) {

      self.posts = data;

      console.log(JSON.stringify(data));

      setTimeout(function () {
        lazyload(document.querySelectorAll(".lazyload"));

      }, 1000);

    });

  },
  methods: {
    changeTheme(theme) {
      console.log(theme);
      document.documentElement.classList.remove(this.settings.theme);
      document.documentElement.classList.add(theme);
      this.settings.theme = theme;
    }
  }
})
.mount('#app')
