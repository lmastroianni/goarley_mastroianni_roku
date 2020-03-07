<header>
    <div id="headCon">
        <h2 class="hidden">Header Area</h2>
        <div id="logo">
            <router-link class="route" to="/home"><img src="./public/images/logo.svg" alt="Roku Logo"></router-link>
        </div>
        <div id="mainNav">
            <!-- the nav will consist of movies, tvshows, etc that will route to one another-->
                <router-link class="route" to="/home">HOME</router-link>
                <router-link class="route" to="/facts">FACTS</router-link>
                <router-link class="route" to="/signup">SIGNUP</router-link>
        </div>
    </div>
</header>