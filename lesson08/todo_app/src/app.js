import React,{ Component } from 'react';
import { connect } from 'react-redux';
import "./app.css";

class App extends Component {
    state={
        todoName:"",
    }
    handleAddTodo=()=>{
        const { dispatch } = this.props
        console.log(this.state.todoName)
        const { todoName } = this.state;
        //todo...保存到Redux的store里
        dispatch({ type: "add", title: todoName})
        this.setState({
            todoName: ""
        });
    }
    handleClickDisplay(value){
        const { dispatch } = this.props
        dispatch({ type:"filter", value:value})
    }
    handleClickTodoItem(todo){
        console.log("click handleClickTodoItem",todo);
        const { dispatch,addTodo } = this.props

        const todoNew = Object.assign({},todo,{
            complete:!todo.complete
        });
        addTodo(todoNew);
    }
    getTodoItemClass(todo){
        return todo.complete?"complete":"";
    }
    getTodos(){
        const { todos,filter }  = this.props
        let todoFilter = [];
        if(filter==="all"){
            todoFilter = todos;
        }else if(filter==="complete"){
            todoFilter = todos.filter((item)=>item.complete===true);
        }else if(filter==="active"){
            todoFilter = todos.filter((item)=>item.complete===false);
        }
        return todoFilter;
    }
    render(){
        const { todoName } = this.state
        const todos = this.getTodos()
        return (
            <div>
                <h1>Todo App</h1>
                <div>
                    <input value={todoName} onChange={(event)=>this.setState({todoName:event.target.value})} />
                    <button onClick={this.handleAddTodo}>Add Todo</button>
                </div>
                <ul>
                    {todos.map(todo=><li className={this.getTodoItemClass(todo)} key={todo.id} onClick={this.handleClickTodoItem.bind(this,todo)}>{todo.title}</li>)}
                </ul>
                <div>
                    <button onClick={this.handleClickDisplay.bind(this,"all")}>全部显示</button>
                    <button onClick={this.handleClickDisplay.bind(this,"complete")}>已完成</button>
                    <button onClick={this.handleClickDisplay.bind(this,"active")}>未完成</button>
                </div>
            </div>
        );
    }
}



export default connect((state)=>{
    console.log("app->connect->state:",state);
    return {
        todos:state.todos,
        filter:state.filter,
    }
},(dispatch)=>{
    console.log("app->connect->props:",dispatch);
    return {
        dispatch:dispatch,
        addTodo:function(todoNew){
            dispatch({
                type:"update",
                todo:todoNew,
            })
        }
    }
})(App);