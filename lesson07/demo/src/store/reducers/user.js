function user( state = "未知", action ){
    switch( action.type ){
        case "set":
            return action.name;
        default:
            return state;
    }
}

export default user;