import {Home, About, NotFound} from './client/pages';

export const Routes = [
    {
        url: '/',
        exact: true,
        component: Home
    },
    {
        url: '/about',
        exact: false,
        component: About
    },
    {
        url: '*',
        exact: false,
        component: NotFound
    },
]

export const MenuLinks = [
    {
        url: '/',
        menuText: 'Home'
    },
    {
        url: '/about',
        menuText: 'About'
    },
]