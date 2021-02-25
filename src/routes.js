import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from './views/vserouter/Posts'
import Single from './views/vserouter/Single';
import Smartigadget from './views/vserouter/Smartigadget';
import search from './views/vserouter/search';
import apple from './views/vserouter/apple';
import cart from './views/vserouter/cart';
import SignIn from './views/vserouter/SignIn';
import SignUp from './views/vserouter/SignUp';
import user from './views/vserouter/user';
import Favorites from './views/vserouter/Favorites';
import Profile from './views/vserouter/Profile';
import address from './views/vserouter/address';
import like from './views/vserouter/like';
import addressPUT from './views/vserouter/addressPUT';
import order from './views/vserouter/order';
import orderTrue from './views/vserouter/orderTrue';
import samsung from './views/vserouter/samsung';
import oppo from './views/vserouter/oppo';
import xiaomi from './views/vserouter/xiaomi';
import huawei from './views/vserouter/huawei';
import smartphone from './views/vserouter/smartphone';
Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    name: 'posts',
    component: Posts,
    
    
    },
    {
    path: '/:id',
    name: 'Single',
    component: Single,
    props:true
    },
    {
    path: '/category/aplle',
    name: 'apple',
    component: apple
    
    },
    {
    path: '/category/smartigadget',
    name: 'Smartigadget',
    component: Smartigadget
    
    },
    {
    path: '/smartphone/aplle/',
    name: 'search',
    component: search
    
    },
    {
    path: '/shop/cart/',
    name: 'cart',
    component: cart
    
    },
    {
    path: '/auth/signin',
    name: 'SignIn',
    component: SignIn
    
    },
    {
    path: '/auth/register/',
    name: 'SignUp',
    component: SignUp
    
    },
    {
    path: '/user/new/eee/ww/tt',
    name: 'user',
    component: user
    
    },
    {
    path: '/shop/favorites',
    name: 'Favorites',
    component: Favorites
    
    },
    
    {
    path: '/shop/profile',
    name: 'Profile',
    component: Profile
    
    },
    {
    path: '/shop/address',
    name: 'address',
    component: address
    
    },
    {
    path: '/shop/like',
    name: 'like',
    component: like
    
    },
    {
    path: '/shop/address/put',
    name: 'addressPUT',
    component: addressPUT
    
    },
    {
    path: '/shop/order',
    name: 'order',
    component: order
    
    },
    {
    path: '/shop/customer/order',
    name: 'orderTrue',
    component: orderTrue
    
    },
    {
    path: '/category/oppo',
    name: 'oppo',
    component: oppo
    
    },
    {
    path: '/category/xiaomi',
    name: 'xiaomi',
    component: xiaomi
    
    },
    {
    path: '/category/samsung',
    name: 'samsung',
    component: samsung
    
    },
    {
    path: '/category/huawei',
    name: 'huawei',
    component: huawei
    
    },
    {
    path: '/category/smartphone',
    name: 'smartphone',
    component: smartphone
    
    },

    
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router

