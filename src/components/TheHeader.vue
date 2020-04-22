<template>
  <!-- id should be same as component object name -->
  <div id="header">
    <div class="header__title">{{ title }}</div>
    <div class="o-button-group">
      <div
        role="button"
        class="o-button"
        @click="switchLang('zh-tw')"
        :class="{ 'o-button--active' : language === 'zh-tw' }"
      >
        中文
      </div>
      <div
        role="button"
        class="o-button"
        @click="switchLang('en')"
        :class="{ 'o-button--active' : language === 'en' }"
      >
        English
      </div>
    </div>
    <div class="profile">
      <div class="profile__avatar">
        <img src="../assets/img/avatar/jessica.svg" alt="Jessica Avatar">
      </div>
      <span>潔西卡</span>
    </div>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n'

export default {
  name: 'Header',
  props: {
    title: String,
    default: ''
  },
  data () {
    return {
      language: i18n.locale
    }
  },
  methods: {
    switchLang (lang) {
      i18n.locale = this.language = lang
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#header {
  // position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $main-theme-color;
  padding: 5px 20px;
  color: #fff;
  .o-button-group {
    margin-left: 50px;
  }
}

.header__title {
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
}

.profile__avatar {
  // position: absolute;
  // right: 0;
  // top: 0;
  display: inline-block;
  width: 60px;
  height: 60px;
  vertical-align: middle;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
