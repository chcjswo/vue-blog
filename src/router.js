import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Project from './components/Project.vue';
import Detail from './components/Detail.vue';
import Author from './components/Author.vue';
import Comment from './components/Comment.vue';
import NotFound from './components/NotFound.vue';

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
            children: [
                {
                    path: 'author',
                    name: 'author',
                    component: Author
                },
                {
                    path: 'comment',
                    name: 'comment',
                    component: Comment
                }
            ]
        },
        {
            path: '*',
            name: 'notfound',
            component: NotFound
        },
    ]
});