const { createStore } = require("redux");


function counter(state = 0, action){
    switch(action.type){
        case 'add':
            return state + 1;
        case 'sub':
            return state - 1;
        default:
            return state;
    }
}

const store = createStore( counter );

store.subscribe(() => {
    return console.log( store.getState() );
});

store.dispatch({
    type:'add'
});

store.dispatch({
    type:'add'
});


store.dispatch({
    type:'sub'
});