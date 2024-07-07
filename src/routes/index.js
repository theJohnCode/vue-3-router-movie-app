import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../views/Home.vue");
const About = () => import("../views/About.vue");
const Movies = () => import("../views/Movies.vue");
const NotFound = () => import("../views/NotFound.vue");
const MovieDetails = () => import("../views/MovieDetails.vue");

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/about",
    component: About,
    name: "About",
  },
  {
    path: "/movies",
    component: Movies,
    name: "movies",
  },
  {
    path: "/movies/:id",
    component: MovieDetails,
    name: "MovieDetails",
    props: true, // Pass the id as a prop to the MovieDetails component.  This allows us to access the id in the MovieDetails component using this.$route.params.id.  The props: true option makes the id available as a prop in the component.  If props: false, the id would be available as a query parameter in the URL.  For example, if the movie id is 1, Vue Router would generate '/movies/1'.  The path
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "md:dark:text-blue-500",
  linkExactActiveClass: "md:dark:text-blue-500",
});

export default router;
