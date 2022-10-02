import {
  createRouter,
  createWebHistory
} from "vue-router";

const routes = [{
    path: "/",
    name: "home",
    component: () =>
      import( /* webpackChunkName: "home" */ "../views/MainPage.vue"),
  },
  {
    path: "/about",
    name: "search",

    component: () =>
      import( /* webpackChunkName: "search" */ "../App.vue"),
  },
  {
    path: "/playmusic",
    name: "playmusic",
    component: () =>
      import( /* webpackChunkName: "playmusic" */ "../views/MusicDetails.vue"),
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () =>
      import( /* webpackChunkName: "favorites" */ "../App.vue"),
  },
  {
    path: "/playlists",
    name: "playlists",
    component: () =>
      import( /* webpackChunkName: "playlists" */ "../views/ListPlaylists.vue"),
    children: {
      path: ":id",
      name: "playlistarchive",
      component: () =>
        import( /* webpackChunkName: "playlistarchive" */ "../views/PlayListArchive.vue"),
    },
  },
  {
    path: "/upload",
    name: "upload",
    component: () =>
      import( /* webpackChunkName: "upload" */ "../views/UploadMusic.vue"),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import(/* webpackChunkName: "404" */ '../views/NotFound.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "nav__item--active",
});

export default router;