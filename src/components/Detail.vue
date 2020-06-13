<template>
    <div class="container mt-5">
        <h4>상세 페이지</h4>
        <h4>{{posts[$route.params.id].title}}</h4>
        <p>{{posts[$route.params.id].content}}</p>
        <p>{{posts[$route.params.id].date}}</p>
        <p>{{posts[$route.params.id].number}}</p>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Detail",
        props: {
            posts: Array
        }
    }
</script>

<style scoped>

</style>