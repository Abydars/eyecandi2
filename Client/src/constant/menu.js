import {
    Home,
    File,
    Headphones, Star, Command, Calendar
} from 'react-feather';

export const MENUITEMS = [
    {
        title: 'Dashboard', icon: Home, type: 'sub', badgeType: 'primary', active: true,
        // children: [
            // { path: '/dashboard/ecommerce', title: 'E-Commerce', type: 'link' },
            // { path: '/dashboard/university', title: 'University', type: 'link' },
            // { path: '/dashboard/crypto', title: 'Crypto', type: 'link' },
            // { path: '/dashboard/project', title: 'Project', type: 'link' }
        // ]
    },
    {
        title: 'Frames', icon: Calendar, type: 'link', path: '/FramesGallery', active: false
    },
    {
        title: 'Bookings', icon: Calendar, type: 'link', path: '/bookings', active: false
    },
    {
        title: 'Messages', icon: Command, type: 'link', path: '/messages', active: false
    },
    {
        title: 'Ratings', icon: Star, type: 'link', path: '/ratings', active: false
    },
]
