import { createRouter, createWebHistory } from 'vue-router'
import Posts from "../components/pages/Posts"
import PostsFooter from "../components/pages/postsFooter"
import CreatePostFooter from "../components/pages/CreatePostFooter";
import CreatePost from "../components/pages/CreatePost";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import('../components/pages/Home'),

  },
  {
   path:'/posts',
    name:'posts',
    component:()=>import('../components/pages/Posts'),
      components:{
       default:Posts,
          footer: PostsFooter
      },

      children:[
          {
            path:'/noPost',
              name:'single-post',
            component:()=>import('../components/pages/NoPost')
          },
          {
              path:':id',
              component:()=>import('../components/pages/PostItem')
          }
      ]
  },

  {
    path:'/createPost',
    name:'createPost',
    components:{
        default:CreatePost,
        footer:CreatePostFooter
    }
  },
    {
        path:'/:NotFound(.*)*',
        name:'notFound',
        component:()=>import('../components/pages/NotFound')
    }
]
 const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
