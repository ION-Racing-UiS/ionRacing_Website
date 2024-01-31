document.addEventListener('DOMContentLoaded', function() {
    const HtmlPage = {
        props: ['pageUrl'],
        template: `<div v-html="htmlContent"></div>`,
        data() {
            return {
                htmlContent: '',
            };
        },
        mounted() {
            fetch(this.pageUrl)
                .then((response) => response.text())
                .then((html) => {
                    this.$el.innerHTML = html;
                });
        },
    };
    
    const routes = [
        {
            path: '/', redirect: '/home'
        },
        {
            path: '/about', component: HtmlPage, props: {pageUrl: '/pages/about.html'}
        },
        {
            path: '/team', component: HtmlPage, props: {pageUrl: '/pages/team.html'}
        },
        {
            path: '/partners', component: HtmlPage, props: {pageUrl: '/pages/partners.html'}
        },
        {
            path: '/garage', component: HtmlPage, props: {pageUrl: '/pages/garage.html'}
        },
        {
            path: '/join', component: HtmlPage, props: {pageUrl: '/pages/join.html'}
        }
    ]
    
    const router = VueRouter.createRouter({
        history: VueRouter.createWebHashHistory(),
        routes,
    });

    // Initializes the router
    const app = Vue.createApp({});
    app.use(router);
    app.mount("#app")
});


// const router = VueRouter.createRouter({
//     history: VueRouter.createWebHashHistory(),
//     routes: [
//         {
//             path: '/',
//             beforeEnter() { window.location.href = '/'; }
//         },
//         {
//             path: '/about',
//             beforeEnter() { window.location.href = '/pages/about.html'; }
//         },
//         {
//             path: '/team',
//             beforeEnter() { window.location.href = '/pages/team.html'; }
//         },
//         {
//             path: '/partners',
//             beforeEnter() { window.location.href = '/pages/partners.html'; }
//         },
//         {
//             path: '/garage',
//             beforeEnter() { window.location.href = '/pages/garage.html'; }
//         },
//         {
//             path: '/join',
//             beforeEnter() { window.location.href = '/pages/join.html'; }
//         }
//     ]
// });

// const routes = {
//     '/': Home,
//     '/about': About,
//     '/team': Team,
//     '/partners': Partners,
//     '/garage': Garage,
//     '/join': Join
// }

// const currentPath = ref(window.location.hash)

// window.addEventListener('hashchange', () => {
//     currentPath.value = window.location.hash
// });

// const currentView = computed(() => {
//     return routes[currentPath.value.slice(1) || '/'] || NotFound
// })