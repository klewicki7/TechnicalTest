import actions from '../actions'

const weatherMiddleware = ({ dispatch, getState }) => next => action => {
    next(action)
    switch (action.type) {
        default: return 1;
    }
}

export default weatherMiddleware