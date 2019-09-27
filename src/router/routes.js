// 路由懒加载模块
const Home = () => import('../pages/Home/Home.vue')
const Sort = () => import('../pages/Sort/Sort.vue')
const Recognize = () => import('../pages/Recognize/Recognize.vue')
const ShopCart = () => import('../pages/ShopCart/ShopCart.vue')
const Personal = () => import('../pages/Personal/Personal.vue')
const Search = () => import('../pages/Search/Search.vue')
const LoginPageHeader = () => import('../pages/Phone_Login/Phone_login.vue')
const EmailLogin = ()=>import('../pages/Email_Login/Email_login.vue')

import SortDetail from '../pages/second_routes/SortDetail.vue'
import Discover from '../pages/second_routes/Discover.vue'
import Chooser from '../pages/second_routes/Chooser.vue'

import DiscoverDetail from '../pages/third_routes/DiscoverDetail.vue'

export default [
  {
    path:'/Home',
    component:Home,
    meta:{
      showFooter:true
    }
  },
  {
    path:'/Sort',
    component:Sort,
    children:[
      {
        path:'/Sort/Sortdetail/:id',
        component:SortDetail,
        meta:{
          showFooter:true
        }
      },
      {
        path:'/Sort',
        redirect:'/Sort/Sortdetail/id=1'
      }
    ]
  },
  {
    path:'/Recognize',
    component:Recognize,
    children:[
      {      
        path:'/Recognize/discover',
        component:Discover,
        children:[
          {
            path:'/Recognize/discover/discoverdetail/:id',
            component:DiscoverDetail,
            meta:{
              showFooter:true
            }
          },
          {
            path:'/Recognize/discover',
            redirect:'/Recognize/discover/discoverdetail/id=1'
          }
        ]
      },
      {      
        path:'/Recognize/chooser',
        component:Chooser,
        meta:{
          showFooter:true
        }
      },
      {
        path:"/Recognize",
        redirect: '/Recognize/discover'
      }
    ],
    meta:{
      showFooter:true
    }
  },
  {
    path:'/ShopCart',
    component:ShopCart,
    meta:{
      showFooter:true
    }
  },
  {
    path:'/Personal',
    component:Personal
  },
  {
    path:'/Search',
    component:Search
  },
  {
    path:'/loginPageHeader',
    component:LoginPageHeader
  },
  {
    path:'/emaillogin',
    component:EmailLogin
  },
  {
    path:"/",
    redirect: '/Home'
  },
]
