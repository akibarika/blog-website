const blogListPerPageCount = 5
const activePaginationClassName = 'active-pagination-link'
const blogListQs = 'fields=_id,title,summary,createTime,viewTimes,tags,category'
const blogQs =
    'fields=title,summary,createTime,viewTimes,tags,category,htmlContent,toc'
const apiPrefix = '/api'

const navList = [
    {
        key: 'home',
        to: '/blogs',
        name: 'Home',
        icon: 'fas fa-home',
        exact: false
    },
    {
        key: 'categories',
        to: '/categories',
        name: 'Categories',
        icon: 'fas fa-th',
        exact: false
    },
    {
        key: 'tags',
        to: '/tags',
        name: 'Tags',
        icon: 'fas fa-tags',
        exact: false
    },
    {
        key: 'about',
        to: '/about',
        name: 'About',
        icon: 'fas fa-user',
        exact: false
    }
]

export {
    blogListPerPageCount,
    activePaginationClassName,
    blogListQs,
    navList,
    apiPrefix,
    blogQs
}
