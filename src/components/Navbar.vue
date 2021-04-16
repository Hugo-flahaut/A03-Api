<template>
    <nav class="navbar navbar-expand-lg bg-dark">
        
        <div class="container">
            <router-link class="navbar-brand" to="/">Home</router-link>
            <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> -->
            <div class="navbar-nav" id="navbarNav">
                <ul class="navbar-nav ml-auto" v-if="!users">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/register">Sign up</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto" v-if="users">
                    <li class="nav-item">
                        <a href="javascript:void(0)" @click="handleClick" class="nav-link">Logout</a>
                    </li>
                    <!-- <li class="nav-item">
                        <router-link class="nav-link" to="/register">Sign up</router-link>
                    </li> -->
                </ul>
            </div>
        </div>
    </nav>
</template>		

<script>
export default {
    name: 'Navbar',
    props: ['users'],
    methods: {
        handleClick() {
            localStorage.removeItem('token');
            this.$router.push('/');
        }
    }
}
</script>
