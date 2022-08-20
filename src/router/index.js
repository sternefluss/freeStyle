import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index.vue'
import Page1 from '@/pages/Page1/Page1.vue'
import Page2 from '@/pages/Page2/Page2.vue'
import Page3 from '@/pages/Page3/Page3.vue'
import Page4 from '@/pages/Page4/Page4.vue'
import Page5 from '@/pages/Page5/Page5.vue'
import Page6 from '@/pages/Page6/Page6.vue'
import Page7 from '@/pages/Page7/Page7.vue'
import Page8 from '@/pages/Page8/Page8.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/2',
      name: 'Page2',
      component: Page2
    },
    {
      path: '/3',
      name: 'Page3',
      component: Page3
    },
    {
      path: '/4',
      name: 'Page4',
      component: Page4
    },
    {
      path: '/5',
      name: 'Page5',
      component: Page5
    },
    {
      path: '/6',
      name: 'Page6',
      component: Page6
    },
    {
      path: '/7',
      name: 'Page7',
      component: Page7
    },
    {
      path: '/8',
      name: 'Page8',
      component: Page8
    }
  ]
})
