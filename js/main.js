//import components
import LoginComponent from "./components/LoginComponent.js";
import UsersComponent from "./components/UsersComponent.js";

(() => {
    let router = new VueRouter({
        //set routes
        routes: [
           { path: '/', redirect: { name: "login" } },
           { path: '/login', name: "login", component: LoginComponent },
           { path: '/users', name: "users", component: UsersComponent }
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