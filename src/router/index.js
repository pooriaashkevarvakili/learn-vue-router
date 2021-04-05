import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import('../components/pages/Home')
  },
  {
   path:'/posts',
    name:'posts',
    component:()=>import('../components/pages/Posts')
  },
  {
    path:'/createPost',
    name:'createPost',
    component:()=>import('../components/pages/CreatePost')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
