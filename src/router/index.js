import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue"
import products from "../views/products.vue";
import categories from "../views/categories.vue";
import contact from "../views/contact.vue";


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
        path:'/categories',
        name: categories,
        component:categories
    },
    {
        path:'/contact',
        name: contact,
        component: contact
    },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router