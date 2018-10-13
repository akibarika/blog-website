const types = {
    START_GET_BLOG_LIST: 'blogList/START_GET_BLOG_LIST',
    SUCCESS_GET_BLOG_LIST: 'blogList/SUCCESS_GET_BLOG_LIST',
    FAILURE_GET_BLOG_LIST: 'blogList/FAILURE_GET_BLOG_LIST'
}

const initState = {
    status: '',
    list: [],
    amount: 0
}

export default (state = initState, action) => {
    switch (action.type) {
        case types.START_GET_BLOG_LIST:
            return {
                ...state,
                status: 'pending'
            }
        case types.SUCCESS_GET_BLOG_LIST:
            return {
                ...state,
                status: 'success'
            }
        case types.FAILURE_GET_BLOG_LIST:
            return {
                ...state,
                status: 'failure'
            }
        default:
            return state
    }

}
const startGetBlogList = () => ({
    type: types.START_GET_BLOG_LIST
})

const successGetBlogList = () => ({
    type: types.SUCCESS_GET_BLOG_LIST
})

const failureGetBlogList = () => ({
    type: types.FAILURE_GET_BLOG_LIST
})

const requestGetBlogList = () => dispatch => {
    dispatch(startGetBlogList())
    return setTimeout(() => {
        dispatch(successGetBlogList())
    }, 2000);
}

export {requestGetBlogList}