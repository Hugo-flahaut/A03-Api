<template>
    <div class="container text-center mt-2">
        <h3 v-if="users" >Hello you're logged </h3>	
        <h3 v-if="!users">Hello, you're not logged in! </h3>
    </div>

</template>

<script>

export default {
    name: 'Home', 
    props:['users']
}
</script>