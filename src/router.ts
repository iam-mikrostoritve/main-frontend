import { createMemoryHistory, createRouter } from 'vue-router'


import HelloWorld from "./components/Home.vue";
import ProductsTable from "products-table/ProductsTable";

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/about', component: ProductsTable},
    /*{ path: '/about', component: () => import("products_table/ProductsTable")},*/
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router