const types = {
    START_GET_BLOG: 'blog/START_GET_BLOG',
    SUCCESS_GET_BLOG: 'blog/SUCCESS_GET_BLOG',
    FAILURE_GET_BLOG: 'blog/FAILURE_GET_BLOG'
}

const initState = {
    status: '',
    data: {}
}

export default (state = initState, action) => {
    switch (action.type) {
        case types.START_GET_BLOG:
            return {
                ...state,
                status: 'pending'
            }
        case types.SUCCESS_GET_BLOG:
            return {
                status: 'success',
                data: action.data
            }
        case types.FAILURE_GET_BLOG:
            return {
                ...state,
                status: 'failure'
            }
        default:
            return state
    }
}

const startGetBlog = () => ({
    type: types.START_GET_BLOG
})

const successGetBlog = () => ({
    type: types.SUCCESS_GET_BLOG,
})

const failureGetBlog = () => ({
    type: types.FAILURE_GET_BLOG
})

const requestGetBlog = () => dispatch => {
    dispatch(startGetBlog())
    return setTimeout(() => {
        dispatch(successGetBlog())
    }, 2000);
}

export {requestGetBlog}
