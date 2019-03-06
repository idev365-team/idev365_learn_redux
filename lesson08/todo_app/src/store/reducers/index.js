const initState = {
    todos:[],
    filter:"all",   //all,complete,active
}

function createGenId(){
    let id = 0;
    return function(){
        return id++;
    }
}

const genId = createGenId();

function todoList(state=initState,action){
    switch(action.type){
        case "add":
            {
                const todos = [
                    ...state.todos,{
                        id:genId(),
                        title:action.title,
                        complete:false,
                    }];
                const stateNew = Object.assign({},state,{
                    todos:todos,
                });
                return stateNew;
            }
        case "update":
            {
                let todosNew = [];
                let todoNew = action.todo;
                for(let i=0;i<state.todos.length;i++){
                    let curTodo = state.todos[i];
                    if(curTodo.id===todoNew.id){
                        todosNew.push(todoNew);
                    }else{
                        todosNew.push(curTodo);
                    }
                }
                const stateNew = Object.assign({},state,{
                    todos:todosNew,
                });
                return stateNew;
            }
        case "filter":
            {
                const stateNew = Object.assign({},state,{
                    filter:action.value,
                });
                return stateNew;
            }
        default:
            return state;
    }
}

export default todoList;