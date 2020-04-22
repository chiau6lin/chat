import Vue from 'vue'
import VueI18n from 'vue-i18n'

// messages
import enMessage from '@/i18n/en.json'
import zhMessage from '@/i18n/zh-TW.json'

// config vue-i18n
Vue.use(VueI18n)

// Ready translated locale messages
const messages = {
  en: enMessage,
  'zh-tw': zhMessage
}

// get default locale
// const locale = localStorage.getItem('lang')
const locale = 'zh-tw'

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale, // set locale
  fallbackLocale: 'zh-tw',
  messages // set locale messages
})

export default i18n
