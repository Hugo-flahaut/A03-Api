<template>
	<div id="app">

		<Navbar :users="users" />

		<div class="auth-wrapper">
			<div class="auth-inner">
                <router-view users="users" />
                
            </div>
		</div>
	
	</div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import axios from 'axios'

export default {
    name: 'App',
	components: {
		Navbar, 
	},
  
	data() {
        return {
            users: null
        }
    },

    async created() {
        const response = await axios.get('users');

        console.log(response);

        this.user = response.data;
    }

}
</script>

<style>
#app {
	font-family: Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #000;
}

.nav-link, .navbar-brand{
	color: #ececec;
	font-size: 1em;
	text-decoration: none;
}

</style>
