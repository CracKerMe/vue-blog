import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import Article from './components/Article.vue'
import ArticleContent from './components/Article-Content.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter()

router.map({
  // '/': {
  //   component: Article
  // },
  '/article': {
    name: 'article-list',
    component: Article
  },
  '/article/:num': {
    name: 'article-content',
    component: ArticleContent
  }
})

router.beforeEach((transition) => {
  transition.next()
})

router.afterEach((transition) => {
  window.scrollTo(0, 0)
})

router.start(App, '#app')