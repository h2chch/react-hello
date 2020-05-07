import React from 'react'
import Todo from './Todo'


const styles = {
    //textAlign: "center"
}

class TodoList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            todos : []
        }
        this.id = 0
    }

    addTodo() {
        let desc = prompt("Masukkan deskripsi TODO:")
        if (desc) {
            const newTodo = {
                id: this.id++,
                desc: desc,
                checked: false
            }
           const newTodos = [...this.state.todos, newTodo]
           this.setState({
               todos: newTodos
           }) 
        }
    }

    toggleTodo(id) {
        const todos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                return {
                    id: todo.id,
                    desc: todo.desc,
                    checked: !todo.checked
                }
            }

            return todo
        })

        this.setState({
            todos: todos
        })
    }

    deleteTodo(id) {
        const todos = this.state.todos.filter((todo) => {
            return todo.id !== id
        })

        this.setState({
            todos: todos
        })
    }

    render() {
        return (
            <div style={styles}>
                <button type="button" onClick={() => this.addTodo()}>Add</button>
                <h3>Daftar TODO</h3>
                <ul>
                {this.state.todos.map((todo) => 
                    <li key="{todo.id}">
                        <Todo todo={todo} 
                            onToggle={() => this.toggleTodo(todo.id)} 
                            onDelete={() => this.deleteTodo(todo.id)} />
                    </li>
                )}

                </ul>
            </div>
        )
    }

}

export default TodoList;