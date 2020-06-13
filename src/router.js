import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Project from './components/Project.vue';
import Detail from './components/Detail.vue';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/project',
            name: 'project',
            component: Project
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: Detail,
            // nested router
            // children: [
            //     {
            //         path: 'author',
            //         component: Detail
            //     },
            //     {
            //         path: 'comment',
            //         component: Detail
            //     }
            // ]
        }
    ]
});