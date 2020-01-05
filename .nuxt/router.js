import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0302caf9 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages_about_index" */))
const _9f06212e = () => interopDefault(import('..\\pages\\about\\index\\index.vue' /* webpackChunkName: "pages_about_index_index" */))
const _23c1b42e = () => interopDefault(import('..\\components\\about\\contact.vue' /* webpackChunkName: "components_contact" */))
const _5b461b4c = () => interopDefault(import('..\\components\\about\\news.vue' /* webpackChunkName: "components_news" */))
const _1a2dca07 = () => interopDefault(import('..\\components\\about\\recruit.vue' /* webpackChunkName: "components_recruit" */))
const _4a7930d0 = () => interopDefault(import('..\\pages\\column\\index.vue' /* webpackChunkName: "pages_column_index" */))
const _5cefb1ea = () => interopDefault(import('..\\pages\\column\\index\\index.vue' /* webpackChunkName: "pages_column_index_index" */))
const _782fb304 = () => interopDefault(import('..\\pages\\gift\\index.vue' /* webpackChunkName: "pages_gift_index" */))
const _2bc39988 = () => interopDefault(import('..\\pages\\pets.vue' /* webpackChunkName: "pages_pets" */))
const _10825157 = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages_product_index" */))
const _d5e29a08 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages_search" */))
const _21cffb3d = () => interopDefault(import('..\\pages\\theme\\index.vue' /* webpackChunkName: "pages_theme_index" */))
const _884d7d70 = () => interopDefault(import('..\\pages\\column\\list.vue' /* webpackChunkName: "pages_column_list" */))
const _fd63e4bc = () => interopDefault(import('..\\pages\\gift\\list.vue' /* webpackChunkName: "pages_gift_list" */))
const _f2954944 = () => interopDefault(import('..\\pages\\product\\news.vue' /* webpackChunkName: "pages_product_news" */))
const _52c92503 = () => interopDefault(import('..\\pages\\theme\\list.vue' /* webpackChunkName: "pages_theme_list" */))
const _7eb67000 = () => interopDefault(import('..\\pages\\column\\_id.vue' /* webpackChunkName: "pages_column__id" */))
const _2a52bd7f = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages_product__id" */))
const _32a4ae36 = () => interopDefault(import('..\\pages\\theme\\_id.vue' /* webpackChunkName: "pages_theme__id" */))
const _f934a7a4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _0302caf9,
    children: [{
      path: "",
      components: {
        default: _9f06212e,
        contact: _23c1b42e,
        news: _5b461b4c,
        recruit: _1a2dca07
      },
      name: "about-index"
    }]
  }, {
    path: "/column",
    component: _4a7930d0,
    children: [{
      path: "",
      component: _5cefb1ea,
      name: "column-index"
    }]
  }, {
    path: "/gift",
    component: _782fb304,
    name: "gift"
  }, {
    path: "/pets",
    component: _2bc39988,
    name: "pets"
  }, {
    path: "/product",
    component: _10825157,
    name: "product"
  }, {
    path: "/search",
    component: _d5e29a08,
    name: "search"
  }, {
    path: "/theme",
    component: _21cffb3d,
    name: "theme"
  }, {
    path: "/column/list",
    component: _884d7d70,
    name: "column-list"
  }, {
    path: "/gift/list",
    component: _fd63e4bc,
    name: "gift-list"
  }, {
    path: "/product/news",
    component: _f2954944,
    name: "product-news"
  }, {
    path: "/theme/list",
    component: _52c92503,
    name: "theme-list"
  }, {
    path: "/column/:id",
    component: _7eb67000,
    name: "column-id"
  }, {
    path: "/product/:id",
    component: _2a52bd7f,
    name: "product-id"
  }, {
    path: "/theme/:id",
    component: _32a4ae36,
    name: "theme-id"
  }, {
    path: "/",
    component: _f934a7a4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
