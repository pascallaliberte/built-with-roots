<template>
  <div class="site">
    <a v-if="site.acf.site_url" :href="site.acf.site_url" :class="imageClass">
      <img v-if="site.acf.site_screenshot_desktop" class="img-fluid site-desktop-image" :src="site.acf.site_screenshot_desktop.url">
      <span class="site-label" :class="labelClass">
        {{ siteLabel }}
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
    siteLabel() {
      const regexp = /^https?:\/\/(.*)/
      let matches = this.site.acf.site_url.match(regexp)
      return matches[1]
    },
    labelClass() {
      let c = ""
      c += " " + this.labelClassTheme
      c += " " + this.labelClassPosition
      return c
    },
    labelClassTheme() {
      let c = "site-label-theme-"
      if ((this.site.id % 2 == 0 || this.site.id % 7 == 0 || this.site.id % 11 == 0) && this.site.id % 6 != 0) {
        c += "light"
      } else {
        c += "dark"
      }
      return c
    },
    labelClassPosition() {
      let c = "site-label-pos-"
      if (this.site.id % 3 == 0) {
        c += "left"
      } else if (this.site.id % 3 == 1) {
        c += "center"
      } else {
        c += "right"
      }
      return c
    },
    imageClass() {
      let c = "site-image-size-"
      if (this.site.id % 4 == 0) {
        c += "sm"
      } else if (this.site.id % 4 == 1) {
        c += "lg"
      } else if (this.site.id % 4 == 2) {
        c += "xl"
      } else {
        c += "md"
      }
      return c
    }
  }
}
</script>
