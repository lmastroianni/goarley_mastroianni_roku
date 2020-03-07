//import components
import HomePage from "./components/HomePage.js";
import LoginComponent from "./components/LoginComponent.js";

(() => {
    let router = new VueRouter({
        //set routes
        routes: [
           { path: '/', redirect: { name: "login" } },
           { path: '/login', name: "login", component: LoginComponent },
           { path: '/home', name: "home", component: HomePage }
        ]
    });

    const vm = new Vue({
        
        data: {

        },

        created: function() {

        console.log('fired');
        },

        methods: {

        },
        router: router
    }).$mount("#app");



})();