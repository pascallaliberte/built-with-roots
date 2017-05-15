<template>
  <div class="site">
    <a v-if="site.acf.site_url" :href="site.acf.site_url">
      <img v-if="site.acf.site_screenshot_desktop" class="img-fluid site-desktop-image" :src="site.acf.site_screenshot_desktop.url">
      <span class="site-label">
        {{ site_label }}
      </span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    site: {
      type: Object
    }
  },
  computed: {
    site_label() {
      const regexp = /^https?:\/\/(.*)/
      let matches = this.site.acf.site_url.match(regexp)
      return matches[1]
    }
  }
}
</script>
