import Vue from 'vue'
import VueRouter from 'vue-router'
import page from '../components/page.vue'
import article from '..//components/article.vue'
import image from '../components/image.vue'
import articleRead from '../components/articleRead.vue'
import imageInfo from '../components/imageInfo.vue'
import video from '../components/video.vue'
import videoInfo from '../components/videoInfo.vue'
import message from '../components/message.vue'
import messageInfo from '../components/messageInfo.vue'
import userPage from '../components/userPage.vue'
import edit from '../components/edit.vue'
import creation from '../components/creation.vue'
import myOpus from '../components/myOpus.vue'
import userPageNew from '../components/userPageNew.vue'
import { NavPlugin } from 'bootstrap-vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/page' },
    { path: '/page', component: page },
    { path: '/article', component: article },
    { path: '/image', component: image },
    { path: '/articleRead', component: articleRead },
    { path:'/imageInfo', component: imageInfo},
    { path:'/video',component:video},
    { path:'/videoInfo',component:videoInfo},
    { path:'/message',component:message},
    { path:'/messageInfo',component:messageInfo},
    { path:'/userPage',component:userPage},
    { path:'/edit',component:edit},
    { path:'/creation',component:creation},
    { path:'/myOpus',component:myOpus},
    { path:'/userPageNew',component:userPageNew},
  ]
})

router.beforeEach( (to,from,next)=>{
  function isPop(){
    Vue.prototype.global.revisePop();
  }
  const token = localStorage.getItem('token');
  
  if(!token){
    if(to.path == '/creation' || to.path == '/userPage' || to.path == '/edit' || to.path == '/myOpus'){
      isPop();
      next({path:'/page'});
    }else{
      next();
    }
  }else{
    next();
    
  }
}

)

export default router
