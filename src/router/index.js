import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue"
import products from "../views/products.vue";
import categories from "../views/categories.vue";
import contact from "../views/contact.vue";
import about from "../views/about.vue";
import cart from "../views/cart.vue";


const routes=[
    {
        path:'/',
        name: home,
        component: home
    },
    {
        path:'/products',
        name: products,
        component: products
    },
    {
        path:'/contact',
        name: contact,
        component:contact
    },
    {
        path:'/about',
        name: about,
        component: about
    },
        {
        path:'/cart',
        name: cart,
        component: cart
    },


]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router