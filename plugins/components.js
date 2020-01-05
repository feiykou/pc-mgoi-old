import Vue from 'vue'

const Button = () => import("@/components/mgoi-button.vue");
const Menu = () => import('@/components/menu.vue');

Vue.component('MButton', Button)
Vue.component('Menu', Menu)