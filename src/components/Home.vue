<template>
    <div class="container my-5">
        <div v-for="(post, i) in posts" :key="i">
            <h4 v-on:click="$router.push({name: 'detail', params: {id: post.number}})">{{post.title}}</h4>
            <p>{{post.content}}</p>
            <p>{{post.date}}</p>
            <p>{{post.number}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        props: {
            posts: Array
        }
    }
</script>

<style scoped>

</style>