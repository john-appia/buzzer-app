
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        name: 'home', 
        component: () => import('pages/IndexPage.vue'), 
        meta: { alreadyLogin: true } 
      },
      { 
        path: 'competition', 
        name: 'competition', 
        component: () => import('pages/Competiton.vue'), 
        meta: { requireAuth: true } 
      }
    ]
  },
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/IndexPage.vue') }
  //   ]
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
