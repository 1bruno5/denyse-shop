import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue"
import products from "../views/products.vue";
import categories from "../views/categories.vue";
import contact from "../views/contact.vue";
import login from "../views/Login.vue";
import signUp from "../views/signUp.vue";


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
        path:'/contact',
        name: contact,
        component: contact
    },

        {
        path:'/login',
        name: login,
        component: login
    },

            {
        path:'/signup',
        name: signUp,
        component: signUp
    },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router