import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _64454225 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages_about_index" */))
const _478a4ebd = () => interopDefault(import('..\\pages\\about\\index\\index.vue' /* webpackChunkName: "pages_about_index_index" */))
const _f5a6f586 = () => interopDefault(import('..\\components\\about\\contact.vue' /* webpackChunkName: "components_contact" */))
const _51f7f386 = () => interopDefault(import('..\\components\\about\\news.vue' /* webpackChunkName: "components_news" */))
const _9d89ad4a = () => interopDefault(import('..\\components\\about\\recruit.vue' /* webpackChunkName: "components_recruit" */))
const _bc605428 = () => interopDefault(import('..\\pages\\column\\index.vue' /* webpackChunkName: "pages_column_index" */))
const _b0e385d4 = () => interopDefault(import('..\\pages\\column\\index\\index.vue' /* webpackChunkName: "pages_column_index_index" */))
const _dc5a2cca = () => interopDefault(import('..\\components\\column-list.vue' /* webpackChunkName: "components_column-list" */))
const _2b03ad83 = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages_product_index" */))
const _4ad609b0 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages_search" */))
const _f9db1b2e = () => interopDefault(import('..\\pages\\theme\\index.vue' /* webpackChunkName: "pages_theme_index" */))
const _361b3958 = () => interopDefault(import('..\\pages\\column\\_id.vue' /* webpackChunkName: "pages_column__id" */))
const _e8d596aa = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages_product__id" */))
const _1b8809de = () => interopDefault(import('..\\pages\\theme\\_id.vue' /* webpackChunkName: "pages_theme__id" */))
const _751fae82 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/about",
      component: _64454225,
      children: [{
        path: "",
        components: {
          default: _478a4ebd,
          contact: _f5a6f586,
          news: _51f7f386,
          recruit: _9d89ad4a
        },
        name: "about-index"
      }]
    }, {
      path: "/column",
      component: _bc605428,
      children: [{
        path: "",
        components: {
          default: _b0e385d4,
          columnList: _dc5a2cca
        },
        name: "column-index"
      }]
    }, {
      path: "/product",
      component: _2b03ad83,
      name: "product"
    }, {
      path: "/search",
      component: _4ad609b0,
      name: "search"
    }, {
      path: "/theme",
      component: _f9db1b2e,
      name: "theme"
    }, {
      path: "/column/:id",
      component: _361b3958,
      name: "column-id"
    }, {
      path: "/product/:id",
      component: _e8d596aa,
      name: "product-id"
    }, {
      path: "/theme/:id",
      component: _1b8809de,
      name: "theme-id"
    }, {
      path: "/",
      component: _751fae82,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
