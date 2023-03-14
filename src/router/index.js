import {
  createRouter,
  createWebHashHistory, 
} from "vue-router";

const routes = [{
    path: "/",
    name: "home",
    component: () => import( /* webpackChunkName: "home" */ "../views/MainPage.vue"),
    meta: [{
      user: undefined
    }]
  },
  {
    path: "/login",
    name: "login",
    component: () => import( /* webpackChunkName: "login" */ "../views/LoginSignup.vue"),
    meta: [{
      user: undefined
    }]
  },
  {
    path: "/search",
    name: "search",
    component: () => import( /* webpackChunkName: "search" */ "../views/NotFound.vue"),
    meta: [{
      user: undefined
    }]
  },
  {
    path: "/playmusic",
    name: "playmusic",
    component: () => import( /* webpackChunkName: "playmusic" */ "../views/MusicDetails.vue"),
    meta: [{
      user: undefined
    }]
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () => import( /* webpackChunkName: "playlistarchive" */ "../views/PlayListArchive.vue"),
    // component: () => import( /* webpackChunkName: "favorites" */ "../views/NotFound.vue"),
    meta: [{
      user: undefined
    }]
  },
  {
    path: "/playlists",
    name: "playlists",
    component: () => import( /* webpackChunkName: "playlists" */ "../views/ListPlaylists.vue"),
    meta: [{
      user: undefined
    }],
    children: {
      path: ":id",
      name: "playlistarchive",
      component: () => import( /* webpackChunkName: "playlistarchive" */ "../views/PlayListArchive.vue"),
      meta: [{
        user: undefined
      }]
    },
  },
  {
    path: "/upload",
    name: "upload",
    component: () => import( /* webpackChunkName: "upload" */ "../views/UploadMusic.vue"),
    meta: [{
      user: undefined
    }]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import( /* webpackChunkName: "404" */ '../views/NotFound.vue'),
    meta: [{
      user: undefined
    }]
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "nav__item--active",
});

// const Router = useRouter();

router.beforeEach((to) => {
  if (!to.meta.user) {
    // Router.
    // return {
    //   path: "/login",
      // name: 'login'
    // }
  }
  return;
})

export default router;