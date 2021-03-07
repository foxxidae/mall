import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const ShopCar = () => import('../views/shopcar/ShopCar')
const Profile = () => import('../views/profile/Profile')
const items = () => import('../views/items/items')

Vue.use(Router)

export default new Router({
  routes: [
  {
  	path:'',
  	redirect:'/home'
  },
  {
  	path:'/home',
  	component:Home
  },
  {
  	path:'/category',
  	component:Category
  },
  {
  	path:'/shopcar',
  	component:ShopCar
  },
  {
  	path:'/profile',
  	component:Profile
  },
  ,
  {
  	path:'/items/:iid',
  	component:items
  }
  ],
  mode:'history'
})
