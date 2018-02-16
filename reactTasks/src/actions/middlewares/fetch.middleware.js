
export default store => next => action => {
    if(action.url) {
        next({type: action.type + '_REQUEST'});

        fetch(action.url)
            .then( res => res.json() )
            .then( (response) => {
                next({type: action.type + '_SUCCESS', response});
                next({type: action.type + '_NOTFETCHING'})
            } )
            .catch( (e = 'error') => {
                next({type: action.type + '_FAILURE', error: e });
                next({type: action.type + '_NOTFETCHING'})
            })
    }
    else next(action)
}