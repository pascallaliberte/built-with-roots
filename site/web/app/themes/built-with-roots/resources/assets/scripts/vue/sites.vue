<template>
  <div class="sites">
    <div v-for="site in sites">
      <site :site="site"></site>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import Site from './site.vue'

Vue.use(VueResource)

const baseURL = "/wp-json/wp/v2/";

export default {
  components: {
    Site
  },
  data() {
    return {
      perPage: 20,
      pageNum: 1,
      sites: [],
      totalResults: null,
      numPages: null,
    }
  },
  created() {
    this.getSites();
  },
  methods: {
    getSites() {
      this.$http.get(this.siteListUrl).then(function(res) {
        this.sites = res.body
        this.totalResults = res.headers.get('X-WP-Total')
        this.numPages = res.headers.get('X-WP-TotalPages')
      }, function(res) {
        console.log('error', res);
      });
    }
  },
  computed: {
    siteListUrl() {
      let url = baseURL + 'site'
      url += "?per_page=" + this.perPage
      url += "&page=" + this.pageNum
      return url
    }
  }
}
</script>
